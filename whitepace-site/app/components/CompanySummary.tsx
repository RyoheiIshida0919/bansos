import Link from "next/link";

const rows = [
  { th: "会社名", td: "バンソウズ合同会社" },
  { th: "所在地", td: "島根県（詳細はお問い合わせください）" },
  { th: "事業内容", td: "通販運営代行 / 経営支援 / AI業務効率化" },
  { th: "対応エリア", td: "全国（リモート対応）" },
];

export default function CompanySummary() {
  return (
    <section className="py-24 px-8 lg:px-14" style={{ backgroundColor: "#f8faf5" }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            className="font-bold tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#1e293b" }}
          >
            バンソウズについて
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{ fontSize: "16px", lineHeight: "28px", letterSpacing: "-0.01em", color: "#475569" }}
          >
            島根県を拠点に、地方の中小企業が「やりたいこと」を実行できる環境を作るための伴走支援を行っています。通販の運営代行を中核に、経営支援・AI業務効率化を組み合わせた総合的なサポートが強みです。
          </p>
          <p
            className="leading-relaxed mb-8"
            style={{ fontSize: "16px", lineHeight: "28px", letterSpacing: "-0.01em", color: "#475569" }}
          >
            アドバイスだけで終わらず、必要なら手を動かす。それが私たちの流儀です。
          </p>
          <Link
            href="/company/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border hover:bg-green-50 transition-colors"
            style={{ borderColor: "#1a6035", color: "#1a6035", fontSize: "16px", letterSpacing: "-0.01em" }}
          >
            会社概要を見る
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "#e2e8f0" }}>
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.th}
                  className={i < rows.length - 1 ? "border-b" : ""}
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <th
                    className="text-left px-6 py-5 font-semibold w-36 whitespace-nowrap"
                    style={{ backgroundColor: "#f0fdf4", color: "#1a6035", fontSize: "14px", letterSpacing: "-0.01em" }}
                  >
                    {row.th}
                  </th>
                  <td
                    className="px-6 py-5 bg-white"
                    style={{ fontSize: "15px", color: "#1e293b", letterSpacing: "-0.01em" }}
                  >
                    {row.td}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
