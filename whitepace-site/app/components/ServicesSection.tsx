import Link from "next/link";

const services = [
  {
    num: "01",
    badge: "最重点支援",
    title: "通販の運営代行",
    description:
      "楽天・Amazon・自社ECまで、戦略設計から日々の運用まで一貫サポート。リピート施策を軸に、6ヶ月以内に前年比130%以上を目指します。",
    href: "/services/ecommerce-operation/",
    highlight: true,
  },
  {
    num: "02",
    title: "経営支援",
    description:
      "経営者の右腕として、数字の見える化・意思決定の整理・実務の引き取りを行います。「アドバイスだけ」では終わりません。",
    href: "/services/management-support/",
  },
  {
    num: "03",
    title: "AI業務効率化",
    description:
      "AI・GAS・RPAによる自動化で、「やらなくていい仕事」を減らし、仕組みで回る状態を作ります。",
    href: "/services/ai-efficiency/",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-8 lg:px-14 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2
            className="font-bold tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#1e293b" }}
          >
            バンソウズの3つの支援
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "30px", letterSpacing: "-0.01em", color: "#475569" }}>
            「実務ごと引き受ける」伴走型の支援。<br />
            経営者の右腕として、成果が出るまで一緒に走ります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block rounded-2xl p-8 border transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{
                borderColor: s.highlight ? "#1a6035" : "#e2e8f0",
                backgroundColor: s.highlight ? "#f0fdf4" : "white",
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "#1a6035" }}
                >
                  {s.num}
                </span>
                {s.badge && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#f59e0b", color: "#1e293b" }}
                  >
                    {s.badge}
                  </span>
                )}
              </div>
              <h3
                className="font-bold mb-4"
                style={{ fontSize: "22px", letterSpacing: "-0.02em", color: "#1e293b" }}
              >
                {s.title}
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ fontSize: "15px", color: "#475569", letterSpacing: "-0.01em" }}
              >
                {s.description}
              </p>
              <span
                className="text-sm font-medium tracking-tight flex items-center gap-1"
                style={{ color: "#1a6035" }}
              >
                詳しく見る
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
