const PROGRAMS = [{"id": "phdr-dti", "title": "PhDr. Distance Study – Economics & Management", "degreeLevel": "Doctorate", "category": "Business & Management", "institution": "DTI University (via POBS)", "format": "Online", "duration": "2–4 semesters (≈12 months possible)", "credits": "", "language": "German / English", "startDates": "Flexible / rolling", "tuition": "€11,900 (installments)", "badge": "High flexibility", "description": "Practice‑oriented research doctorate with a fully online format and personal academic support.", "highlights": ["Fully online (no mandatory campus stays)", "Research thesis as main output", "Flexible start dates and pacing", "Suitable for working professionals"]}, {"id": "paeddr-dti", "title": "PaedDr. Distance Learning – Doctor of Pedagogy", "degreeLevel": "Doctorate", "category": "Education & Pedagogy", "institution": "DTI University (via POBS)", "format": "Online", "duration": "2–4 semesters (≈12 months possible)", "credits": "", "language": "German / English", "startDates": "Flexible / rolling", "tuition": "€11,900 (installments)", "badge": "Research thesis", "description": "Online doctoral study focused on a research-based thesis in pedagogy and education topics.", "highlights": ["Fully online study format", "Thesis-focused (no classic semester exams)", "Research mentoring and feedback", "Designed for educators and trainers"]}, {"id": "mba-brand-university", "title": "MBA Brand Management", "degreeLevel": "Master’s", "category": "Brand & Marketing", "institution": "Brand University", "format": "Online", "duration": "18 months (FT) / 24 months (PT) + extension", "credits": "90 ECTS", "language": "English", "startDates": "Start anytime", "tuition": "€9,900 (discounts + monthly plans)", "badge": "Fast start", "description": "Online MBA with brand marketing focus and flexible start dates.", "highlights": ["100% online courses and exams", "Brand strategy + digital marketing modules", "Capstone project", "Monthly payment options"]}, {"id": "mba-simpson", "title": "MBA (Online)", "degreeLevel": "Master’s", "category": "Business & Management", "institution": "Simpson University", "format": "Online", "duration": "1–2 years (7-week courses)", "credits": "36 credits", "language": "English", "startDates": "Term-based (see university)", "tuition": "$726/credit (2025–26) | $747/credit (2026–27)", "badge": "7-week courses", "description": "Online MBA emphasizing ethical leadership and data-driven decision making.", "highlights": ["7-week course format", "Ethical leadership emphasis", "Data-informed decision skills", "Built for working professionals"]}, {"id": "macc-simpson", "title": "M.A. Community Counseling (MACC) (Online)", "degreeLevel": "Master’s", "category": "Counseling & Human Services", "institution": "Simpson University", "format": "Online", "duration": "≈2 years (7-week cohorts)", "credits": "36 credits", "language": "English", "startDates": "Term-based (see university)", "tuition": "$600/credit (2025–26) | $617/credit (2026–27)", "badge": "Applied learning", "description": "Community counseling program designed for community service roles (not professional licensure).", "highlights": ["100% online cohort model", "One course at a time structure", "Community-focused counseling skills", "Practical assignments and reflection"]}, {"id": "phd-au-business", "title": "Ph.D. Leadership: Business", "degreeLevel": "Doctorate", "category": "Business & Leadership", "institution": "Anderson University", "format": "Online", "duration": "3–5 years", "credits": "48 credits", "language": "English", "startDates": "Aug | Jan | May", "tuition": "$785/credit (2024–25) | $810/credit (2025–26)", "badge": "3 start dates", "description": "Online doctoral program in leadership with a business concentration and research focus.", "highlights": ["48 credits; designed for 3–5 years", "Multiple annual start dates", "Research + leadership scholarship", "Doctoral-level writing emphasis"]}, {"id": "phd-au-ministry", "title": "Ph.D. Leadership: Christian Ministry", "degreeLevel": "Doctorate", "category": "Ministry & Leadership", "institution": "Anderson University", "format": "Online", "duration": "3–5 years", "credits": "48 credits", "language": "English", "startDates": "Aug | Jan | May", "tuition": "$685/credit (2024–25) | $705/credit (2025–26)", "badge": "Faith-integrated", "description": "Online Ph.D. integrating leadership scholarship with Christian ministry contexts.", "highlights": ["Leadership theory + ministry practice", "Research-oriented doctoral work", "Multiple start dates", "Designed for ministry leadership roles"]}, {"id": "phd-au-preaching", "title": "Ph.D. Preaching", "degreeLevel": "Doctorate", "category": "Ministry & Theology", "institution": "Anderson University", "format": "Online", "duration": "3–4 years", "credits": "48 credits", "language": "English", "startDates": "Aug (Fall) typically", "tuition": "$705/credit (2024–25) | $705/credit (2025–26)", "badge": "Ministry experience", "description": "Doctoral program tailored to advanced preaching scholarship and practice.", "highlights": ["Advanced homiletics focus", "Scholarly research and writing", "Program designed for experienced ministers", "Online doctoral format"]}];

const qs=(s,e=document)=>e.querySelector(s);
const qsa=(s,e=document)=>Array.from(e.querySelectorAll(s));
const uniq=a=>Array.from(new Set(a)).sort();
const esc=s=>String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");

function optionize(sel,vals,placeholder){
  if(!sel) return;
  sel.innerHTML="";
  const o0=document.createElement("option");
  o0.value=""; o0.textContent=placeholder;
  sel.appendChild(o0);
  vals.forEach(v=>{
    const o=document.createElement("option");
    o.value=v; o.textContent=v;
    sel.appendChild(o);
  });
}

function cardHTML(p){
  const badge=p.badge?`<span class="badge">${esc(p.badge)}</span>`:"";
  const credits=p.credits?` · ${esc(p.credits)}`:"";
  return `<article class="card">
    <div class="meta">
      <span class="pill">${esc(p.degreeLevel)}</span>
      <span class="pill">${esc(p.format)}</span>
      <span class="pill">${esc(p.institution)}</span>
    </div>
    <div class="title">${esc(p.title)}</div>
    <p class="desc">${esc(p.description)}</p>
    <div class="meta">
      <span class="pill">⏱ ${esc(p.duration)}${credits}</span>
      <span class="pill">💳 ${esc(p.tuition)}</span>
      ${badge}
    </div>
    <div class="spacer"></div>
    <div class="ctaRow">
      <a class="btn" href="program.html?id=${encodeURIComponent(p.id)}">Learn more</a>
      <a class="btn primary" href="contact.html?interest=${encodeURIComponent(p.title)}">Request brochure</a>
    </div>
  </article>`;
}

function renderCatalog(list){
  const mount=qs("#catalogGrid"); if(!mount) return;
  mount.innerHTML=list.map(cardHTML).join("");
  const count=qs("#resultCount"); if(count) count.textContent=`${list.length} program${list.length===1?"":"s"}`;
}

function applyFilters(){
  const q=(qs("#q")?.value||"").trim().toLowerCase();
  const degree=qs("#degree")?.value||"";
  const category=qs("#category")?.value||"";
  const institution=qs("#institution")?.value||"";
  const format=qs("#format")?.value||"";
  const sort=qs("#sort")?.value||"relevance";

  let list=PROGRAMS.filter(p=>{
    const blob=`${p.title} ${p.description} ${p.category} ${p.institution} ${p.degreeLevel} ${p.format} ${p.language}`.toLowerCase();
    if(q && !blob.includes(q)) return false;
    if(degree && p.degreeLevel!==degree) return false;
    if(category && p.category!==category) return false;
    if(institution && p.institution!==institution) return false;
    if(format && p.format!==format) return false;
    return true;
  });

  if(sort==="title") list.sort((a,b)=>a.title.localeCompare(b.title));
  if(sort==="degree") list.sort((a,b)=>a.degreeLevel.localeCompare(b.degreeLevel));
  if(sort==="institution") list.sort((a,b)=>a.institution.localeCompare(b.institution));

  renderCatalog(list);
}

function bindCatalog(){
  optionize(qs("#degree"), uniq(PROGRAMS.map(p=>p.degreeLevel)), "Degree level");
  optionize(qs("#category"), uniq(PROGRAMS.map(p=>p.category)), "Subject area");
  optionize(qs("#institution"), uniq(PROGRAMS.map(p=>p.institution)), "Institution");
  optionize(qs("#format"), uniq(PROGRAMS.map(p=>p.format)), "Format");

  ["q","degree","category","institution","format","sort"].forEach(id=>{
    const el=qs(`#${id}`); if(!el) return;
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  qs("#clearFilters")?.addEventListener("click", ()=>{
    ["q","degree","category","institution","format"].forEach(id=>{
      const el=qs(`#${id}`); if(el) el.value="";
    });
    const sort=qs("#sort"); if(sort) sort.value="relevance";
    applyFilters();
    toast("Filters cleared");
  });

  applyFilters();
}

function renderFeatured(){
  const mount=qs("#featuredGrid"); if(!mount) return;
  const featured=["phd-au-business","mba-brand-university","phdr-dti"].map(id=>PROGRAMS.find(p=>p.id===id)).filter(Boolean);
  mount.innerHTML=featured.map(cardHTML).join("");
}

function renderProgram(){
  const mount=qs("#programDetail"); if(!mount) return;
  const id=new URLSearchParams(location.search).get("id") || PROGRAMS[0].id;
  const p=PROGRAMS.find(x=>x.id===id) || PROGRAMS[0];
  document.title=`${p.title} | Programs Marketplace`;
  const hi=(p.highlights||[]).map(x=>`<li>${esc(x)}</li>`).join("");
  mount.innerHTML=`<div class="panel">
    <div class="meta" style="margin-bottom:10px">
      <span class="pill">${esc(p.degreeLevel)}</span>
      <span class="pill">${esc(p.format)}</span>
      <span class="pill">${esc(p.institution)}</span>
    </div>
    <div class="h1" style="font-size:34px;margin:8px 0 10px">${esc(p.title)}</div>
    <p class="lead" style="margin:0 0 12px">${esc(p.description)}</p>
    <div class="meta" style="margin:10px 0 14px">
      <span class="pill">⏱ ${esc(p.duration)}${p.credits?` · ${esc(p.credits)}`:""}</span>
      <span class="pill">🗓 ${esc(p.startDates)}</span>
      <span class="pill">🌐 ${esc(p.language)}</span>
      <span class="pill">💳 ${esc(p.tuition)}</span>
    </div>
    <div class="split">
      <div class="panel" style="background:rgba(255,255,255,.04);box-shadow:none">
        <h3 style="margin:0 0 8px">Key highlights</h3>
        <ul class="ul">${hi}</ul>
      </div>
      <div class="panel" style="background:rgba(255,255,255,.04);box-shadow:none">
        <h3 style="margin:0 0 8px">Next step</h3>
        <p class="lead" style="margin:0 0 10px">Request the brochure and a short consultation. We'll help you compare options and choose the best fit.</p>
        <div class="actions">
          <a class="btn primary" href="contact.html?interest=${encodeURIComponent(p.title)}">Request brochure</a>
          <a class="btn" href="catalog.html">Back to catalog</a>
        </div>
        <div class="hr"></div>
        <small class="help">Tuition and admissions can change. Confirm final details with the university.</small>
      </div>
    </div>
  </div>`;
}

function navActive(){
  const path=location.pathname.split("/").pop() || "index.html";
  qsa("[data-nav]").forEach(a=>{
    if(a.getAttribute("href")===path) a.classList.add("active");
  });
}

function toast(msg){
  const t=qs("#toast"); if(!t) return;
  t.textContent=msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", ()=>{
  navActive();
  if(qs("#featuredGrid")) renderFeatured();
  if(qs("#catalogGrid")) bindCatalog();
  if(qs("#programDetail")) renderProgram();
  const interest=new URLSearchParams(location.search).get("interest");
  const interestInput=qs("#interest");
  if(interest && interestInput) interestInput.value=interest;
});
