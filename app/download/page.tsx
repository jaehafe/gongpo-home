import {
  DownloadClient,
  type DesktopPlatform,
  type DesktopReleases,
} from './download-client';

// 데스크톱 릴리스(gongpo `scripts/upload-to-r2.sh`)가 채널·플랫폼·아키텍처별로 올리는
// electron-updater 피드를 읽어 버전과 다운로드 링크를 만든다. 릴리스하면 이 페이지를 고치지
// 않아도 5분 안에 반영된다.
// 링크는 `releases/latest/`가 아니라 stable 피드의 버전 경로를 쓴다 — latest/는 canary 릴리스도
// 덮어쓰기 때문이다.
const R2_DOWNLOAD_URL = 'https://download.gongpo.me';
const CHANNEL = 'stable';
const REVALIDATE_SECONDS = 300;

export const revalidate = 300;

type ReleasePlatform = Exclude<DesktopPlatform, 'unknown'>;

// 피드 경로와 업로드 스크립트가 정한 공개 다운로드 파일 이름
const FEEDS: Record<
  ReleasePlatform,
  { feed: string; fileName: (version: string) => string }
> = {
  'mac-arm': {
    feed: 'darwin-arm64/latest-mac.yml',
    fileName: v => `Gongpo-${v}-arm64.dmg`,
  },
  'mac-intel': {
    feed: 'darwin-x64/latest-mac.yml',
    fileName: v => `Gongpo-${v}-x64.dmg`,
  },
  windows: {
    feed: 'win32-x64/latest.yml',
    fileName: v => `Gongpo-${v}-Setup.exe`,
  },
  linux: {
    feed: 'linux-x64/latest-linux.yml',
    fileName: v => `Gongpo-${v}-amd64.deb`,
  },
};

async function fetchVersion(feed: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${R2_DOWNLOAD_URL}/releases/channel/${CHANNEL}/${feed}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) return null;
    const match = (await res.text()).match(/^version:\s*['"]?([^'"\s]+)/m);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function getReleases(): Promise<DesktopReleases> {
  const entries = await Promise.all(
    (Object.keys(FEEDS) as ReleasePlatform[]).map(async platform => {
      const { feed, fileName } = FEEDS[platform];
      const version = await fetchVersion(feed);
      if (!version) return null;
      const name = fileName(version);
      return [
        platform,
        {
          version,
          fileName: name,
          url: `${R2_DOWNLOAD_URL}/releases/v${version}/${name}`,
        },
      ] as const;
    })
  );
  return Object.fromEntries(entries.filter(entry => entry !== null));
}

export default async function DownloadPage() {
  return <DownloadClient releases={await getReleases()} />;
}
