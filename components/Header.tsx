import Link from "next/link";

const navItems = [
  { name: "Devlog", href: "/devlog" },
];

function Logo() {
  return (
    <Link href="/" className="flex gap-2">
      <div className="h-6 w-6 rounded-full bg-lime-700"></div>
      <div className="h-6 w-6 rounded-full bg-rose-400"></div>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="w-full py-4 px-8 flex justify-between">
      <Logo />

      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
