(function () {
  // Highlight the table-of-contents link for the section in view
  var links = document.querySelectorAll('.toc a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); });
        if (map[e.target.id]) map[e.target.id].classList.add('active');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });
  }

  // Analytics: one event per tracked link or button, so GA shows what recruiters actually use
  function track(name, label) {
    if (typeof window.gtag === 'function') window.gtag('event', name, { link_label: label });
  }
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () { track('contact_click', el.getAttribute('data-track')); });
  });

  // Copy email address
  var copy = document.getElementById('copy-email');
  if (copy) {
    copy.addEventListener('click', function () {
      var addr = copy.getAttribute('data-email');
      var done = function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy address'; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(done, function () { copy.textContent = addr; });
      } else { copy.textContent = addr; }
    });
  }
})();
