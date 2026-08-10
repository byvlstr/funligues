const FRUITS = [
  'Abricot','Pêche','Cerise','Clémentine','Raisin',
  'Prune','Figue','Kiwi','Myrtille','Melon',
  'Fraise','Ananas','Banane','Poire','Framboise',
  'Orange','Mangue','Pastèque','Pomme','Fruit de la passion'
];

const SVG_MYRTILLE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="62" r="22" fill="#4a2d8c"/><circle cx="62" cy="64" r="22" fill="#5b38a8"/><circle cx="50" cy="44" r="24" fill="#6a44c0"/><path d="M50,20 L52,27 L59,24 L56,31 L64,33 L56,35 L58,42 L50,38 L42,42 L44,35 L36,33 L44,31 L41,24 L48,27 Z" fill="#3a1f6e"/><path d="M50,20 Q54,12 60,15" fill="none" stroke="#3a7d2a" stroke-width="3" stroke-linecap="round"/><path d="M60,15 Q66,18 63,24" fill="none" stroke="#3a7d2a" stroke-width="2.5" stroke-linecap="round"/></svg>`;
const SVG_FRAMBOISE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="44" r="14" fill="#c0392b"/><circle cx="64" cy="44" r="14" fill="#c0392b"/><circle cx="50" cy="30" r="14" fill="#c0392b"/><circle cx="24" cy="58" r="13" fill="#e74c3c"/><circle cx="76" cy="58" r="13" fill="#e74c3c"/><circle cx="38" cy="70" r="13" fill="#e74c3c"/><circle cx="62" cy="70" r="13" fill="#e74c3c"/><circle cx="50" cy="58" r="13" fill="#e74c3c"/><circle cx="36" cy="44" r="4" fill="#922b21" opacity="0.6"/><circle cx="64" cy="44" r="4" fill="#922b21" opacity="0.6"/><circle cx="50" cy="30" r="4" fill="#922b21" opacity="0.6"/><circle cx="24" cy="58" r="3.5" fill="#922b21" opacity="0.6"/><circle cx="76" cy="58" r="3.5" fill="#922b21" opacity="0.6"/><circle cx="38" cy="70" r="3.5" fill="#922b21" opacity="0.6"/><circle cx="62" cy="70" r="3.5" fill="#922b21" opacity="0.6"/><circle cx="50" cy="58" r="3.5" fill="#922b21" opacity="0.6"/><path d="M50,16 Q56,8 64,12 Q56,20 50,16Z" fill="#27ae60"/><path d="M50,16 Q44,8 36,12 Q44,20 50,16Z" fill="#2ecc71"/><line x1="50" y1="8" x2="50" y2="16" stroke="#27ae60" stroke-width="2.5"/></svg>`;
const SVG_PECHE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="54" r="40" fill="#f1948a"/><circle cx="54" cy="50" r="36" fill="#e74c3c" opacity="0.55"/><path d="M34,24 Q14,42 16,64 Q20,84 38,90 Q22,74 24,54 Q26,34 34,24Z" fill="#f39c12" opacity="0.6"/><path d="M50,14 Q45,54 50,94" fill="none" stroke="#c0392b" stroke-width="3" stroke-linecap="round" opacity="0.5"/><path d="M50,14 Q52,4 56,6" fill="none" stroke="#7d6608" stroke-width="3" stroke-linecap="round"/><path d="M56,6 Q72,0 76,12 Q64,18 56,6Z" fill="#27ae60"/><path d="M56,6 Q68,8 76,12" fill="none" stroke="#1a7a40" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const SVG_FIGUE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50,6 Q82,16 84,52 Q82,80 66,90 Q50,96 34,90 Q18,80 16,52 Q18,16 50,6Z" fill="#6c3483"/><path d="M50,12 Q78,22 80,52 Q78,76 64,86 Q50,92 36,86 Q22,76 20,52 Q22,22 50,12Z" fill="#f1948a"/><path d="M50,18 Q74,28 76,52 Q74,74 62,82 Q50,88 38,82 Q26,74 24,52 Q26,28 50,18Z" fill="#c0392b"/><ellipse cx="50" cy="56" rx="18" ry="20" fill="#e74c3c" opacity="0.7"/><circle cx="50" cy="34" r="3" fill="#7d0000"/><circle cx="60" cy="38" r="3" fill="#7d0000"/><circle cx="40" cy="38" r="3" fill="#7d0000"/><circle cx="68" cy="48" r="3" fill="#7d0000"/><circle cx="32" cy="48" r="3" fill="#7d0000"/><circle cx="70" cy="60" r="3" fill="#7d0000"/><circle cx="30" cy="60" r="3" fill="#7d0000"/><circle cx="66" cy="72" r="3" fill="#7d0000"/><circle cx="34" cy="72" r="3" fill="#7d0000"/><circle cx="58" cy="80" r="3" fill="#7d0000"/><circle cx="42" cy="80" r="3" fill="#7d0000"/><circle cx="50" cy="82" r="3" fill="#7d0000"/><circle cx="54" cy="50" r="2.5" fill="#7d0000" opacity="0.7"/><circle cx="46" cy="50" r="2.5" fill="#7d0000" opacity="0.7"/><circle cx="50" cy="60" r="2.5" fill="#7d0000" opacity="0.7"/><circle cx="58" cy="62" r="2.5" fill="#7d0000" opacity="0.7"/><circle cx="42" cy="62" r="2.5" fill="#7d0000" opacity="0.7"/><rect x="44" y="2" width="12" height="10" rx="4" fill="#5d6d7e"/><path d="M50,4 Q62,0 70,8 Q60,16 50,4Z" fill="#27ae60"/><path d="M50,4 Q38,0 30,8 Q40,16 50,4Z" fill="#2ecc71"/></svg>`;
const SVG_PRUNE = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50,10 Q82,22 82,54 Q80,82 50,92 Q20,82 18,54 Q18,22 50,10Z" fill="#1a5276"/><path d="M28,18 Q10,38 12,62 Q16,80 30,88 Q16,72 18,52 Q20,32 28,18Z" fill="#2980b9" opacity="0.35"/><path d="M60,14 Q80,36 80,58 Q76,80 62,88 Q74,70 72,50 Q70,28 60,14Z" fill="#6c3483" opacity="0.3"/><path d="M52,10 Q46,54 52,92" fill="none" stroke="#154360" stroke-width="2" stroke-linecap="round" opacity="0.6"/><path d="M52,10 Q56,2 60,4" fill="none" stroke="#7d6608" stroke-width="3" stroke-linecap="round"/><path d="M60,4 Q76,0 80,12 Q68,18 60,4Z" fill="#27ae60"/><path d="M60,4 Q72,6 80,12" fill="none" stroke="#1a7a40" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const SVG_PASSION = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="46" fill="#7d3c98"/><circle cx="50" cy="50" r="38" fill="#f0e6c8"/><circle cx="50" cy="50" r="36" fill="#f4d03f"/><line x1="50" y1="14" x2="50" y2="50" stroke="#c8a415" stroke-width="1.5" opacity="0.7"/><line x1="82" y1="29" x2="50" y2="50" stroke="#c8a415" stroke-width="1.5" opacity="0.7"/><line x1="70" y1="80" x2="50" y2="50" stroke="#c8a415" stroke-width="1.5" opacity="0.7"/><line x1="30" y1="80" x2="50" y2="50" stroke="#c8a415" stroke-width="1.5" opacity="0.7"/><line x1="18" y1="29" x2="50" y2="50" stroke="#c8a415" stroke-width="1.5" opacity="0.7"/><line x1="66" y1="16" x2="50" y2="50" stroke="#c8a415" stroke-width="1" opacity="0.5"/><line x1="80" y1="62" x2="50" y2="50" stroke="#c8a415" stroke-width="1" opacity="0.5"/><line x1="20" y1="62" x2="50" y2="50" stroke="#c8a415" stroke-width="1" opacity="0.5"/><line x1="34" y1="16" x2="50" y2="50" stroke="#c8a415" stroke-width="1" opacity="0.5"/><ellipse cx="50" cy="28" rx="5" ry="7" fill="#1a1a1a"/><ellipse cx="50" cy="28" rx="2.5" ry="4" fill="#4a4a4a"/><ellipse cx="68" cy="36" rx="5" ry="7" fill="#1a1a1a" transform="rotate(60,68,36)"/><ellipse cx="68" cy="36" rx="2.5" ry="4" fill="#4a4a4a" transform="rotate(60,68,36)"/><ellipse cx="68" cy="62" rx="5" ry="7" fill="#1a1a1a" transform="rotate(120,68,62)"/><ellipse cx="68" cy="62" rx="2.5" ry="4" fill="#4a4a4a" transform="rotate(120,68,62)"/><ellipse cx="50" cy="72" rx="5" ry="7" fill="#1a1a1a"/><ellipse cx="50" cy="72" rx="2.5" ry="4" fill="#4a4a4a"/><ellipse cx="32" cy="62" rx="5" ry="7" fill="#1a1a1a" transform="rotate(-120,32,62)"/><ellipse cx="32" cy="62" rx="2.5" ry="4" fill="#4a4a4a" transform="rotate(-120,32,62)"/><ellipse cx="32" cy="36" rx="5" ry="7" fill="#1a1a1a" transform="rotate(-60,32,36)"/><ellipse cx="32" cy="36" rx="2.5" ry="4" fill="#4a4a4a" transform="rotate(-60,32,36)"/><circle cx="50" cy="50" r="6" fill="#e8b90a" opacity="0.9"/><circle cx="50" cy="50" r="3" fill="#c8a415"/></svg>`;

const FRUIT_DATA = {
  'Abricot':{type:'emoji',val:'🍑'},'Pêche':{type:'svg',val:SVG_PECHE},
  'Cerise':{type:'emoji',val:'🍒'},'Clémentine':{type:'emoji',val:'🍊'},
  'Raisin':{type:'emoji',val:'🍇'},'Prune':{type:'svg',val:SVG_PRUNE},
  'Figue':{type:'svg',val:SVG_FIGUE},'Kiwi':{type:'emoji',val:'🥝'},
  'Myrtille':{type:'svg',val:SVG_MYRTILLE},'Melon':{type:'emoji',val:'🍈'},
  'Fraise':{type:'emoji',val:'🍓'},'Ananas':{type:'emoji',val:'🍍'},
  'Banane':{type:'emoji',val:'🍌'},'Poire':{type:'emoji',val:'🍐'},
  'Framboise':{type:'svg',val:SVG_FRAMBOISE},'Orange':{type:'emoji',val:'🍊'},
  'Mangue':{type:'emoji',val:'🥭'},'Pastèque':{type:'emoji',val:'🍉'},
  'Pomme':{type:'emoji',val:'🍎'},'Fruit de la passion':{type:'svg',val:SVG_PASSION}
};

const COLORS=['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#e91e8c'];
let players=[],matches=[],currentMatchIndex=0,currentPlayerIndex=0,scores={};
let gameFinished=false;

function icon(name,size='large'){
  const d=FRUIT_DATA[name];if(!d)return'';
  if(d.type==='svg'){const cls=size==='large'?'fruit-icon':size==='medium'?'podium-icon':'tbl-icon';return`<div class="${cls}">${d.val}</div>`;}
  if(size==='large')return`<div class="fruit-icon" style="font-size:3.4rem">${d.val}</div>`;
  if(size==='medium')return`<div class="podium-icon" style="font-size:2.2rem">${d.val}</div>`;
  return`<div class="tbl-icon" style="font-size:1.4rem">${d.val}</div>`;
}

function initSetup(){
  const grid=document.getElementById('players-grid');grid.innerHTML='';
  for(let i=0;i<8;i++){const div=document.createElement('div');div.className='player-input';div.innerHTML=`<div class="player-num" style="background:${COLORS[i]}">${i+1}</div><input type="text" placeholder="Joueur ${i+1}" id="p${i}" maxlength="20">`;grid.appendChild(div);}
}

function generateMatches(){
  const m=[];for(let i=0;i<FRUITS.length;i++)for(let j=i+1;j<FRUITS.length;j++)m.push([i,j]);
  return m.sort(()=>Math.random()-0.5);
}

function startGame(){
  const names=[];for(let i=0;i<8;i++){const v=document.getElementById('p'+i).value.trim();if(v)names.push({name:v,color:COLORS[i]});}
  if(names.length===0){alert('Entrez au moins un joueur !');return;}
  players=names;matches=generateMatches();currentMatchIndex=0;currentPlayerIndex=0;scores={};gameFinished=false;
  players.forEach(p=>{scores[p.name]={};FRUITS.forEach(f=>scores[p.name][f]=0);});
  showTab('match');renderMatch();
}

function renderMatch(){
  const content=document.getElementById('match-content');
  const totalPerPlayer=matches.length,globalTotal=players.length*totalPerPlayer;
  const done=currentPlayerIndex*totalPerPlayer+currentMatchIndex;
  if(currentPlayerIndex>=players.length){
    gameFinished=true;
    content.innerHTML=`<div class="match-done"><div style="font-size:3rem;margin-bottom:1rem">🏆</div><p style="font-size:1.2rem;font-weight:500;margin-bottom:8px">Tous les matchs terminés !</p><p style="color:#666;margin-bottom:1.5rem">Consultez le classement de chaque joueur.</p><button class="btn btn-primary" onclick="showTab('results');renderResults()">Voir les classements →</button></div>`;
    return;
  }
  if(currentMatchIndex>=matches.length){currentPlayerIndex++;currentMatchIndex=0;renderMatch();return;}
  const player=players[currentPlayerIndex];const[fi,fj]=matches[currentMatchIndex];const fA=FRUITS[fi],fB=FRUITS[fj];
  content.innerHTML=`
    <div class="match-progress">Match ${currentMatchIndex+1}/${totalPerPlayer} · Joueur ${currentPlayerIndex+1}/${players.length} · Total ${done}/${globalTotal}</div>
    <div style="width:100%;background:#f0f0f0;border-radius:4px;height:6px;margin-bottom:1.2rem;overflow:hidden"><div style="height:6px;border-radius:4px;background:${player.color};width:${Math.round(done/globalTotal*100)}%"></div></div>
    <div class="match-player"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${player.color};margin-right:6px;vertical-align:middle"></span>${player.name}, quel est ton fruit préféré ?</div>
    <div class="match-arena">
      <div class="fruit-card" onclick="vote(0)">${icon(fA,'large')}<div class="fruit-name">${fA}</div></div>
      <div class="vs">VS</div>
      <div class="fruit-card" onclick="vote(1)">${icon(fB,'large')}<div class="fruit-name">${fB}</div></div>
    </div>`;
}

function vote(choice){
  const player=players[currentPlayerIndex];const[fi,fj]=matches[currentMatchIndex];
  scores[player.name][choice===0?FRUITS[fi]:FRUITS[fj]]+=3;currentMatchIndex++;renderMatch();
}

function getRanked(playerName){
  return FRUITS.map(f=>({name:f,score:scores[playerName][f]})).sort((a,b)=>b.score-a.score);
}

function renderResults(){
  const content=document.getElementById('results-content');
  const tabsHtml=players.map((p,i)=>`<button class="rtab${i===0?' active':''}" onclick="showPlayerResult(${i})">${p.name}</button>`).join('');
  content.innerHTML=`<div class="results-tabs">${tabsHtml}</div><div id="player-result"></div>`;
  showPlayerResult(0);
}

function showPlayerResult(idx){
  document.querySelectorAll('.rtab').forEach((t,i)=>t.classList.toggle('active',i===idx));
  const player=players[idx];const ranked=getRanked(player.name);const max=ranked[0].score||1;
  const top3=ranked.slice(0,3);const podiumOrder=[top3[1],top3[0],top3[2]].filter(Boolean);
  const heights=[60,90,45],podiumColors=['#c0392b','#e74c3c','#e67e22'],medals=['🥈','🥇','🥉'];
  let podiumHtml=`<div class="podium">`;
  podiumOrder.forEach((item,i)=>{podiumHtml+=`<div class="podium-item">${icon(item.name,'medium')}<div class="podium-name">${item.name}</div><div class="podium-bar" style="width:80px;height:${heights[i]}px;background:${podiumColors[i]}"><span style="font-size:18px">${medals[i]}</span></div></div>`;});
  podiumHtml+=`</div>`;
  let tableHtml=`<table class="ranking-table"><thead><tr><th>#</th><th>Fruit</th><th>Points</th><th>Popularité</th></tr></thead><tbody>`;
  ranked.forEach((item,i)=>{const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';tableHtml+=`<tr><td class="rank-num">${medal||i+1}</td><td><div class="td-fruit">${icon(item.name,'small')}<span>${item.name}</span></div></td><td style="font-weight:500">${item.score}</td><td><div class="score-bar-wrap"><div class="score-bar" style="width:${Math.round(item.score/max*120)}px"></div><span style="font-size:11px;color:#aaa">${max>0?Math.round(item.score/max*100)+'%':''}</span></div></td></tr>`;});
  tableHtml+=`</tbody></table>`;
  document.getElementById('player-result').innerHTML=`<div style="text-align:center;margin-bottom:0.5rem"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${player.color};margin-right:6px;vertical-align:middle"></span><span style="font-weight:500">${player.name}</span></div>${podiumHtml}${tableHtml}`;
}

function showTab(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const idx=['setup','match','results'].indexOf(id);
  const btns=document.querySelectorAll('.tab');if(btns[idx])btns[idx].classList.add('active');
}

/* ── SAVE MODAL ── */
function openSaveModal(){
  if(!gameFinished||players.length===0)return;
  document.getElementById('save-options-list').style.display='flex';
  document.getElementById('capture-progress').classList.remove('active');
  document.getElementById('capture-progress').innerHTML='';
  document.getElementById('save-modal').classList.add('open');
}
function closeSaveModal(e){
  if(!e||e.target===document.getElementById('save-modal'))
    document.getElementById('save-modal').classList.remove('open');
}

/* ── EXPORT JSON ── */
function exportJSON(){
  const date=new Date().toLocaleDateString('fr-FR');
  const data={date,joueurs:{}};
  players.forEach(p=>{
    const ranked=getRanked(p.name);
    data.joueurs[p.name]={classement:ranked.map((f,i)=>({rang:i+1,fruit:f.name,points:f.score}))};
  });
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);
  a.download=`ligue-des-fruits-${date.replace(/\//g,'-')}.json`;a.click();
  document.getElementById('save-modal').classList.remove('open');
}

/* ── SCREENSHOTS ── */
function buildSnapshotHTML(player){
  const ranked=getRanked(player.name);const max=ranked[0].score||1;
  const date=new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  const top3=ranked.slice(0,3);
  const podiumOrder=[top3[1],top3[0],top3[2]].filter(Boolean);
  const heights=[60,90,45],podiumColors=['#c0392b','#e74c3c','#e67e22'],medals=['🥈','🥇','🥉'];
  let podiumHtml=`<div style="display:flex;align-items:flex-end;justify-content:center;gap:16px;margin:16px 0">`;
  podiumOrder.forEach((item,i)=>{
    const fruitD=FRUIT_DATA[item.name];
    const fruitDisp=fruitD&&fruitD.type==='svg'
      ?`<div style="width:48px;height:48px">${fruitD.val}</div>`
      :`<div style="font-size:2rem;line-height:1">${fruitD?fruitD.val:''}</div>`;
    podiumHtml+=`<div style="display:flex;flex-direction:column;align-items:center;gap:4px">${fruitDisp}<div style="font-size:11px;font-weight:500;text-align:center;max-width:70px">${item.name}</div><div style="width:72px;height:${heights[i]}px;background:${podiumColors[i]};border-radius:8px 8px 0 0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px"><span style="font-size:16px">${medals[i]}</span></div></div>`;
  });
  podiumHtml+=`</div>`;
  let rows='';
  ranked.forEach((item,i)=>{
    const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'';
    const fruitD=FRUIT_DATA[item.name];
    const fruitDisp=fruitD&&fruitD.type==='svg'
      ?`<span style="display:inline-block;width:22px;height:22px;vertical-align:middle">${fruitD.val}</span>`
      :`<span style="font-size:1.1rem;vertical-align:middle">${fruitD?fruitD.val:''}</span>`;
    const pct=max>0?Math.round(item.score/max*100):0;
    rows+=`<tr style="border-bottom:1px solid #f0f0f0">
      <td style="padding:5px 6px;font-size:12px;color:#666;font-weight:500">${medal||i+1}</td>
      <td style="padding:5px 6px;font-size:12px;display:flex;align-items:center;gap:4px">${fruitDisp} ${item.name}</td>
      <td style="padding:5px 6px;font-size:12px;font-weight:500">${item.score}</td>
      <td style="padding:5px 6px"><div style="display:flex;align-items:center;gap:6px"><div style="height:5px;border-radius:3px;background:#e74c3c;opacity:0.7;width:${Math.round(pct*0.9)}px"></div><span style="font-size:10px;color:#aaa">${pct}%</span></div></td>
    </tr>`;
  });
  return`<div style="font-family:system-ui,sans-serif;background:#fff;padding:24px;width:460px">
    <div style="text-align:center;margin-bottom:12px">
      <div style="font-size:1.3rem;font-weight:500;color:#e74c3c">🏆 Ligue des Fruits</div>
      <div style="font-size:14px;margin-top:4px"><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${player.color};margin-right:5px;vertical-align:middle"></span><strong>${player.name}</strong></div>
      <div style="font-size:11px;color:#bbb;margin-top:2px">${date}</div>
    </div>
    ${podiumHtml}
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="border-bottom:1px solid #e5e5e5"><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">#</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Fruit</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Pts</th><th style="text-align:left;padding:4px 6px;color:#888;font-weight:400">Popularité</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

async function startScreenshots(){
  document.getElementById('save-options-list').style.display='none';
  const prog=document.getElementById('capture-progress');prog.classList.add('active');
  prog.innerHTML=players.map((p,i)=>`<div class="cap-player" id="cap-row-${i}"><div class="cap-dot" style="background:${p.color}"></div><span>${p.name}</span><span class="cap-status" id="cap-status-${i}">En attente…</span></div>`).join('');

  const card=document.getElementById('snapshot-card');
  for(let i=0;i<players.length;i++){
    const statusEl=document.getElementById('cap-status-'+i);
    statusEl.textContent='Génération…';statusEl.className='cap-status active';
    card.innerHTML=buildSnapshotHTML(players[i]);
    await new Promise(r=>setTimeout(r,80));
    try{
      const canvas=await html2canvas(card,{backgroundColor:'#ffffff',scale:2,useCORS:true,logging:false});
      const a=document.createElement('a');
      a.href=canvas.toDataURL('image/png');
      a.download=`classement-${players[i].name.replace(/\s+/g,'-').toLowerCase()}.png`;
      a.click();
      await new Promise(r=>setTimeout(r,300));
      statusEl.textContent='✓ Téléchargé';statusEl.className='cap-status done';
    }catch(err){statusEl.textContent='Erreur';statusEl.className='cap-status';}
  }
  card.innerHTML='';
}

document.addEventListener('DOMContentLoaded', initSetup);
