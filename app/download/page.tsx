'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Download,
  Apple,
  Monitor,
  ChevronDown,
  Smartphone,
} from 'lucide-react';

type DesktopPlatform =
  | 'mac-arm'
  | 'mac-intel'
  | 'windows'
  | 'linux'
  | 'unknown';
type MobilePlatform = 'ios' | 'android';
type Platform = DesktopPlatform | MobilePlatform;

interface DownloadInfo {
  platform: DesktopPlatform;
  label: string;
  icon: React.ReactNode;
  fileName: string;
  description: string;
}

const R2_DOWNLOAD_URL = 'https://download.gongpo.me';
const VERSION = '0.1.0';

const MOBILE_APPS = {
  ios: {
    url: 'https://apps.apple.com/us/app/gongpo/id6754605109',
    label: 'App Store',
    icon: <Apple className="w-5 h-5" />,
  },
  android: {
    url: 'https://play.google.com/store/apps/details?id=com.jaeha.gongpo',
    label: 'Google Play',
    icon: <Smartphone className="w-5 h-5" />,
  },
};

const downloadOptions: Record<DesktopPlatform, DownloadInfo> = {
  'mac-arm': {
    platform: 'mac-arm',
    label: 'Download for macOS',
    icon: <Apple className="w-5 h-5" />,
    fileName: `Gongpo-${VERSION}-arm64.dmg`,
    description: 'Apple Silicon (M1/M2/M3)',
  },
  'mac-intel': {
    platform: 'mac-intel',
    label: 'Download for macOS',
    icon: <Apple className="w-5 h-5" />,
    fileName: `Gongpo-${VERSION}-x64.dmg`,
    description: 'Intel Processor',
  },
  windows: {
    platform: 'windows',
    label: 'Download for Windows',
    icon: <Monitor className="w-5 h-5" />,
    fileName: `Gongpo-${VERSION}-Setup.exe`,
    description: 'Windows 10/11 (64-bit)',
  },
  linux: {
    platform: 'linux',
    label: 'Download for Linux',
    icon: <Monitor className="w-5 h-5" />,
    fileName: `Gongpo-${VERSION}-amd64.deb`,
    description: 'Debian/Ubuntu (.deb)',
  },
  unknown: {
    platform: 'unknown',
    label: 'Download',
    icon: <Download className="w-5 h-5" />,
    fileName: '',
    description: 'Select your platform',
  },
};

function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'unknown';

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  // iOS detection
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }

  // Android detection
  if (/android/.test(userAgent)) {
    return 'android';
  }

  if (platform.includes('mac') || userAgent.includes('mac')) {
    // Check for Apple Silicon
    const isArmMac =
      (navigator as Navigator & { userAgentData?: { platform: string } })
        .userAgentData?.platform === 'macOS'
        ? true
        : /arm|aarch64/.test(userAgent) ||
          (platform === 'macintel' && navigator.maxTouchPoints > 0);

    return isArmMac ? 'mac-arm' : 'mac-intel';
  }

  if (platform.includes('win') || userAgent.includes('windows')) {
    return 'windows';
  }

  if (platform.includes('linux') || userAgent.includes('linux')) {
    return 'linux';
  }

  return 'unknown';
}

function getDownloadUrl(fileName: string): string {
  return `${R2_DOWNLOAD_URL}/releases/v${VERSION}/${fileName}`;
}

export default function DownloadPage() {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>('unknown');
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  useEffect(() => {
    // Platform detection must run on client side
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDetectedPlatform(detectPlatform());
  }, []);

  const isMobile = detectedPlatform === 'ios' || detectedPlatform === 'android';
  const primaryDownload = isMobile
    ? downloadOptions['unknown']
    : downloadOptions[detectedPlatform as DesktopPlatform];
  const desktopPlatforms = Object.values(downloadOptions).filter(
    (opt) => opt.platform !== 'unknown',
  );

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Download Gongpo
          </h1>
          <p className="text-xl text-muted-foreground">
            Your ideas, always with you — on every device
          </p>
        </header>

        {/* Mobile App Section - Show first on mobile devices */}
        {isMobile && (
          <section className="mb-12">
            <div className="bg-card/80 backdrop-blur border rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-6">Get the App</h2>
              <a
                href={
                  detectedPlatform === 'ios'
                    ? MOBILE_APPS.ios.url
                    : MOBILE_APPS.android.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                {detectedPlatform === 'ios'
                  ? MOBILE_APPS.ios.icon
                  : MOBILE_APPS.android.icon}
                {detectedPlatform === 'ios'
                  ? 'Download on App Store'
                  : 'Get it on Google Play'}
              </a>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Also available on
                </p>
                <a
                  href={
                    detectedPlatform === 'ios'
                      ? MOBILE_APPS.android.url
                      : MOBILE_APPS.ios.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  {detectedPlatform === 'ios'
                    ? MOBILE_APPS.android.icon
                    : MOBILE_APPS.ios.icon}
                  <span className="text-sm">
                    {detectedPlatform === 'ios' ? 'Google Play' : 'App Store'}
                  </span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Desktop Download Section */}
        <section className="mb-12">
          <div className="bg-card/80 backdrop-blur border rounded-2xl p-8 text-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Desktop App v{VERSION}
              </span>
            </div>

            {!isMobile && detectedPlatform !== 'unknown' ? (
              <>
                <a
                  href={getDownloadUrl(primaryDownload.fileName)}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors mb-3"
                >
                  {primaryDownload.icon}
                  {primaryDownload.label}
                </a>
                <p className="text-sm text-muted-foreground">
                  {primaryDownload.description}
                </p>
              </>
            ) : !isMobile ? (
              <p className="text-muted-foreground">
                Detecting your operating system...
              </p>
            ) : null}

            <button
              onClick={() => setShowAllPlatforms(!showAllPlatforms)}
              className={`${isMobile ? '' : 'mt-6'} inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm`}
            >
              {isMobile ? 'Desktop downloads' : 'Other platforms'}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAllPlatforms ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showAllPlatforms && (
              <div className="mt-6 pt-6 border-t grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {desktopPlatforms.map((option) => (
                  <a
                    key={option.platform}
                    href={getDownloadUrl(option.fileName)}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    {option.icon}
                    <span className="font-medium text-sm">
                      {option.platform === 'mac-arm' && 'macOS (Apple Silicon)'}
                      {option.platform === 'mac-intel' && 'macOS (Intel)'}
                      {option.platform === 'windows' && 'Windows'}
                      {option.platform === 'linux' && 'Linux'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {option.fileName}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Mobile Apps Section - Show on desktop */}
        {!isMobile && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Mobile Apps
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href={MOBILE_APPS.ios.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/80 backdrop-blur border rounded-2xl p-6 flex items-center gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                  {MOBILE_APPS.ios.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Download on the
                  </p>
                  <p className="font-semibold text-lg">App Store</p>
                </div>
              </a>
              <a
                href={MOBILE_APPS.android.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/80 backdrop-blur border rounded-2xl p-6 flex items-center gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                  {MOBILE_APPS.android.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Get it on</p>
                  <p className="font-semibold text-lg">Google Play</p>
                </div>
              </a>
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Apple className="w-5 h-5" />
                <h3 className="font-semibold">macOS</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>macOS 11.0 (Big Sur) or later</li>
                <li>Apple Silicon or Intel processor</li>
                <li>4GB RAM minimum</li>
              </ul>
            </div>
            <div className="bg-card/50 border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-5 h-5" />
                <h3 className="font-semibold">Windows</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Windows 10 or later (64-bit)</li>
                <li>4GB RAM minimum</li>
                <li>500MB disk space</li>
              </ul>
            </div>
            <div className="bg-card/50 border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-5 h-5" />
                <h3 className="font-semibold">Linux</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Ubuntu 20.04+ or equivalent</li>
                <li>64-bit processor</li>
                <li>4GB RAM minimum</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="text-center">
          <p className="text-sm text-muted-foreground">
            By downloading, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
