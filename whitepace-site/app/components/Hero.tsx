import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#1a6035" }} className="relative overflow-hidden">
      {/* Figma wave background — multiple lines at 30% opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full opacity-20"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <path
              key={i}
              d={`M-200 ${300 + i * 30} Q360 ${100 + i * 20} 720 ${300 + i * 30} Q1080 ${500 + i * 20} 1640 ${300 + i * 30}`}
              stroke="white"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`b${i}`}
              d={`M-200 ${180 + i * 25} Q360 ${380 + i * 15} 720 ${180 + i * 25} Q1080 ${-20 + i * 15} 1640 ${180 + i * 25}`}
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <Navbar />

      {/* Hero body — py-140 px-220 in Figma → responsive equivalent */}
      <div className="relative max-w-[1200px] mx-auto px-8 lg:px-14 pt-16 pb-24 md:pt-20 md:pb-32 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left: text block */}
        <div className="flex-1 max-w-[540px]">
          <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-5">
            島根県発・全国対応の伴走型支援
          </p>
          {/* Figma: Inter Bold 64px, tracking -1.28px */}
          <h1
            className="text-white font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 64px)", letterSpacing: "-0.02em" }}
          >
            地域に、<br />選択肢をつくる。
          </h1>
          <p
            className="text-white/80 font-medium mb-4"
            style={{ fontSize: "clamp(18px, 2vw, 22px)", letterSpacing: "-0.02em" }}
          >
            「できない」を「できる」に。
          </p>
          {/* Figma: Inter Regular 18px, line-height 30px */}
          <p
            className="text-white/65 leading-relaxed mb-10"
            style={{ fontSize: "18px", lineHeight: "30px", letterSpacing: "-0.01em" }}
          >
            通販の運営、経営の整理、業務の効率化。<br />
            単なるアドバイスではなく、考え、整理し、必要なら手を動かす。<br />
            地方の中小企業が「やりたいこと」を実行できる環境を、一緒に作ります。
          </p>
          {/* Figma: Btn-free-trial style — bg #4f9cf9, px-20 py-20, rounded-8 */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="flex items-center gap-2.5 px-8 py-4 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2d6a4f", fontSize: "18px", letterSpacing: "-0.01em" }}
            >
              無料相談する
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/services/"
              className="flex items-center px-8 py-4 rounded-lg font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
              style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
            >
              サービスを見る
            </Link>
          </div>
        </div>

        {/* Right: image — Figma uses #C4DEFD image-container, we use representative photo */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div
            className="relative w-full max-w-[480px] aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#c4defd" }}
          >
            <Image
              src="/representative.jpg"
              alt="バンソウズ代表"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
