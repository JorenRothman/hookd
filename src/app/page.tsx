import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Link prefetch={false} className="bg-white text-black py-2 px-4 text-center font-medium font-mono uppercase" href="/create">New Endpoint</Link>
    </main>
    );
}
