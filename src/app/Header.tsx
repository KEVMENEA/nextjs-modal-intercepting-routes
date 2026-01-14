import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-red-600">
      <div className="container mx-auto px-8 py-4">
        <Link href="/" className="block">
          <h1 className="text-3xl font-medium text-center text-red-900">
            Angkor Wat Really Amazing of Cambodia
          </h1>
        </Link>
      </div>
    </header>
  );
}
