"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/" || pathname.startsWith("/image")
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition",
        isActive
          ? "bg-slate-900 text-white"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function TopNav() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <nav className="flex items-center gap-2">
          <NavItem href="/" label="AI图片" />
          <NavItem href="/video" label="AI视频" />
        </nav>
      </div>
    </header>
  );
}

