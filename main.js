(function () {
  var S = window.SITE;
  var pages = [["Home","index.html"],["About","about.html"],["Services","services.html"],["Portfolio",S.driveLink,"external"],["Contact","#contact","contact"]];
  var here = location.pathname.split("/").pop() || "index.html";
  var wa = "https://wa.me/" + S.whatsappIntl + "?text=" + encodeURIComponent(S.contactMessage);
  var gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(S.email) +
              "&su=" + encodeURIComponent(S.emailSubject) + "&body=" + encodeURIComponent(S.contactMessage);

  var brandHTML = '<a class="brand" href="index.html"><img src="' + assets/logo.png + '" alt="" width="44" height="44"><span>' + S.brand.toUpperCase() + '<i>.</i></span></a>';

  var links = pages.map(function (p) {
    var extra = p[2] === "external" ? ' target="_blank" rel="noopener"' : p[2] === "contact" ? ' data-contact aria-haspopup="dialog"' : '';
    var cur = p[1] === here ? ' class="active" aria-current="page"' : '';
    return '<a href="' + p[1] + '"' + extra + cur + '>' + p[0] + '</a>';
  }).join("");

  var h = document.getElementById("site-header");
  if (h) h.innerHTML =
    '<div class="wrap bar">' + brandHTML +
    '<nav id="nav" aria-label="Main">' + links + '</nav>' +
    '<button class="btn small hide-m" data-contact type="button">Hire me</button>' +
    '<button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button></div>';

  var f = document.getElementById("site-footer");
  if (f) f.innerHTML =
    '<div class="wrap foot"><div>' + brandHTML +
    '<p>' + S.role + ' · Premiere Pro</p></div><nav aria-label="Footer">' + links + '</nav>' +
    '<div class="foot-contact"><a href="' + wa + '" target="_blank" rel="noopener">WhatsApp: ' + S.whatsappDisplay + '</a>' +
    '<a href="mailto:' + S.email + '">' + S.email + '</a></div></div>' +
    '<p class="copy">© ' + new Date().getFullYear() + ' ' + S.firstName + ' ' + S.lastName + '</p>';

  /* contact chooser */
  var d = document.createElement("dialog");
  d.className = "contact-dialog";
  d.setAttribute("aria-labelledby", "cTitle");
  d.innerHTML =
    '<button class="x" type="button" aria-label="Close">×</button>' +
    '<h2 id="cTitle">How do you want to talk?</h2>' +
    '<p>Pick one. Your message is already written, just press send.</p>' +
    '<a class="opt" href="' + wa + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>' +
      '<span><b>WhatsApp</b><small>' + S.whatsappDisplay + '</small></span></a>' +
    '<a class="opt" href="' + gmail + '" target="_blank" rel="noopener">' +
      '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>' +
      '<span><b>Gmail</b><small>' + S.email + '</small></span></a>';
  document.body.appendChild(d);

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-contact]")) {
      e.preventDefault();
      document.getElementById("nav").classList.remove("open");
      d.showModal();
    } else if (e.target === d || e.target.closest(".contact-dialog .x") || e.target.closest(".contact-dialog .opt")) {
      d.close();
    }
  });

  var b = document.getElementById("menuBtn"), n = document.getElementById("nav");
  if (b) b.addEventListener("click", function () {
    var open = n.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll("[data-site]").forEach(function (el) { el.textContent = S[el.dataset.site]; });
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var k = el.dataset.link;
    if (k === "contact") { el.setAttribute("data-contact", ""); el.href = "#contact"; return; }
    el.href = k === "drive" ? S.driveLink : k === "whatsapp" ? wa : "mailto:" + S.email;
    el.target = "_blank"; el.rel = "noopener";
  });

  var list = document.getElementById("services-list");
  if (list) list.innerHTML = S.services.filter(function (s) { return s.showOnHome; }).map(function (s) {
    return '<article class="card"><h3>' + s.title + '</h3><p>' + s.text + '</p></article>';
  }).join("");

  var sk = document.getElementById("skills-list");
  if (sk) sk.innerHTML = S.skills.map(function (t) { return "<span>" + t + "</span>"; }).join("");

  var full = document.getElementById("services-full");
  if (full) full.innerHTML = S.services.map(function (s, i) {
    return '<article class="svc"><span class="num">' + String(i + 1).padStart(2, "0") + '</span><h2>' + s.title + '</h2><p>' + s.text + '</p></article>';
  }).join("");
})();
