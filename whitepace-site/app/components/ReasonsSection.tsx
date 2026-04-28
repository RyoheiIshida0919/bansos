const reasons = [
  {
    num: "01",
    title: "実務まで担うから、成果が出る",
    description:
      "アドバイスだけで終わらず、メルマガ配信・広告運用・ページ制作まで対応。現場経験があるからこそ、先回りして手を動かせます。",
  },
  {
    num: "02",
    title: "継続的な伴走で、仕組みが残る",
    description:
      "最初は代行、次はレクチャー、最終的には自社で運営できる体制に。売上だけでなく、仕組みと判断基準を社内に残します。",
  },
  {
    num: "03",
    title: "EC・経営・AIを横断して見られる",
    description:
      "通販運営だけでなく、経営の数字整理、業務の自動化まで対応。複数の専門家に頼まなくても、一箇所で相談できます。",
  },
];

export default function ReasonsSection() {
  return (
    <section className="py-24 px-8 lg:px-14 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#1e293b" }}
          >
            なぜバンソウズが選ばれるのか
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((r) => (
            <div key={r.num}>
              {/* Large number — Figma decorative num style */}
              <p
                className="font-bold mb-4"
                style={{ fontSize: "64px", letterSpacing: "-0.04em", color: "#dcfce7", lineHeight: 1 }}
              >
                {r.num}
              </p>
              <h3
                className="font-bold mb-4"
                style={{ fontSize: "22px", letterSpacing: "-0.02em", color: "#1e293b" }}
              >
                {r.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: "15px", color: "#475569", letterSpacing: "-0.01em" }}
              >
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
