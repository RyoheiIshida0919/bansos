import Link from "next/link";

export default function ContactCTA() {
  return (
    /* Figma Free Trial section: dark bg, centered, pt-140 pb-32, large heading */
    <section
      className="relative overflow-hidden py-32 px-8 text-center"
      style={{ backgroundColor: "#1a6035" }}
    >
      {/* Subtle wave BG */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-10">
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M-200 ${200 + i * 40} Q360 ${400 + i * 20} 720 ${200 + i * 40} Q1080 ${0 + i * 20} 1640 ${200 + i * 40}`}
              stroke="white" strokeWidth="1.5" fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Figma: Inter Bold 72px, tracking -1.44px, w-608 */}
        <h2
          className="text-white font-bold leading-tight"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.02em" }}
        >
          まずは、お気軽に<br />ご相談ください
        </h2>

        {/* Figma: Inter Regular 24px, line-height 32px */}
        <p
          className="text-white/70"
          style={{ fontSize: "clamp(16px, 2vw, 24px)", lineHeight: "32px", letterSpacing: "-0.01em" }}
        >
          「何から相談すればいいか分からない」でも大丈夫です。<br />
          現状をお聞きして、必要な支援を一緒に整理します。<br />
          無理な営業はしません。30分で持ち帰れる話をします。
        </p>

        {/* Figma: Btn-try — bg #4f9cf9, px-40 py-20, rounded-10 */}
        <Link
          href="/contact/"
          className="flex items-center gap-3 rounded-xl font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2d6a4f", fontSize: "16px", padding: "20px 40px", letterSpacing: "-0.02em" }}
        >
          無料相談・お問い合わせ
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <p className="text-white/50 text-base" style={{ letterSpacing: "-0.01em" }}>
          島根県を拠点に、全国のご相談に対応しています
        </p>
      </div>
    </section>
  );
}
