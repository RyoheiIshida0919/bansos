<?php
/*
 Template Name: 通販運営代行LP
 Description: 通販運営代行サービスのランディングページ
*/

add_filter('body_class', function ($classes) {
  $classes[] = 'ec-lp-page';
  return $classes;
}, 99);

add_action('wp_enqueue_scripts', function () {

  wp_register_style('ec-lp-style', false, [], null);
  wp_enqueue_style('ec-lp-style');

  $css = <<<CSS
.ec-lp-page header,
.ec-lp-page #top_title_area,
.ec-lp-page #breadcrumb { display:none!important; }

.ec-lp {
  --primary: #0ea5e9;
  --primary-dark: #0284c7;
  --accent: #f59e0b;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f0f9ff;
  --bg-white: #fff;
  --border: #e0f2fe;
  --success: #059669;
  font-family: -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Yu Gothic", sans-serif;
  line-height: 1.85;
  color: var(--text);
}

.ec-lp * { box-sizing: border-box; }
.ec-lp section { padding: 80px 20px; }
.ec-lp .container { max-width: 1100px; margin: 0 auto; }

.section-header { text-align: center; margin-bottom: 56px; }
.section-header h2 { font-size: 34px; margin-bottom: 14px; line-height: 1.4; }
.section-header p { color: var(--text-light); font-size: 17px; }

.cta-button {
  display: inline-block;
  padding: 20px 52px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 17px;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(245,158,11,.4);
  transition: background .2s, transform .1s;
}
.cta-button:hover { background: #d97706; transform: translateY(-2px); }

/* ---- FV ---- */
.fv-section {
  background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 60%, #38bdf8 100%);
  color: #fff;
  text-align: center;
  padding: 120px 20px 100px;
}
.fv-badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 28px; }
.fv-badge {
  background: rgba(255,255,255,.2);
  border: 1px solid rgba(255,255,255,.4);
  padding: 8px 22px;
  border-radius: 999px;
  font-size: 13px;
}
.fv-section h1 { font-size: 48px; line-height: 1.3; margin-bottom: 16px; }
.fv-section h1 em { font-style: normal; color: #fde68a; }
.fv-section .fv-sub { font-size: 22px; margin-bottom: 24px; opacity: .9; }
.fv-lead { max-width: 700px; margin: 0 auto 40px; font-size: 17px; line-height: 2; opacity: .95; }
.fv-kpi {
  display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;
  margin-bottom: 44px;
}
.fv-kpi-item {
  background: rgba(255,255,255,.15);
  border-radius: 16px;
  padding: 20px 32px;
  min-width: 160px;
}
.fv-kpi-item .kpi-num { font-size: 40px; font-weight: 800; color: #fde68a; line-height: 1; }
.fv-kpi-item .kpi-label { font-size: 13px; margin-top: 6px; opacity: .85; }

/* ---- 共感 ---- */
.empathy-section { background: var(--bg-light); }
.pain-list { list-style: none; max-width: 820px; margin: 0 auto 36px; padding: 0; }
.pain-list li {
  background: #fff;
  padding: 22px 22px 22px 58px;
  border-radius: 12px;
  margin-bottom: 12px;
  position: relative;
  font-size: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,.06);
}
.pain-list li::before {
  content: "×";
  position: absolute;
  left: 22px; top: 20px;
  color: #ef4444;
  font-weight: 800;
  font-size: 18px;
}
.empathy-conclusion {
  background: var(--primary);
  color: #fff;
  padding: 28px 32px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  max-width: 820px;
  margin: 0 auto;
}

/* ---- 定義 ---- */
.definition-section { background: #fff; }
.definition-box {
  background: var(--bg-light);
  border-left: 5px solid var(--primary);
  padding: 32px 36px;
  border-radius: 0 12px 12px 0;
  max-width: 820px;
  margin: 0 auto 32px;
  font-size: 17px;
  line-height: 2;
}

/* ---- 支援内容 ---- */
.services-section { background: var(--bg-light); }
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.service-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}
.service-icon {
  font-size: 32px;
  margin-bottom: 14px;
}
.service-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--primary-dark);
}
.service-card p { font-size: 15px; color: var(--text-light); }

/* ---- 実績 ---- */
.cases-section { background: #fff; }
.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  max-width: 900px;
  margin: 0 auto;
}
.case-card {
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 32px;
}
.case-badge {
  display: inline-block;
  background: var(--bg-light);
  color: var(--primary-dark);
  font-size: 13px;
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.case-card h3 { font-size: 17px; margin-bottom: 8px; }
.case-result {
  font-size: 38px;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
  margin: 12px 0;
}
.case-result span { font-size: 16px; font-weight: 400; color: var(--text-light); }
.case-list { list-style: none; padding: 0; margin: 16px 0 0; }
.case-list li {
  padding: 6px 0 6px 22px;
  position: relative;
  font-size: 14px;
  color: var(--text);
}
.case-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
  font-weight: 700;
}

/* ---- 選ばれる理由 ---- */
.reasons-section { background: var(--bg-light); }
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}
.reason-card {
  background: #fff;
  border-radius: 16px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.06);
}
.reason-number {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  line-height: 52px;
  margin: 0 auto 16px;
}
.reason-card h3 { font-size: 18px; margin-bottom: 10px; }
.reason-card p { font-size: 15px; color: var(--text-light); }

/* ---- 対象 ---- */
.target-section { background: #fff; }
.target-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 820px;
  margin: 0 auto;
}
@media(max-width:600px){ .target-grid { grid-template-columns: 1fr; } }
.target-yes, .target-no {
  border-radius: 16px;
  padding: 28px;
}
.target-yes {
  background: #ecfdf5;
  border: 2px solid #6ee7b7;
}
.target-no {
  background: #fff5f5;
  border: 2px solid #fca5a5;
}
.target-yes h3 { color: var(--success); margin-bottom: 14px; font-size: 16px; }
.target-no h3 { color: #ef4444; margin-bottom: 14px; font-size: 16px; }
.target-list { list-style: none; padding: 0; margin: 0; }
.target-list li { padding: 6px 0; font-size: 15px; }
.target-yes .target-list li::before { content: "○ "; color: var(--success); font-weight: 700; }
.target-no .target-list li::before { content: "× "; color: #ef4444; font-weight: 700; }

/* ---- 料金 ---- */
.pricing-section { background: var(--bg-light); }
.pricing-note {
  text-align: center;
  color: var(--text-light);
  font-size: 14px;
  margin-top: 20px;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  max-width: 820px;
  margin: 0 auto;
}
.pricing-card {
  background: #fff;
  border: 2px solid var(--border);
  border-radius: 20px;
  padding: 40px 32px;
  text-align: center;
}
.pricing-card.recommended {
  border-color: var(--primary);
  position: relative;
}
.pricing-rec-badge {
  position: absolute;
  top: -14px; left: 50%; transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 20px;
  border-radius: 999px;
  white-space: nowrap;
}
.pricing-card h3 { font-size: 18px; margin-bottom: 8px; }
.pricing-price {
  font-size: 48px;
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
  margin: 20px 0 4px;
}
.pricing-price span { font-size: 16px; font-weight: 400; color: var(--text-light); }
.pricing-desc { font-size: 14px; color: var(--text-light); margin-bottom: 20px; }
.pricing-list { list-style: none; padding: 0; text-align: left; }
.pricing-list li {
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #f3f4f6;
}
.pricing-list li::before { content: "✓ "; color: var(--success); font-weight: 700; }

/* ---- FAQ ---- */
.faq-section { background: #fff; }
.faq-list { max-width: 820px; margin: 0 auto; }
.faq-item {
  background: var(--bg-light);
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
}
.faq-question {
  width: 100%; border: none; background: none;
  padding: 22px 24px;
  font-size: 16px; font-weight: 700;
  text-align: left; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center;
  color: var(--text);
}
.faq-question::after {
  content: "+";
  font-size: 22px;
  color: var(--primary);
  transition: transform .2s;
  flex-shrink: 0;
  margin-left: 12px;
}
.faq-question[aria-expanded="true"]::after { transform: rotate(45deg); }
.faq-answer { padding: 0 24px 22px; display: none; font-size: 15px; color: var(--text); line-height: 1.9; }
.faq-question[aria-expanded="true"] + .faq-answer { display: block; }

/* ---- 最終CTA ---- */
.final-cta-section {
  background: linear-gradient(135deg, #0369a1, #0ea5e9);
  color: #fff;
  text-align: center;
  padding: 100px 20px;
}
.final-cta-section h2 { font-size: 36px; margin-bottom: 16px; }
.final-cta-section p { font-size: 17px; margin-bottom: 36px; opacity: .9; line-height: 2; }

/* ---- Responsive ---- */
@media (max-width: 768px) {
  .fv-section h1 { font-size: 32px; }
  .fv-section .fv-sub { font-size: 18px; }
  .section-header h2 { font-size: 26px; }
  .pricing-price { font-size: 38px; }
}
CSS;

  wp_add_inline_style('ec-lp-style', $css);

  wp_register_script('ec-lp-script', false, [], null, true);
  wp_enqueue_script('ec-lp-script');

  $js = <<<JS
document.querySelectorAll('.faq-question').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
    });
    btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });
});
JS;

  wp_add_inline_script('ec-lp-script', $js);

}, 20);

get_header();
$contact_url = esc_url('https://bansos.co.jp/contact/');
?>

<div class="ec-lp">

<!-- ========== FV ========== -->
<section class="fv-section">
  <div class="container">
    <div class="fv-badges">
      <span class="fv-badge">楽天・Amazon・自社EC対応</span>
      <span class="fv-badge">実務ごと引き受ける</span>
      <span class="fv-badge">全国リモート対応</span>
    </div>
    <h1>EC売上が頭打ちなら、<br><em>運営ごと引き受けます</em></h1>
    <p class="fv-sub">通販運営代行 ── 戦略設計から日々の運用まで一貫サポート</p>
    <div class="fv-lead">
      <p>アドバイスだけで終わりません。<br>
         メルマガ・広告・ページ改善まで、手を動かして成果を出します。</p>
    </div>
    <div class="fv-kpi">
      <div class="fv-kpi-item">
        <div class="kpi-num">10<small style="font-size:22px">倍</small></div>
        <div class="kpi-label">売上成長の実績</div>
      </div>
      <div class="fv-kpi-item">
        <div class="kpi-num">130<small style="font-size:22px">%</small></div>
        <div class="kpi-label">6ヶ月以内の成長目標</div>
      </div>
      <div class="fv-kpi-item">
        <div class="kpi-num">7<small style="font-size:22px">社</small></div>
        <div class="kpi-label">現在の支援実績</div>
      </div>
    </div>
    <a href="<?php echo $contact_url; ?>" class="cta-button">
      無料相談する（30分・オンライン）
    </a>
  </div>
</section>

<!-- ========== 共感 ========== -->
<section class="empathy-section">
  <div class="container">
    <div class="section-header">
      <h2>こんなお悩み、ありませんか？</h2>
    </div>
    <ul class="pain-list">
      <li>EC売上が頭打ちになっていて、何を改善すればいいかわからない</li>
      <li>社内にECに詳しい人がおらず、施策を判断できる人間がいない</li>
      <li>やりたい施策はあるが、手が回らず実行できていない</li>
      <li>外注に任せても成果が出ず、コストだけかかっている</li>
      <li>モールの運営ルールや広告が複雑で、担当者が疲弊している</li>
      <li>リピーターが増えず、新規集客頼みの売上構造から抜け出せない</li>
    </ul>
    <div class="empathy-conclusion">
      それは「やり方」ではなく「手が動いていないこと」が原因です。<br>
      バンソウズは、戦略設計から実務まで丸ごと引き受けます。
    </div>
  </div>
</section>

<!-- ========== サービス定義 ========== -->
<section class="definition-section">
  <div class="container">
    <div class="section-header">
      <h2>通販運営代行とは何か</h2>
      <p>「コンサル」とは根本的に違います</p>
    </div>
    <div class="definition-box">
      <p>一般的なコンサルは、<strong>「何をすべきか」を教えて終わり</strong>です。</p>
      <p>バンソウズの通販運営代行は、<strong>「やるべきことを、実際にやる」</strong>ことまでを含みます。</p>
      <p>年間販売計画の設計・メルマガ配信・広告運用・ページ改善——<br>
         担当者の代わりに手を動かし、成果が出るまで伴走し続けます。</p>
    </div>
  </div>
</section>

<!-- ========== 支援内容 ========== -->
<section class="services-section">
  <div class="container">
    <div class="section-header">
      <h2>支援内容</h2>
      <p>EC業務のほぼすべて（受発注以外）を代行できます</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">📋</div>
        <h3>年間販売計画の設計</h3>
        <p>月次の売上目標・施策カレンダーを設計。「何をいつやるか」を明確にし、場当たり的な運営から脱却します。</p>
      </div>
      <div class="service-card">
        <div class="service-icon">📧</div>
        <h3>メルマガ・LINE配信の設計と代行</h3>
        <p>リピート施策の核となるメルマガ・LINE配信を一貫代行。原稿作成から配信・効果測定まで担当します。</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🛒</div>
        <h3>商品ページ・LPの構成改善</h3>
        <p>楽天・Amazon・自社ECの商品ページを購買につながる構成に改善。画像ディレクション・コピー作成も対応。</p>
      </div>
      <div class="service-card">
        <div class="service-icon">📣</div>
        <h3>広告運用</h3>
        <p>楽天広告・Amazonスポンサープロダクト・SNS広告の設定・運用・改善を代行。費用対効果を継続的に管理します。</p>
      </div>
      <div class="service-card">
        <div class="service-icon">📊</div>
        <h3>数字の見える化・レポート整備</h3>
        <p>売上・アクセス・CVRなどを一覧できるレポートを整備。「今何が起きているか」を毎月共有します。</p>
      </div>
      <div class="service-card">
        <div class="service-icon">🎓</div>
        <h3>社内担当者の育成・ノウハウ移管</h3>
        <p>将来的に自社で運営できる体制を作ることも支援します。代行しながら、判断基準とノウハウを社内に残します。</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== 実績 ========== -->
<section class="cases-section">
  <div class="container">
    <div class="section-header">
      <h2>支援実績</h2>
      <p>「売上が伸びない」から「自走できる体制」へ</p>
    </div>
    <div class="cases-grid">
      <div class="case-card">
        <span class="case-badge">食品・旅館 EC</span>
        <h3>有限会社 湯宿温泉堂 様</h3>
        <div class="case-result">約5倍 <span>の売上成長</span></div>
        <p style="font-size:14px;color:#6b7280;">課題：EC人材・ノウハウ不足でリピート施策が停止していた</p>
        <ul class="case-list">
          <li>メルマガ設計・配信代行によるリピート売上の確保</li>
          <li>ギフト施策の年間計画設計＋早割導入</li>
          <li>LINE導線整備・DM制作</li>
          <li>社内へのノウハウ移管・担当者育成</li>
        </ul>
      </div>
      <div class="case-card">
        <span class="case-badge">食品・フルーツ EC</span>
        <h3>株式会社 果物園やまもと 様</h3>
        <div class="case-result">約10倍 <span>の売上成長</span></div>
        <p style="font-size:14px;color:#6b7280;">課題：モール出店はしていたが、売上を活かしきれていなかった</p>
        <ul class="case-list">
          <li>自社EC・楽天・Amazonの統合戦略設計</li>
          <li>商品ページ制作・SEO・SNS広告設計</li>
          <li>初回施策は代行、後半は社内担当へ引き継ぎ</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ========== 選ばれる理由 ========== -->
<section class="reasons-section">
  <div class="container">
    <div class="section-header">
      <h2>なぜバンソウズが選ばれるのか</h2>
    </div>
    <div class="reasons-grid">
      <div class="reason-card">
        <div class="reason-number">1</div>
        <h3>実務まで担うから、成果が出る</h3>
        <p>「方針を決めて終わり」ではありません。メルマガ原稿・広告運用・ページ改善まで手を動かします。現場経験があるからこそ、先回りして動けます。</p>
      </div>
      <div class="reason-card">
        <div class="reason-number">2</div>
        <h3>伴走し続けるから、仕組みが残る</h3>
        <p>最初は代行、次はレクチャー、最終的には自社で運営できる体制に。売上だけでなく、再現性のある仕組みと判断基準を社内に残します。</p>
      </div>
      <div class="reason-card">
        <div class="reason-number">3</div>
        <h3>EC・業務効率化・AIを横断して見られる</h3>
        <p>通販運営だけでなく、業務フローの改善やAI活用まで一気通貫で対応。複数の専門家に発注しなくても、一箇所で完結します。</p>
      </div>
    </div>
  </div>
</section>

<!-- ========== 対象 ========== -->
<section class="target-section">
  <div class="container">
    <div class="section-header">
      <h2>こんな会社が対象です</h2>
    </div>
    <div class="target-grid">
      <div class="target-yes">
        <h3>✓ こんな方はご相談ください</h3>
        <ul class="target-list">
          <li>年商1,000万〜3億円程度の通販事業者</li>
          <li>楽天・Amazon・自社ECを運営している</li>
          <li>売上が頭打ちで改善したい</li>
          <li>社内にEC専任担当がいない</li>
          <li>長期で成果を積み上げていきたい</li>
          <li>誠実に一緒に取り組める方</li>
        </ul>
      </div>
      <div class="target-no">
        <h3>× お断りするケース</h3>
        <ul class="target-list">
          <li>短期間だけの単発改善が目的</li>
          <li>成果が出なくても責任は問わない方針</li>
          <li>社内での情報共有が極端に少ない</li>
          <li>新規受注は月額15万円未満のご予算</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ========== 料金 ========== -->
<section class="pricing-section">
  <div class="container">
    <div class="section-header">
      <h2>料金プラン</h2>
      <p>長期前提のサブスクリプション型。スポットや短期のご依頼は受けておりません。</p>
    </div>
    <div class="pricing-grid">
      <div class="pricing-card">
        <h3>スタートプラン</h3>
        <div class="pricing-price">15<span>万円〜/月</span></div>
        <p class="pricing-desc">特定領域の支援からスタート</p>
        <ul class="pricing-list">
          <li>月次戦略整理・方針設計</li>
          <li>指定領域の実務代行（メルマガ or 広告 等）</li>
          <li>月次レポート・定期MTG</li>
          <li>チャット相談（平日）</li>
        </ul>
      </div>
      <div class="pricing-card recommended">
        <span class="pricing-rec-badge">おすすめ</span>
        <h3>フル代行プラン</h3>
        <div class="pricing-price">20<span>万円〜/月</span></div>
        <p class="pricing-desc">EC全体を一貫してお任せいただくプラン</p>
        <ul class="pricing-list">
          <li>年間販売計画の設計・管理</li>
          <li>メルマガ・LINE・広告の設計と代行</li>
          <li>商品ページ・LP改善</li>
          <li>数字の見える化・月次レポート</li>
          <li>定期MTG（月2回）</li>
          <li>チャット相談（平日）</li>
        </ul>
      </div>
    </div>
    <p class="pricing-note">※ 支援内容・稼働時間によってご提案金額は変わります。まずはご相談ください。</p>
  </div>
</section>

<!-- ========== FAQ ========== -->
<section class="faq-section">
  <div class="container">
    <div class="section-header">
      <h2>よくあるご質問</h2>
    </div>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          どんな業種・モールに対応していますか？
        </button>
        <div class="faq-answer">
          食品・化粧品・雑貨など消費財を中心に、楽天市場・Amazon・Yahoo!ショッピング・自社ECに対応しています。主力モールや業種に合わせた支援が可能です。
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          月商が少なくても依頼できますか？
        </button>
        <div class="faq-answer">
          月商数十万円の段階から支援してきた実績が多数あります。現在の売上規模より「成長意欲があるか・長期前提で取り組めるか」を重視しています。年商1,000万〜3億円程度の通販事業者が中心ですが、まずはご相談ください。
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          どこまで代行してもらえますか？
        </button>
        <div class="faq-answer">
          受発注以外のEC業務はほぼすべて対応可能です。具体的には、戦略設計・年間計画・メルマガ配信・広告運用・商品ページ制作・数字管理・レポート整備・担当者育成まで含みます。
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          遠方からの依頼でも大丈夫ですか？
        </button>
        <div class="faq-answer">
          全国対応しています。基本的にリモート（オンラインMTG・チャット）での支援です。必要に応じて現地訪問にも対応します。
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          成果はどのくらいで出ますか？
        </button>
        <div class="faq-answer">
          目安として、支援開始から6ヶ月以内に前年同月比130%以上の売上成長を目標としています。ただし、支援内容・商材・初期状態によって異なります。まず現状をお聞きした上で、現実的な見立てをお伝えします。
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          最低契約期間はありますか？
        </button>
        <div class="faq-answer">
          継続的な伴走型支援を基本としているため、短期改善のみのご依頼はお断りしています。成果を出すために必要な期間（目安6ヶ月〜）を前提にご検討ください。
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ========== 最終CTA ========== -->
<section class="final-cta-section">
  <div class="container">
    <h2>まず、現状を話してみてください</h2>
    <p>「何から相談すればいいか分からない」でも大丈夫です。<br>
       現状をお聞きして、必要な支援と進め方を一緒に整理します。<br>
       無理な営業はしません。30分で持ち帰れる話をします。</p>
    <a href="<?php echo $contact_url; ?>" class="cta-button">
      無料相談する（30分・オンライン）
    </a>
  </div>
</section>

</div>

<?php get_footer(); ?>
