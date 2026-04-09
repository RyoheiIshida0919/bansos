<?php
/*
 Template Name: IT・Web LP（最終完成版）
 Description: IT担当がいない会社向けの配置型IT・Webマーケ支援LP
*/

add_filter('body_class', function ($classes) {
  $classes[] = 'it-web-lp-page';
  return $classes;
}, 99);

add_action('wp_enqueue_scripts', function () {

  wp_register_style('it-web-lp-style', false, [], null);
  wp_enqueue_style('it-web-lp-style');

  $css = <<<CSS
.it-web-lp-page header,
.it-web-lp-page #top_title_area,
.it-web-lp-page #breadcrumb { display:none!important; }

.it-web-lp{
--primary:#2563eb;--primary-dark:#1e40af;
--text:#1f2937;--text-light:#6b7280;
--bg-light:#f9fafb;--bg-white:#fff;
--border:#e5e7eb;--success:#059669;
font-family:-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic",sans-serif;
line-height:1.8;color:var(--text);
}

.it-web-lp *{box-sizing:border-box;}
.it-web-lp section{padding:80px 20px;}
.it-web-lp .container{max-width:1100px;margin:0 auto;}
.section-header{text-align:center;margin-bottom:60px;}
.section-header h2{font-size:36px;margin-bottom:16px;}
.section-header p{color:var(--text-light);}

.cta-button{
display:inline-block;padding:18px 48px;
border-radius:999px;font-weight:700;
background:var(--primary);color:#fff;
text-decoration:none;
}
.cta-button:hover{background:var(--primary-dark);}

.fv-section{
background:linear-gradient(135deg,#667eea,#764ba2);
color:#fff;text-align:center;
padding:110px 20px 90px;
}
.fv-badges{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;}
.fv-badge{background:rgba(255,255,255,.2);padding:8px 20px;border-radius:999px;font-size:14px;}
.fv-section h1{font-size:46px;margin-bottom:12px;}
.fv-section h2{font-size:24px;margin-bottom:28px;}
.fv-lead{max-width:720px;margin:0 auto 36px;font-size:18px;}

.empathy-section{background:var(--bg-light);}
.pain-list{list-style:none;max-width:820px;margin:0 auto 32px;padding:0;}
.pain-list li{
background:#fff;padding:24px 24px 24px 56px;
border-radius:12px;margin-bottom:14px;
position:relative;
}
.pain-list li::before{
content:"×";position:absolute;left:22px;top:22px;
color:#ef4444;font-weight:800;
}

.empathy-conclusion{
background:var(--primary);color:#fff;
padding:28px;border-radius:12px;
text-align:center;font-weight:700;
max-width:820px;margin:0 auto;
}

.definition-content,.necessity-content{
max-width:820px;margin:0 auto;font-size:18px;
}

.process-steps{
display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:20px;max-width:900px;margin:0 auto;
}
.process-step{
border:2px solid var(--border);
border-radius:16px;padding:28px;
}

.case-section{background:var(--bg-light);}
.case-card{
background:#fff;border:2px solid var(--border);
border-radius:16px;padding:28px;
max-width:720px;margin:0 auto;
}
.case-meta{font-size:13px;color:var(--text-light);margin-bottom:6px;}
.case-note{margin-top:12px;font-size:14px;color:var(--text-light);}

.pillars-grid{
display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:30px;
}
.pillar-card{
border:2px solid var(--border);border-radius:16px;
padding:36px;text-align:center;
}
.pillar-number{
width:48px;height:48px;border-radius:50%;
background:var(--primary);color:#fff;
line-height:48px;font-weight:800;margin:0 auto 16px;
}

.not-doing-section{background:var(--bg-light);}
.not-doing-list{
list-style:none;display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:16px;padding:0;
}
.not-doing-list li{
background:#fff;padding:22px;border-radius:12px;
font-weight:700;text-align:center;
}

.pricing-grid{
display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:30px;max-width:900px;margin:0 auto;
}
.pricing-card{
border:2px solid var(--border);border-radius:16px;
padding:36px;text-align:center;
}
.pricing-card.recommended{border-color:var(--primary);}
.pricing-price{font-size:44px;font-weight:800;color:var(--primary);}

.faq-item{
background:#fff;border-radius:12px;margin-bottom:14px;
}
.faq-question{
width:100%;border:none;background:none;
padding:22px;font-size:17px;font-weight:700;text-align:left;
}
.faq-answer{padding:0 22px 22px;display:none;}
.faq-question[aria-expanded="true"]+.faq-answer{display:block;}

.final-cta-section{
background:linear-gradient(135deg,#667eea,#764ba2);
color:#fff;text-align:center;
padding:90px 20px;
}
CSS;

  wp_add_inline_style('it-web-lp-style', $css);

  wp_register_script('it-web-lp-script', false, [], null, true);
  wp_enqueue_script('it-web-lp-script');

  $js = <<<JS
document.querySelectorAll('.faq-question').forEach(btn=>{
btn.addEventListener('click',()=>{
const open=btn.getAttribute('aria-expanded')==='true';
document.querySelectorAll('.faq-question').forEach(b=>{
b.setAttribute('aria-expanded','false');
});
btn.setAttribute('aria-expanded',open?'false':'true');
});
});
JS;

  wp_add_inline_script('it-web-lp-script', $js);

},20);

get_header();
$contact_url = esc_url('https://bansos.co.jp/contact/');
?>

<div class="it-web-lp">

<section class="fv-section">
<div class="container">
<div class="fv-badges">
<span class="fv-badge">IT担当がいない会社向け</span>
<span class="fv-badge">社長本人がラクになる</span>
</div>
<h1>社長の頭からITの悩みを取り除きます</h1>
<h2>ITの弱みを強みに変える</h2>
<div class="fv-lead">
<p>IT担当がいない会社のための 配置型 IT・Webマーケ支援</p>
<p>他社ではIT経由で売上が生まれている。<br>でも、自社ではうまくいっていない。</p>
<p><strong>その悩みを、社長の代わりに引き受けます。</strong></p>
</div>
<a href="<?php echo $contact_url; ?>" class="cta-button">
売上を伸ばす進め方を30分で整理する
</a>
</div>
</section>

<section class="empathy-section">
<div class="container">
<div class="section-header"><h2>こんな状態になっていませんか？</h2></div>
<ul class="pain-list">
<li>IT経由で売上が生まれていない</li>
<li>何を改善すればいいかわからない</li>
<li>研修しても現場が変わらない</li>
<li>外注の提案を判断できない</li>
<li>Webの話になると止まる</li>
</ul>
<div class="empathy-conclusion">
IT担当がいないまま、社長が判断を抱え込んでいることが原因です。
</div>
</div>
</section>

<section class="case-section">
<div class="container">
<div class="section-header">
<h2>導入事例</h2>
<p>IT担当がいない小売・直販企業（匿名）</p>
</div>
<div class="case-card">
<div class="case-meta">小売・直販（EC）</div>
<h3>Webから売上が上がるイメージを描けなかった</h3>
<ul>
<li>売上とWeb導線を整理</li>
<li>効果の高い施策に集中</li>
<li>不要な施策を止め判断を単純化</li>
</ul>
<div class="case-note">
Web経由の売上が増え、<br>
「なんでも相談できる安心感がある」と評価されています。
</div>
</div>
</div>
</section>

<section class="pricing-section">
<div class="container">
<div class="section-header">
<h2>料金プラン</h2>
<p>社長の右腕として配置される感覚です</p>
</div>
<div class="pricing-grid">
<div class="pricing-card">
<h3>ベーシック</h3>
<div class="pricing-price">15<span>万円/月</span></div>
<ul>
<li>特定領域の改善</li>
<li>戦略整理＋一部実務</li>
</ul>
</div>
<div class="pricing-card recommended">
<h3>フルサポート</h3>
<div class="pricing-price">30<span>万円/月</span></div>
<ul>
<li>IT・Webを原則すべて対応</li>
<li>社長と直接やり取り</li>
<li>IT人材の採用・育成で悩まなくてよくなる</li>
</ul>
</div>
</div>
</div>
</section>

<section class="final-cta-section">
<div class="container">
<h2>まずは状況整理から</h2>
<p>無理な営業はしません。<br>30分で進め方を持ち帰ってください。</p>
<a href="<?php echo $contact_url; ?>" class="cta-button">
売上を伸ばす進め方を30分で整理する
</a>
</div>
</section>

</div>

<?php get_footer(); ?>