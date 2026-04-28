export default function MissionBand() {
  return (
    <section
      className="py-6 text-center"
      style={{ backgroundColor: "#14532d" }}
      aria-label="ミッション"
    >
      <p
        className="text-white font-bold tracking-tight"
        style={{ fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: "-0.02em" }}
      >
        地域に、選択肢をつくる。
      </p>
      <p className="text-white/50 text-sm mt-1 tracking-widest">
        Creating Options for the Region
      </p>
    </section>
  );
}
