const pains = [
  "ECの売上が頭打ちになっていて、何を改善すればいいかわからない",
  "社内にECに詳しい人がおらず、施策を判断できる人間がいない",
  "やりたい施策はあるが、手が回らず実行できていない",
  "経営の数字が見えづらく、判断に迷うことが多い",
  "業務が属人化していて、仕組み化できていない",
  "外注に任せても成果が出ず、コストだけかかっている",
];

export default function PainSection() {
  return (
    <section className="py-24 px-8 lg:px-14" style={{ backgroundColor: "#f8faf5" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Figma section header: Inter Bold ~48px, centered */}
        <div className="text-center mb-14">
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#1e293b" }}
          >
            こんなお悩み、ありませんか？
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {pains.map((pain) => (
            <li
              key={pain}
              className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 shadow-sm border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <span
                className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "#f59e0b" }}
              >
                ✓
              </span>
              <span
                className="leading-relaxed"
                style={{ fontSize: "15px", color: "#475569", letterSpacing: "-0.01em" }}
              >
                {pain}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="text-center mt-12 leading-relaxed"
          style={{ fontSize: "18px", color: "#1e293b", letterSpacing: "-0.01em" }}
        >
          それは「やり方」ではなく、<strong>「手が動いていないこと」</strong>が原因です。<br />
          バンソウズは、戦略設計から実務まで丸ごと引き受けます。
        </p>
      </div>
    </section>
  );
}
