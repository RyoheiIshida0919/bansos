"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    label: "サービス",
    href: "/services/",
    children: [
      { label: "通販の運営代行", href: "/services/ecommerce-operation/" },
      { label: "経営支援", href: "/services/management-support/" },
      { label: "AI業務効率化", href: "/services/ai-efficiency/" },
    ],
  },
  { label: "実績", href: "/works/" },
  { label: "よくある質問", href: "/faq/" },
  { label: "会社概要", href: "/company/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-8 lg:px-14 py-4 max-w-[1200px] mx-auto w-full">
      {/* Logo */}
      <Link href="/" aria-label="バンソウズ合同会社 トップへ">
        <Image
          src="/logo.png"
          alt="バンソウズ合同会社"
          width={140}
          height={40}
          className="h-10 w-auto brightness-0 invert"
          priority
        />
      </Link>

      {/* Desktop nav — DM Sans style: medium weight, 18px */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label} className="relative group">
            <Link
              href={link.href}
              className="flex items-center gap-1.5 text-white/90 hover:text-white text-[15px] font-medium tracking-tight transition-colors"
            >
              {link.label}
              {link.children && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
            {link.children && (
              <ul className="absolute top-full left-0 mt-3 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 border border-gray-100">
                {link.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-[#1a6035] transition-colors">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Figma-style dual buttons: Login(yellow) + CTA(accent) */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/contact/"
          className="h-[48px] px-8 flex items-center justify-center rounded-lg text-[15px] font-medium tracking-tight transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#f59e0b", color: "#1e293b" }}
        >
          お問い合わせ
        </Link>
        <Link
          href="/contact/"
          className="h-[48px] px-6 flex items-center justify-center gap-2 rounded-lg text-[15px] font-medium text-white tracking-tight transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2d6a4f" }}
        >
          無料相談する
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5h8M6 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="メニューを開く"
      >
        <span className="block w-6 h-0.5 bg-white mb-1.5" />
        <span className="block w-6 h-0.5 bg-white mb-1.5" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a6035] border-t border-white/10 py-5 px-8 z-50 md:hidden space-y-1">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="block text-white/85 py-2 text-sm font-medium">
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/contact/" className="block text-center text-sm px-4 py-3 rounded-lg font-medium" style={{ backgroundColor: "#f59e0b", color: "#1e293b" }}>
              お問い合わせ
            </Link>
            <Link href="/contact/" className="block text-center text-sm px-4 py-3 rounded-lg font-medium text-white" style={{ backgroundColor: "#2d6a4f" }}>
              無料相談する →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
