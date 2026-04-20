/**
 * バンソウズ合同会社 - main.js
 * - ヘッダーのスクロール影
 * - ハンバーガーメニュー（モバイル）
 * - サービスドロップダウン
 * - スムーズスクロール（固定ヘッダー分のオフセット）
 * - ナビのアクティブ状態（スクロール連動）
 * - FAQアコーディオン
 * - お問い合わせフォームバリデーション
 */

(function () {
  'use strict';

  const header    = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('site-nav');

  // --------------------------------------------------
  // 1. ヘッダー：スクロールで影を追加
  // --------------------------------------------------
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
    updateActiveNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // --------------------------------------------------
  // 2. ハンバーガーメニュー
  // --------------------------------------------------
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('open', !isOpen);
    });

    // ナビリンクをクリックしたらモバイルメニューを閉じる
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });

    // メニュー外をクリックで閉じる
    document.addEventListener('click', function (e) {
      if (header && !header.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.querySelectorAll('#site-nav .has-dropdown').forEach(function (dd) {
          dd.classList.remove('open');
        });
      }
    });
  }

  // --------------------------------------------------
  // 3. サービスドロップダウン（タッチ対応）
  // --------------------------------------------------
  document.querySelectorAll('#site-nav .has-dropdown').forEach(function (item) {
    const toggle = item.querySelector('a');
    if (!toggle) return;
    toggle.addEventListener('click', function (e) {
      // モバイル時のみトグル動作（PCはCSS hoverで対応）
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // --------------------------------------------------
  // 4. スムーズスクロール（固定ヘッダー分のオフセット）
  // --------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 68;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // --------------------------------------------------
  // 5. ナビのアクティブ状態（スクロール連動）
  // --------------------------------------------------
  const allSections = document.querySelectorAll('section[id]');
  const navLinks    = nav ? nav.querySelectorAll('a[href^="#"]') : [];

  function updateActiveNav() {
    if (!nav || !allSections.length) return;
    const scrollY  = window.scrollY;
    const headerH  = header ? header.offsetHeight : 68;

    allSections.forEach(function (section) {
      const sectionTop    = section.offsetTop - headerH - 40;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id            = section.getAttribute('id');
      const link          = nav.querySelector('a[href="#' + id + '"]');

      if (link) {
        link.classList.toggle('active', scrollY >= sectionTop && scrollY < sectionBottom);
      }
    });
  }

  // ページURLでナビアクティブを設定
  (function setNavCurrentPage() {
    if (!nav) return;
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    nav.querySelectorAll('a:not(.dropdown a)').forEach(function (a) {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      const normalized = href.replace(/\/$/, '') || '/';
      if (path === normalized || (normalized !== '/' && path.startsWith(normalized))) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }());

  // --------------------------------------------------
  // 6. FAQアコーディオン
  // --------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', function () {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // 他のアイテムを閉じる
      faqItems.forEach(function (other) {
        const otherQ = other.querySelector('.faq-question');
        const otherA = other.querySelector('.faq-answer');
        if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
        if (otherA) otherA.hidden = true;
      });

      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });

  // --------------------------------------------------
  // 7. お問い合わせフォームバリデーション
  // --------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const fields = {
      company : { el: contactForm.querySelector('[name="company"]'),  msg: '会社名を入力してください' },
      name    : { el: contactForm.querySelector('[name="name"]'),     msg: 'お名前を入力してください' },
      email   : { el: contactForm.querySelector('[name="email"]'),    msg: 'メールアドレスを入力してください', type: 'email' },
      tel     : { el: contactForm.querySelector('[name="tel"]'),      msg: null }, // 任意
      category: { el: contactForm.querySelector('[name="category"]'), msg: 'お問い合わせ種別を選択してください' },
      body    : { el: contactForm.querySelector('[name="body"]'),     msg: 'お問い合わせ内容を入力してください' },
    };

    function showError(key, msg) {
      const f = fields[key];
      if (!f || !f.el) return;
      f.el.classList.add('error');
      const errEl = f.el.parentElement.querySelector('.form-error');
      if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
    }
    function clearError(key) {
      const f = fields[key];
      if (!f || !f.el) return;
      f.el.classList.remove('error');
      const errEl = f.el.parentElement.querySelector('.form-error');
      if (errEl) errEl.classList.remove('show');
    }

    // リアルタイムクリア
    Object.keys(fields).forEach(function (key) {
      const f = fields[key];
      if (!f.el) return;
      f.el.addEventListener('input', function () { clearError(key); });
      f.el.addEventListener('change', function () { clearError(key); });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      Object.keys(fields).forEach(function (key) {
        clearError(key);
      });

      Object.keys(fields).forEach(function (key) {
        const f = fields[key];
        if (!f.el || !f.msg) return;
        const val = f.el.value.trim();
        if (!val) { showError(key, f.msg); valid = false; return; }
        if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          showError(key, '正しいメールアドレスを入力してください');
          valid = false;
        }
      });

      if (!valid) {
        const firstErr = contactForm.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
        if (firstErr) firstErr.focus();
        return;
      }

      // ---------------------------------------------------------------
      // TODO: ここを実際の送信エンドポイントに置き換えてください
      //   例) Cloudflare Workers: fetch('/api/contact', { method:'POST', body: new FormData(contactForm) })
      //   例) Formspree: contactForm.action = 'https://formspree.io/f/YOUR_FORM_ID'
      // ---------------------------------------------------------------
      const submitBtn = contactForm.querySelector('[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '送信中…'; }

      // デモ用: 1.5秒後に成功表示
      setTimeout(function () {
        contactForm.style.display = 'none';
        const successEl = document.getElementById('form-success');
        if (successEl) successEl.style.display = 'block';
      }, 1500);
    });
  }

  // --------------------------------------------------
  // 初期実行
  // --------------------------------------------------
  onScroll();

}());
