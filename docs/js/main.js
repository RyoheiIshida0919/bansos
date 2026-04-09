/**
 * バンソウズ合同会社 - main.js
 * - ヘッダーのスクロール影
 * - ハンバーガーメニュー（モバイル）
 * - スムーズスクロール（固定ヘッダー分のオフセット）
 * - ナビのアクティブ状態（スクロール連動）
 * - FAQアコーディオン
 */

(function () {
  'use strict';

  const header     = document.getElementById('site-header');
  const hamburger  = document.getElementById('hamburger');
  const nav        = document.getElementById('site-nav');
  const faqItems   = document.querySelectorAll('.faq-item');
  const navLinks   = document.querySelectorAll('#site-nav a[href^="#"]');
  const allSections = document.querySelectorAll('section[id]');

  // --------------------------------------------------
  // 1. ヘッダー：スクロールで影を追加
  // --------------------------------------------------
  function onScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // --------------------------------------------------
  // 2. ハンバーガーメニュー
  // --------------------------------------------------
  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });

  // ナビリンクをクリックしたらモバイルメニューを閉じる
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });

  // メニュー外をクリックで閉じる
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });

  // --------------------------------------------------
  // 3. スムーズスクロール（固定ヘッダー分のオフセット）
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
      const headerHeight = header.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // --------------------------------------------------
  // 4. ナビのアクティブ状態（スクロール連動）
  // --------------------------------------------------
  function updateActiveNav() {
    const scrollY = window.scrollY;
    const headerH = header.offsetHeight;

    allSections.forEach(function (section) {
      const sectionTop    = section.offsetTop - headerH - 40;
      const sectionBottom = sectionTop + section.offsetHeight;
      const id            = section.getAttribute('id');
      const link          = nav.querySelector('a[href="#' + id + '"]');

      if (link) {
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  // --------------------------------------------------
  // 5. FAQアコーディオン
  // --------------------------------------------------
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // 他のアイテムを閉じる
      faqItems.forEach(function (other) {
        const otherQ = other.querySelector('.faq-question');
        const otherA = other.querySelector('.faq-answer');
        otherQ.setAttribute('aria-expanded', 'false');
        otherA.hidden = true;
      });

      // クリックしたアイテムをトグル
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });

  // --------------------------------------------------
  // 初期実行
  // --------------------------------------------------
  onScroll();

}());
