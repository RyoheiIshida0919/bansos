export async function onRequestPost(context) {
  const { request, env } = context;

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return jsonRes({ ok: false }, 500);
  }

  let data;
  try {
    const ct = request.headers.get('content-type') || '';
    data = ct.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return jsonRes({ ok: false }, 400);
  }

  const {
    company  = '',
    name     = '',
    email    = '',
    tel      = '',
    category = '',
    body     = '',
    _hp      = '',
  } = data;

  // Honeypot: 入力があればボットと判断し、成功を偽装
  if (_hp) {
    return jsonRes({ ok: true }, 200);
  }

  // バリデーション
  if (!name.trim())                                         return jsonRes({ ok: false }, 400);
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return jsonRes({ ok: false }, 400);
  if (!category.trim())                                     return jsonRes({ ok: false }, 400);
  if (!body.trim())                                         return jsonRes({ ok: false }, 400);
  if (body.length > 5000)                                   return jsonRes({ ok: false }, 400);

  const categoryLabel = {
    ecommerce  : '通販の運営代行について',
    management : '経営支援について',
    ai         : 'AI業務効率化について',
    multiple   : '複数のサービスについて',
    other      : 'その他',
  }[category] || escHtml(category);

  const sendDate  = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  const referer   = request.headers.get('Referer')    || '不明';
  const userAgent = request.headers.get('User-Agent') || '不明';

  const html = `
<h2 style="font-size:18px;margin-bottom:16px">バンソウズ合同会社 HP お問い合わせ</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;font-size:14px">
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap">会社名</th>
    <td style="padding:8px 12px;border:1px solid #ddd">${escHtml(company || '未入力')}</td>
  </tr>
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap">お名前</th>
    <td style="padding:8px 12px;border:1px solid #ddd">${escHtml(name)}</td>
  </tr>
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap">メールアドレス</th>
    <td style="padding:8px 12px;border:1px solid #ddd">${escHtml(email)}</td>
  </tr>
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap">電話番号</th>
    <td style="padding:8px 12px;border:1px solid #ddd">${escHtml(tel || '未入力')}</td>
  </tr>
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap">お問い合わせ種別</th>
    <td style="padding:8px 12px;border:1px solid #ddd">${categoryLabel}</td>
  </tr>
  <tr>
    <th style="text-align:left;padding:8px 12px;border:1px solid #ddd;background:#f5f5f5;white-space:nowrap;vertical-align:top">お問い合わせ内容</th>
    <td style="padding:8px 12px;border:1px solid #ddd;white-space:pre-wrap">${escHtml(body)}</td>
  </tr>
</table>
<hr style="margin:24px 0;border:none;border-top:1px solid #eee">
<p style="font-size:12px;color:#888;line-height:1.8">
  送信日時：${escHtml(sendDate)}<br>
  送信元URL：${escHtml(referer)}<br>
  User-Agent：${escHtml(userAgent)}
</p>
`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@bansos.co.jp',
        to: ['info@bansos.co.jp'],
        reply_to: email.trim(),
        subject: '【お問い合わせ】ホームページより',
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', res.status, err);
      return jsonRes({ ok: false }, 500);
    }

    return jsonRes({ ok: true }, 200);
  } catch (err) {
    console.error('Fetch error:', err);
    return jsonRes({ ok: false }, 500);
  }
}

function jsonRes(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
