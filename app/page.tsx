import Link from "next/link";
import { FileText, WifiOff, Users, Cloud, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Gongpo</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Your ideas, always with you
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A local-first note-taking app that keeps your documents safe on your
            device while enabling seamless collaboration with others.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Rich Text Editor"
              description="Create and organize your notes with a powerful rich text editor."
            />
            <FeatureCard
              icon={<WifiOff className="w-6 h-6" />}
              title="Work Offline"
              description="Work offline without worry — your data stays on your device and syncs when you're ready."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Real-time Collaboration"
              description="Collaborate in real time by inviting teammates to your workspace. See changes as they happen."
            />
            <FeatureCard
              icon={<Cloud className="w-6 h-6" />}
              title="Cloud Sync"
              description="Sync across all your devices with cloud backup, so your notes are always accessible."
            />
          </div>
        </section>

        <section className="text-center mb-16 py-12 bg-card/50 rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-4">
            Your Workspace, Your Way
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Your notes, your workspace, your way — Experience it all with
            Gongpo.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Download Now
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Legal</h2>
          <div className="flex justify-center gap-8">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
        </section>

        <footer className="border-t pt-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Developer & Contact</h3>
            <p className="text-muted-foreground mb-4">Developer: Jaeha Lee</p>
            <a
              href="mailto:gongpoapp@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              gongpoapp@gmail.com
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Please send your inquiries by email. Welcome any feedback!
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-card/50 rounded-xl border hover:border-foreground/20 transition-colors">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
