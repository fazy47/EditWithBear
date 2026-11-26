(function () {
  var S = window.SITE || {};
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------- Header ---------- */
  var header = document.getElementById("site-header");
  if (header) {
    var links = [
      ["index.html", "Home"],
      ["about.html", "About"],
      ["services.html", "Services"]
    ];
    var nav = links.map(function (l) {
      var active = (page === l[0] || (page === "" && l[0] === "index.html")) ? ' class="active"' : "";
      return '<a href="' + l[0] + '"' + active + ">" + l[1] + "</a>";
    }).join("");
    header.innerHTML =
      '<div class="wrap bar">' +
        '<a class="brand" href="index.html"><img src="logo.png" alt="Edit With Bear logo" width="40" height="40"><span>Edit With Bear</span></a>' +
        '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false">&#9776;</button>' +
        '<nav class="nav">' + nav + '<a class="btn ghost small" data-link="drive" href="#">Portfolio</a><button class="btn small" type="button" data-contact>Let\'s talk</button></nav>' +
      "</div>";
    var mb = header.querySelector(".menu-btn");
    mb.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      mb.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap foot">' +
        "<span>&copy; " + new Date().getFullYear() + " Edit With Bear. All rights reserved.</span>" +
        '<span class="foot-links"><a href="index.html">Home</a><a href="about.html">About</a><a href="services.html">Services</a></span>' +
      "</div>";
  }

  /* ---------- Text from config ---------- */
  document.querySelectorAll("[data-site]").forEach(function (n) {
    var v = S[n.getAttribute("data-site")];
    if (v != null) n.textContent = v;
  });

  /* ---------- Links ---------- */
  function waLink() { return "https://wa.me/" + String(S.whatsapp || "").replace(/\D/g, ""); }
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var t = a.getAttribute("data-link");
    var href = t === "drive" ? S.drive : t === "whatsapp" ? waLink() : t === "email" ? "mailto:" + S.email : null;
    if (href) {
      a.setAttribute("href", href);
      if (t !== "email") { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    }
  });

  /* ---------- Services ---------- */
  var cards = document.getElementById("services-list");
  if (cards && S.services) {
    cards.innerHTML = S.services.map(function (s, i) {
      return '<article class="card"><span class="num">0' + (i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p></article>";
    }).join("");
  }
  var full = document.getElementById("services-full");
  if (full && S.services) {
    full.innerHTML = S.services.map(function (s, i) {
      return '<article class="svc"><span class="num">0' + (i + 1) + '</span><div><h3>' + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p></div></article>";
    }).join("");
  }

  /* ---------- Skills ---------- */
  var skills = document.getElementById("skills-list");
  if (skills && S.skills) {
    skills.innerHTML = S.skills.map(function (k) { return "<span>" + esc(k) + "</span>"; }).join("");
  }

  /* ---------- Contact popup ---------- */
  var modal;
  function buildModal() {
    modal = el("div", "modal");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML =
      '<div class="modal-box">' +
        '<button class="modal-x" type="button" aria-label="Close">&times;</button>' +
        "<h2>Let's <span class=\"lime\">talk</span></h2>" +
        "<p>Tell me about your video. Pick how you want to reach me.</p>" +
        '<div class="btns">' +
          '<a class="btn" target="_blank" rel="noopener" href="' + waLink() + '">WhatsApp</a>' +
          '<a class="btn ghost" href="mailto:' + esc(S.email || "") + '">Email</a>' +
        "</div>" +
      "</div>";
    document.body.appendChild(modal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("modal-x")) closeModal();
    });
  }
  function openModal() { if (!modal) buildModal(); modal.classList.add("show"); }
  function closeModal() { if (modal) modal.classList.remove("show"); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-contact]");
    if (b) { e.preventDefault(); openModal(); }
  });
})();
