import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "通販の運営代行", href: "/services/ecommerce-operation/" },
  { label: "経営支援", href: "/services/management-support/" },
  { label: "AI業務効率化", href: "/services/ai-efficiency/" },
];

const info = [
  { label: "実績", href: "/works/" },
  { label: "よくある質問", href: "/faq/" },
  { label: "会社概要", href: "/company/" },
  { label: "お問い合わせ", href: "/contact/" },
  { label: "プライバシーポリシー", href: "/privacy/" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#14532d" }}>
      <div className="max-w-[1200px] mx-auto px-8 lg:px-14 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
        <div>
          <Link href="/" aria-label="バンソウズ合同会社 トップへ" className="inline-block mb-5">
            <Image
              src="/logo.png"
              alt="バンソウズ合同会社"
              width={140}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p
            className="text-white/50 leading-relaxed"
            style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
          >
            地域に、選択肢をつくる。<br />
            通販運営代行・経営支援・AI業務効率化
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4
              className="text-white/80 font-semibold mb-4"
              style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
            >
              サービス
            </h4>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-white transition-colors"
                    style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4
              className="text-white/80 font-semibold mb-4"
              style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
            >
              サイト情報
            </h4>
            <ul className="space-y-3">
              {info.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-white transition-colors"
                    style={{ fontSize: "14px", letterSpacing: "-0.01em" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t px-8 lg:px-14 py-5 flex flex-col md:flex-row justify-between items-center gap-2"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <p className="text-white/30 text-xs" style={{ letterSpacing: "-0.01em" }}>
          &copy; 2026 バンソウズ合同会社
        </p>
        <Link
          href="/privacy/"
          className="text-white/30 text-xs hover:text-white transition-colors"
          style={{ letterSpacing: "-0.01em" }}
        >
          プライバシーポリシー
        </Link>
      </div>
    </footer>
  );
}
