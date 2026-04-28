import Link from "next/link";

export default function HighlightBand() {
  return (
    <section className="py-20 px-8 text-center" style={{ backgroundColor: "#14532d" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-white font-bold tracking-tight mb-5"
          style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}
        >
          通販を伸ばしたいが、社内で回らない。
        </h2>
        <p
          className="text-white/65 mb-10"
          style={{ fontSize: "18px", lineHeight: "30px", letterSpacing: "-0.01em" }}
        >
          「担当者がいない」「何をすればいいかわからない」「外注したけど成果が出ない」<br />
          そんな通販事業者の課題を、実務ごと引き受けて解決します。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/services/ecommerce-operation/"
            className="h-[52px] px-8 flex items-center rounded-lg font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#f59e0b", color: "#1e293b", fontSize: "16px", letterSpacing: "-0.01em" }}
          >
            通販運営代行を見る
          </Link>
          <Link
            href="/contact/"
            className="h-[52px] px-8 flex items-center rounded-lg font-medium text-white border border-white/30 hover:bg-white/10 transition-colors"
            style={{ fontSize: "16px", letterSpacing: "-0.01em" }}
          >
            まず相談してみる
          </Link>
        </div>
      </div>
    </section>
  );
}
