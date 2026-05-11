export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await request.json();
  } else {
    const formData = await request.formData();
    data = Object.fromEntries(formData.entries());
  }

  const { company, name, email, tel, category, body } = data;

  if (!company || !name || !email || !category || !body) {
    return new Response(JSON.stringify({ error: '必須項目が不足しています' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const html = `
<h2>バンソウズ合同会社 HP お問い合わせ</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px">
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">会社名</th><td style="padding:8px;border:1px solid #ddd">${escHtml(company)}</td></tr>
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">お名前</th><td style="padding:8px;border:1px solid #ddd">${escHtml(name)}</td></tr>
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">メール</th><td style="padding:8px;border:1px solid #ddd">${escHtml(email)}</td></tr>
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">電話</th><td style="padding:8px;border:1px solid #ddd">${escHtml(tel || '—')}</td></tr>
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">種別</th><td style="padding:8px;border:1px solid #ddd">${escHtml(category)}</td></tr>
  <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">内容</th><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escHtml(body)}</td></tr>
</table>
`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@bansos.co.jp',
      to: ['ishida@bansos.co.jp'],
      reply_to: email,
      subject: `【HP問い合わせ】${category}｜${company} ${name}様`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: '送信に失敗しました' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
