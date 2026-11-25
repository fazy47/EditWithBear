:root{
  --bg:#0b0b0c; --panel:#141416; --panel2:#1b1b1f; --line:#27272c;
  --text:#f4f4f5; --muted:#a1a1aa; --lime:#c8ff2e; --lime-ink:#0b0b0c;
  --radius:16px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:"Outfit",system-ui,sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.wrap{width:min(1120px,100% - 40px);margin-inline:auto}
.lime{color:var(--lime)}
h1,h2,h3{font-family:"Anton","Outfit",sans-serif;font-weight:400;letter-spacing:.02em;line-height:1.05;text-transform:uppercase}

/* Header */
#site-header{position:sticky;top:0;z-index:50;background:rgba(11,11,12,.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.bar{display:flex;align-items:center;justify-content:space-between;height:68px}
.brand{display:flex;align-items:center;gap:10px;font-family:"Anton",sans-serif;font-size:1.25rem;letter-spacing:.04em;text-transform:uppercase}
.brand img{width:40px;height:40px;border-radius:10px;object-fit:cover}
.nav{display:flex;align-items:center;gap:26px}
.nav a{color:var(--muted);font-weight:500;transition:color .2s}
.nav a:hover,.nav a.active{color:var(--lime)}
.menu-btn{display:none;background:none;border:1px solid var(--line);color:var(--text);font-size:1.4rem;width:42px;height:42px;border-radius:10px;cursor:pointer}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 26px;border-radius:999px;border:2px solid var(--lime);background:var(--lime);color:var(--lime-ink);font:600 1rem "Outfit",sans-serif;cursor:pointer;transition:transform .15s,box-shadow .2s,background .2s}
.btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(200,255,46,.25)}
.btn.ghost{background:transparent;color:var(--text);border-color:var(--line)}
.btn.ghost:hover{border-color:var(--lime);color:var(--lime);box-shadow:none}
.btn.small{padding:9px 20px;font-size:.92rem}
.btns{display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}

/* Hero */
.hero{padding:80px 0 60px}
.hero .wrap{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center}
.hello{color:var(--lime);font-weight:600;letter-spacing:.12em;text-transform:uppercase;font-size:.9rem}
.hero h1{font-size:clamp(3.4rem,9vw,6.5rem);margin:10px 0 18px}
.hero h1 .ln{display:block}
.intro{color:var(--muted);font-size:1.15rem;max-width:520px}
.stats{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}
.stat{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px 18px;min-width:130px}
.stat b{display:block;font-size:1.05rem}
.stat span{color:var(--muted);font-size:.85rem}

/* Timeline mock */
.tl{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:16px;overflow:hidden}
.tl-top{display:flex;justify-content:space-between;font-size:.8rem;color:var(--muted);margin-bottom:12px}
.tl-top b{color:var(--lime)}
.track{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.track em{width:34px;flex:none;font-style:normal;font-size:.72rem;color:var(--muted);text-align:center}
.lane{position:relative;flex:1;height:36px;background:var(--panel2);border-radius:8px}
.clip{position:absolute;top:4px;bottom:4px;border-radius:6px;font-size:.7rem;font-weight:600;display:flex;align-items:center;padding:0 8px;overflow:hidden;white-space:nowrap}
.clip.t{background:#a78bfa;color:#10101a}
.clip.v{background:#38bdf8;color:#07131a}
.clip.a{background:#34d399;color:#06150e}
.clip.s{background:var(--lime);color:var(--lime-ink)}
.playhead{position:absolute;top:44px;bottom:60px;left:56px;width:2px;background:#ff4d4d;box-shadow:0 0 10px #ff4d4d;animation:play 7s linear infinite}
.playhead::before{content:"";position:absolute;top:-4px;left:-5px;border:6px solid transparent;border-top-color:#ff4d4d}
@keyframes play{from{left:56px}to{left:calc(100% - 20px)}}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.chips span,.skill-tags span{border:1px solid var(--line);border-radius:999px;padding:5px 12px;font-size:.8rem;color:var(--muted)}

/* Sections */
.block{padding:60px 0}
.sec-title,.services-page h1,.about h1{font-size:clamp(2.2rem,5vw,3.4rem)}
.sec-sub{color:var(--muted);margin:10px 0 32px;max-width:620px}
.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:26px;transition:transform .2s,border-color .2s}
.card:hover{transform:translateY(-4px);border-color:var(--lime)}
.card h3{font-size:1.3rem;margin:10px 0}
.card p{color:var(--muted);font-size:.96rem}
.num{font-family:"Anton",sans-serif;color:var(--lime);font-size:1.1rem;letter-spacing:.08em}

/* CTA */
.cta{display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;background:var(--panel);border:1px solid var(--line);border-radius:22px;padding:38px}
.cta h2{font-size:clamp(1.8rem,4vw,2.6rem)}
.cta p{color:var(--muted);margin-top:6px}

/* About */
.about{padding:70px 0}
.about-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
.about-img img{border-radius:22px;border:1px solid var(--line);width:100%;height:auto;aspect-ratio:1/1;object-fit:cover}
.about-text p{color:var(--muted);margin-top:14px}
.about-text .lead{color:var(--text);font-size:1.25rem;margin-top:18px}
.skill-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
.closing{color:var(--lime)!important;font-weight:600;font-size:1.1rem}

/* Services page */
.services-page{padding:70px 0}
.svc-list{display:grid;gap:14px;margin-bottom:40px}
.svc{display:flex;gap:22px;align-items:flex-start;background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:24px 26px;transition:border-color .2s}
.svc:hover{border-color:var(--lime)}
.svc .num{font-size:1.6rem;min-width:44px}
.svc h3{font-size:1.4rem;margin-bottom:6px}
.svc p{color:var(--muted)}

/* Footer */
#site-footer{border-top:1px solid var(--line);margin-top:40px}
.foot{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;padding:26px 0;color:var(--muted);font-size:.9rem}
.foot-links{display:flex;gap:18px}
.foot-links a:hover{color:var(--lime)}

/* Popup */
.modal{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;padding:20px}
.modal.show{display:flex}
.modal-box{position:relative;background:var(--panel);border:1px solid var(--line);border-radius:22px;padding:36px;max-width:440px;width:100%}
.modal-box h2{font-size:2rem}
.modal-box p{color:var(--muted);margin-top:8px}
.modal-x{position:absolute;top:10px;right:14px;background:none;border:0;color:var(--muted);font-size:1.8rem;cursor:pointer}

/* Mobile */
@media (max-width:860px){
  .hero .wrap,.about-grid{grid-template-columns:1fr;gap:36px}
  .hero{padding-top:50px}
  .menu-btn{display:block}
  .nav{display:none;position:absolute;left:0;right:0;top:68px;flex-direction:column;align-items:flex-start;gap:16px;background:var(--bg);border-bottom:1px solid var(--line);padding:20px}
  #site-header.open .nav{display:flex}
  .cta{padding:26px}
}
@media (prefers-reduced-motion:reduce){.playhead{animation:none}.btn,.card{transition:none}}
