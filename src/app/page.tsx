import { Flame, Shield, Zap } from "lucide-react";
import Link from "next/link";

function ForgeBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Molten forge background"
      >
        <defs>
          <linearGradient id="lava" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#7c2d12" />
          </linearGradient>
        </defs>

        {/* Molten flow curves */}
        <path
          d="M-100 600 Q 200 400, 400 500 T 900 300 L 900 600 Z"
          fill="url(#lava)"
          opacity="0.5"
        />
        <path
          d="M-100 500 Q 150 350, 350 450 T 900 200 L 900 600 Z"
          fill="url(#lava)"
          opacity="0.35"
        />
        <path
          d="M-100 400 Q 300 300, 500 400 T 900 100 L 900 600 Z"
          fill="url(#lava)"
          opacity="0.25"
        />
      </svg>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/70 to-background" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ForgeBackground />
      <header className="relative z-10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-amber-600 flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Crucible</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Start building free
          </Link>
        </nav>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Ship your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-amber-500 to-orange-600">
                Next.js app
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              in hours, not weeks
            </p>

            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Production-ready Next.js starter with auth, database, and UI components built-in.
              Focus on your project, not the boilerplate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto sm:mx-0">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-medium">Production-ready from day one</h3>
              <p className="text-sm text-muted-foreground">
                Auth, database, and best practices configured. No setup required.
              </p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mx-auto sm:mx-0">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-medium">Security handled</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade auth with Better Auth. OWASP-compliant out of the box.
              </p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center mx-auto sm:mx-0">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-medium">Built for scale</h3>
              <p className="text-sm text-muted-foreground">
                Drizzle ORM, PostgreSQL, and a bulletproof architecture that grows with you.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
