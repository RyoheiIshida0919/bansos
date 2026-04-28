import Link from "next/link";

const cases = [
  {
    tag: "食品・旅館 EC",
    company: "有限会社 湯宿温泉堂 様",
    note: "（※社名は仮称。実名は掲載許可取得後に更新）",
    result: "約5倍",
    resultLabel: "の売上成長",
    challenge: "EC人材・ノウハウ不足でリピート施策が停止していた",
    items: [
      "メルマガ設計・配信代行によるリピート売上の確保",
      "ギフト施策の年間計画設計＋早割導入",
      "LINE導線整備・DM制作",
      "社内へのノウハウ移管・担当者育成",
    ],
  },
  {
    tag: "食品・フルーツ EC",
    company: "株式会社 果物園やまもと 様",
    note: "（※社名は仮称。実名は掲載許可取得後に更新）",
    result: "約10倍",
    resultLabel: "の売上成長",
    challenge: "モール出店はしていたが、売上を活かしきれていなかった",
    items: [
      "自社EC・楽天・Amazonの統合戦略設計",
      "商品ページ制作・SEO・SNS広告設計",
      "初回施策は代行、後半は社内担当へ引き継ぎ",
    ],
  },
];

export default function CasesSection() {
  return (
    <section className="py-24 px-8 lg:px-14" style={{ backgroundColor: "#f8faf5" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#1e293b" }}
          >
            支援実績
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "30px", letterSpacing: "-0.01em", color: "#475569" }}>
            「売上が伸びない」から「自走できる体制」へ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c) => (
            <div
              key={c.company}
              className="bg-white rounded-2xl p-8 border"
              style={{ borderColor: "#e2e8f0" }}
            >
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: "#dcfce7", color: "#1a6035" }}
              >
                {c.tag}
              </span>
              <h3
                className="font-bold mb-1"
                style={{ fontSize: "18px", letterSpacing: "-0.02em", color: "#1e293b" }}
              >
                {c.company}
              </h3>
              <p className="text-xs mb-5" style={{ color: "#94a3b8" }}>{c.note}</p>

              <div className="flex items-baseline gap-2 mb-5 pb-5 border-b" style={{ borderColor: "#e2e8f0" }}>
                <span
                  className="font-bold"
                  style={{ fontSize: "clamp(36px, 4vw, 48px)", letterSpacing: "-0.03em", color: "#1a6035" }}
                >
                  {c.result}
                </span>
                <span style={{ fontSize: "16px", color: "#475569", letterSpacing: "-0.01em" }}>
                  {c.resultLabel}
                </span>
              </div>

              <p className="text-sm mb-4" style={{ color: "#475569", letterSpacing: "-0.01em" }}>
                <strong style={{ color: "#1e293b" }}>課題：</strong>{c.challenge}
              </p>
              <ul className="space-y-2">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#475569", letterSpacing: "-0.01em" }}>
                    <span className="mt-0.5 shrink-0" style={{ color: "#1a6035" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/works/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium border hover:bg-green-50 transition-colors"
            style={{ borderColor: "#1a6035", color: "#1a6035", fontSize: "16px", letterSpacing: "-0.01em" }}
          >
            実績一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
