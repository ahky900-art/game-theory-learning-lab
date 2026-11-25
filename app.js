const $=s=>document.querySelector(s), app=$("#app");
const state={tab:"learn",q:1,mode:"full",phrase:0,blindReveal:false,answer:"",timer:180,interval:null,quizDone:0,correct:0};
const exam={
1:{type:"Static Bayesian game · continuous action",steps:["Firm 2는 자신의 비용 유형을 아니까 L/H 유형별 payoff를 각각 극대화한다.","각 유형의 FOC로 i₂ᴸ(i₁), i₂ᴴ(i₁)를 구하고 SOC로 최대임을 확인한다.","Firm 1은 유형을 모르므로 p·π₁(L)+(1−p)·π₁(H)를 극대화한다.","Firm 1의 FOC와 유형별 BR을 대입해 연립한다.","균형값을 BR에 대입해 검산한다."],equations:"FOC₂: ∂π₂/∂i₂ = 10 − i₁ − 2c₂i₂ = 0\n i₂ᴸ = 10 − i₁,  i₂ᴴ = (10 − i₁)/2\nFOC₁: ∂E[π₁]/∂i₁ = 0\nBNE: i₁* = 10(1−p)/(3−p), i₂ᴸ* = 20/(3−p), i₂ᴴ* = 10/(3−p)",check:"유형별 FOC와 Firm 1의 기대 payoff FOC를 혼동하지 않는다. 각 SOC < 0, 투자량 ≥ 0 확인."},
2:{type:"Bayesian Nash equilibrium · two partners",steps:["행동공간은 두 파트너 모두 비음수 실수 투자량이다.","Partner 1은 고/저 revenue type을 관찰하므로 유형별 BR을 구한다.","Partner 2는 type을 모르므로 prior로 가중한 기대 payoff를 최대화한다.","두 유형별 BR과 Partner 2의 기대 payoff FOC를 함께 푼다.","투자량이 음수가 되는 영역에서는 내부해가 아니라 corner solution을 계산한다."],equations:"Partner 1: FOCᴴ = 0, FOCᴸ = 0\nPartner 2: ∂E[π₂]/∂i₂ = 0\nSolve the three best-response conditions jointly.",check:"해설은 비음수 제약이 유효한 parameter 범위를 별도로 둔다. 범위 밖에서는 corner solution을 다시 계산해야 한다."},
3:{type:"Public good · pure and mixed NE",steps:["공통지식 비용 c=1을 payoff matrix에 대입한다.","각 상대 행동에 대한 두 Player의 최적반응을 표시한다.","상호 최적반응 칸을 pure NE로 판별한다.","혼합전략에서는 상대가 Pay할 확률 s를 두고 Pay와 Free-ride의 기대보수를 같게 둔다.","불완전정보 소문항은 low/high type별 payoff 부등식을 각각 세워 parameter 범위의 교집합을 구한다."],equations:"Pure NE: (Pay, Free-ride), (Free-ride, Pay)\nMixed: EU(Pay)=3, EU(Free-ride)=4s\n3=4s ⇒ s=3/4\nPrivate cost: 1/4 ≤ p ≤ 3/4",check:"혼합확률은 상대의 혼합확률을 무차별하게 만드는 값이다. 자기 행동의 확률을 바로 구하는 것이 아니다."},
4:{type:"Signaling game · PBE",steps:["Sender의 type, message, Receiver의 action과 terminal payoff를 게임 트리에서 분리한다.","각 message 이후 Receiver의 sequential best response를 구한다.","Pooling 또는 separating 후보 전략을 세운다.","경로 위 belief는 Bayes rule과 일치시킨다.","각 Sender type의 균형 메시지와 deviation payoff를 비교한다.","Receiver sequential rationality와 Sender no-profitable-deviation을 모두 만족해야 PBE다."],equations:"PBE conditions:\n(1) Receiver action is optimal given beliefs.\n(2) Beliefs are Bayes-consistent on path.\n(3) Each Sender type has no profitable deviation.",check:"Receiver의 최적반응만 확인하고 PBE라고 결론 내리면 안 된다. Sender의 일탈 검증이 필수."},
5:{type:"Sequential first-price auction",steps:["Bidder 2는 Bidder 1의 bid를 관찰하므로 후발자부터 푼다.","관찰한 bid에 대해 Bidder 2가 buy할지 step out할지 임계조건을 구한다.","Bidder 1은 Bidder 2의 반응을 예상해 expected payoff를 작성한다.","Bidder 1의 FOC와 SOC로 최적 bid를 구한다.","효율성은 높은 valuation bidder가 항상 배분받는지로 판정하고 seller revenue와 total surplus를 구분한다."],equations:"Backward induction: Bidder 2 response first.\nBidder 1: maximize expected payoff anticipating Bidder 2's threshold response.\nEfficiency: compare allocation with highest-valuation allocation.",check:"Bidder payoff 합의 증가가 사회적 효율성 증가를 뜻하지 않는다. Seller revenue와 total surplus를 따로 비교한다."},
6:{type:"Principal-agent · moral hazard",steps:["대칭정보에서는 effort가 관찰되므로 각 effort의 기대 산출을 계산한다.","참여제약(IR)이 binding하는 최소 고정임금을 구한다.","Principal의 effort별 기대이윤을 비교해 목표 effort를 고른다.","도덕적 해이에서는 outcome-contingent wage를 설정한다.","IR(계약 수락)과 IC(목표 노력 선택)를 작성하고 binding constraint를 이용해 임금을 푼다.","대칭정보 이윤과 비대칭정보 이윤의 차이를 계산한다."],equations:"IR: U_A(w,e*) ≥ Ū\nIC: U_A(e*) ≥ U_A(e'), for every alternative e'\nProfit = expected output − expected wage",check:"IR과 IC는 서로 다른 조건이다. 계약 수락만으로 목표 effort가 유도되는 것은 아니다."},
7:{type:"Screening · hidden type contract",steps:["완전정보에서는 유형별 effort cost를 적용하고 IR을 binding시킨다.","R'(n)=cᵢ 형태의 FOC로 유형별 first-best output을 구한다.","숨은 유형에서는 두 유형에 대한 계약 메뉴를 제시한다.","두 IR과 두 IC를 작성하고 어떤 제약이 binding하는지 확인한다.","Binding constraints를 목적함수에 대입한 뒤 n_f, n_s의 FOC를 구한다.","fast type의 배정량이 first-best와 같은지, slow type의 배정량이 감소하는지 비교하고 나머지 제약을 검산한다."],equations:"Observable type: R'(nᵢ*) = cᵢ\nHidden type: menu {(n_s,w_s),(n_f,w_f)}\nConstraints: IR_s, IR_f, IC_s, IC_f",check:"유형별 계약의 IR/IC를 임의로 삭제하지 않는다. Binding 논리는 유형 순서와 문제의 모형 가정으로 정당화한다."},
8:{type:"Promotion tournament · effort incentives",steps:["가능한 output 조합을 나열하고 각 조합에서 Worker 1의 승진확률을 정한다.","각 조합의 확률을 곱해 기대 승진확률을 계산한다.","Hard와 Shirk 각각의 기대임금에서 effort cost를 차감한다.","Hard의 기대 순효용이 Shirk 이상이어야 하므로 임금차이 조건을 도출한다.","대칭적으로 Worker 2에도 같은 조건이 성립하는지 확인한다."],equations:"P(promoted) = Σ P(outcome) × P(promoted | outcome)\nIncentive condition: U(Hard) ≥ U(Shirk)",check:"동률 output에서는 공정한 동전 던지기이므로 승진확률은 1/2이다."}
};
const phraseItems=[
["Find the best response of Player 1","Fix Player 2's action; maximize u₁ with respect to a₁.","∂u₁/∂a₁ = 0 (interior solution)","상대 행동을 고정하고 자기 행동으로 미분한다."],
["Find a Bayesian Nash equilibrium","Type-contingent strategies; informed players optimize by type, uninformed players maximize expected payoff.","BRᵢ(tᵢ) for each type; ∂E[uⱼ]/∂aⱼ = 0","정보를 가진 쪽과 못 가진 쪽의 최적화 문제를 분리한다."],
["Find a mixed-strategy equilibrium","Make the opponent indifferent between pure actions used with positive probability.","EU(A) = EU(B)","상대의 혼합확률을 구하기 위해 내 순수행동 기대보수를 같게 둔다."],
["Show that no separating PBE exists","Test candidate separating strategies and compare each sender type's deviation payoff.","u_S(type, on-path) ≥ u_S(type, deviation)","가능한 분리 후보를 모두 제거해야 비존재를 증명할 수 있다."],
["Find the subgame-perfect equilibrium","Use backward induction and check every proper subgame.","arg max at last node → move backward","마지막 의사결정부터 거꾸로 최적 행동을 선택한다."],
["Induce the agent to exert effort","Write participation and incentive-compatibility constraints.","IR: U(e*) ≥ Ū; IC: U(e*) ≥ U(e')","계약 수락과 목표 노력 선택을 각각 보장해야 한다."],
["For what values of p does the equilibrium exist?","Derive inequalities and intersect the feasible parameter ranges.","p ≥ lower bound; p ≤ upper bound","각 유형의 유인조건을 부등식으로 만들고 교집합을 취한다."],
["Is the allocation efficient?","Check whether the good goes to the highest-valuation bidder; distinguish total surplus from transfers.","Maximize total surplus; compare allocation rule","개별 보수나 판매자 수입의 변화만으로 효율성을 판단하지 않는다."]
];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function renderMath(root=document.body){
  if(!root || !window.renderMathInElement) return;
  renderMathInElement(root,{
    delimiters:[
      {left:"$$",right:"$$",display:true},
      {left:"\\[",right:"\\]",display:true},
      {left:"\\(",right:"\\)",display:false},
      {left:"$",right:"$",display:false}
    ],
    throwOnError:false,
    strict:"warn",
    ignoredTags:["script","noscript","style","textarea","pre","code"]
  });
}
function loadProgress(){try{return JSON.parse(localStorage.getItem("gtlab-progress")||'{"done":[],"phraseCorrect":0,"phraseTotal":0,"blind":{}}')}catch{return {done:[],phraseCorrect:0,phraseTotal:0,blind:{}}}}
function saveProgress(p){localStorage.setItem("gtlab-progress",JSON.stringify(p))}
let fullText="",quickText="";
async function loadDocs(){const [a,b]=await Promise.all([fetch("EXAM_METHOD/02_HW3_problem_map.md"),fetch("EXAM_METHOD/03_exam_quick_sheets.md")]);if(!a.ok||!b.ok)throw Error("학습 문서를 불러오지 못했습니다.");fullText=await a.text();quickText=await b.text();}
function getQ(n){
  const lines=fullText.split("\n"),start=lines.findIndex(x=>new RegExp("^## Q"+n+"\\b").test(x));
  if(start<0)return "해당 문제의 원문을 찾지 못했습니다.";
  let end=lines.findIndex((x,i)=>i>start&&/^## Q[1-8]\b/.test(x));
  return lines.slice(start,end<0?lines.length:end).join("\n");
}
function normalizeMathMarkdown(source){
  // Convert legacy standalone square-bracket equation blocks into valid LaTeX.
  const chunks=(source||"").split(/(\`\`\`[\s\S]*?\`\`\`)/g);
  return chunks.map((chunk,i)=>{
    if(i%2===1) return chunk; // preserve fenced code exactly
    let out=chunk.replace(/^\[\s*$/gm,"\\[").replace(/^\]\s*$/gm,"\\]");
    out=out.replace(/(?<!\\)qquad/g,"\\qquad");
    // Convert mathematical expressions in parentheses, but leave prose intact.
    out=out.replace(/\(([^()\n]{1,140})\)/g,(whole,inside)=>{
      const t=inside.trim();
      const looksMath=/\\|[_^=<>≤≥∑παβγ]|^[a-zA-Z]$/.test(t);
      return looksMath ? "\\("+t+"\\)" : whole;
    });
    return out;
  }).join("");
}
function markdown(s){return marked.parse(normalizeMathMarkdown(s||""));}
function nav(){document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("active",b.dataset.tab===state.tab));}
function renderLearn(){const p=loadProgress(),q=state.q,e=exam[q];app.innerHTML='<div class="grid"><aside><div class="muted">HOMEWORK 3 · 문제 선택</div>'+Array.from({length:8},(_,i)=>'<button data-q="'+(i+1)+'" class="'+(q===i+1?'active':'')+'">Q'+(i+1)+' · '+esc(exam[i+1].type.split(" · ")[0])+'</button>').join("")+'<hr><label class="check"><input id="done" type="checkbox" '+(p.done.includes(q)?'checked':'')+'> 이 문제 학습 완료</label></aside><section class="panel"><div class="qtitle"><div><span class="tag">Q'+q+'</span> <span class="muted">'+esc(e.type)+'</span></div><div class="mode"><button class="btn '+(state.mode==="full"?"active":"")+'" data-mode="full">Full Solution</button><button class="btn '+(state.mode==="exam"?"active":"")+'" data-mode="exam">Exam Solution</button></div></div><div class="warning">학습 순서: 영문 조건 판독 → 풀이 구조 결정 → 수식 도출 → 검산. Exam Solution은 최종 암기용이 아니라 Full Solution을 이해한 뒤 재현하는 용도입니다.</div><div class="doc" id="lesson">'+(state.mode==="full"?markdown(getQ(q)):examHTML(e))+'</div></section></div>';app.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{state.q=+b.dataset.q;render()});app.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{state.mode=b.dataset.mode;render()});$("#done").onchange=ev=>{let x=loadProgress();x.done=ev.target.checked?[...new Set([...x.done,q])]:x.done.filter(v=>v!==q);saveProgress(x)};renderMath($("#lesson"));}
function examHTML(e){
  const formulaLines=e.equations.split("\n").map(line=>{
    const raw=line.trim();
    const looksMath=/[=<>∂πΣ≥≤→]|FOC|BNE|IR:|IC:|EU|P\(|R'|i[₁₂]/.test(raw);
    if(!looksMath) return '<div class="equation-caption">'+esc(raw)+'</div>';
    const latex=esc(raw)
      .replace(/FOC₁/g,"\\mathrm{FOC}_1").replace(/FOC₂/g,"\\mathrm{FOC}_2")
      .replace(/BNE/g,"\\mathrm{BNE}").replace(/IR/g,"\\mathrm{IR}").replace(/IC/g,"\\mathrm{IC}")
      .replace(/∂/g,"\\partial ").replace(/π/g,"\\pi ").replace(/Σ/g,"\\sum ")
      .replace(/≥/g,"\\ge ").replace(/≤/g,"\\le ").replace(/→/g,"\\Rightarrow ")
      .replace(/×/g,"\\times ").replace(/−/g,"-")
      .replace(/₁/g,"_1").replace(/₂/g,"_2").replace(/ᴸ/g,"^L").replace(/ᴴ/g,"^H")
      .replace(/[⁎*]/g,"^*");
    return '<div class="formula-line">\\['+latex+'\\]</div>';
  }).join("");
  return '<h2>시험장에서 재현할 순서</h2><ol>'+e.steps.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ol><h2>핵심 수식 / 조건</h2><div class="formula-panel">'+formulaLines+'</div><h2>검산 포인트</h2><blockquote>'+esc(e.check)+'</blockquote><p class="muted">목표: 문제 판독과 식 도출 1분, 핵심 전개 3분, 답·조건 검산 1분. 실제 배점과 난도에 따라 조정하세요.</p>';
}
function renderPhrase(){const item=phraseItems[state.phrase%phraseItems.length];app.innerHTML='<section class="panel"><div class="qtitle"><div><span class="tag">영문 → 수학 작업</span> <span class="muted">카드 '+(state.phrase+1)+' / '+phraseItems.length+'</span></div><button class="btn" id="next">다음 문장 →</button></div><h2>'+esc(item[0])+'</h2><p>이 문장을 읽으면 가장 먼저 어떤 수학 작업을 해야 할까요?</p><div id="opts">'+[item[2], "Set all players' payoffs equal to each other.","Differentiate every payoff with respect to every variable.","Choose the action with the largest numerical label."].sort(()=>Math.random()-.5).map(x=>'<button class="opt" data-answer="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div><div id="fb"></div><p class="muted">해설: '+esc(item[1])+'</p></section>';app.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{if($("#fb").dataset.done)return;let ok=b.dataset.answer===item[2];$("#fb").dataset.done="1";b.classList.add(ok?"correct":"wrong");$("#fb").innerHTML='<div class="feedback"><b>'+(ok?"정답입니다.":"다시 확인하세요.")+'</b><br>'+esc(item[3])+'<br><b>정답:</b> '+esc(item[2])+'</div>';renderMath($("#fb"));let p=loadProgress();p.phraseTotal++;if(ok)p.phraseCorrect++;renderMath($("#fb"));saveProgress(p)});$("#next").onclick=()=>{state.phrase=(state.phrase+1)%phraseItems.length;render()};}
function renderBlind(){const p=loadProgress(),saved=p.blind[state.q]||"";app.innerHTML='<section class="panel"><div class="qtitle"><div><span class="tag">3-minute blind solve</span> <b>Q'+state.q+'</b></div><div class="row"><span class="timer" id="timer">03:00</span><button class="btn" id="start">3분 시작</button><button class="btn" id="reset">초기화</button></div></div><div class="row">'+Array.from({length:8},(_,i)=>'<button class="btn '+(state.q===i+1?'primary':'')+'" data-bq="'+(i+1)+'">Q'+(i+1)+'</button>').join("")+'</div><h3>1. 문제 유형과 정보구조를 먼저 적으세요.</h3><p>'+esc(exam[state.q].type)+'</p><textarea id="blindAnswer" placeholder="예: type을 아는 Player와 모르는 Player를 분리하고...">'+esc(saved)+'</textarea><div class="row"><button class="btn" id="save">풀이 저장</button><button class="btn primary" id="reveal">'+(state.blindReveal?"해설 숨기기":"해설 보기")+'</button></div><div id="solution" class="'+(state.blindReveal?"":"hide")+' doc">'+markdown(getQ(state.q))+'</div></section>';app.querySelectorAll("[data-bq]").forEach(b=>b.onclick=()=>{state.q=+b.dataset.bq;state.blindReveal=false;render()});$("#save").onclick=()=>{let x=loadProgress();x.blind[state.q]=$("#blindAnswer").value;saveProgress(x);$("#save").textContent="저장됨"};$("#reveal").onclick=()=>{state.blindReveal=!state.blindReveal;render()};$("#reset").onclick=()=>{clearInterval(state.interval);state.timer=180;$("#timer").textContent="03:00"};$("#start").onclick=()=>{clearInterval(state.interval);state.timer=180;state.interval=setInterval(()=>{state.timer--;$("#timer").textContent=String(Math.floor(state.timer/60)).padStart(2,"0")+":"+String(state.timer%60).padStart(2,"0");if(state.timer<=0)clearInterval(state.interval)},1000)};renderMath($("#solution"));}
function renderDashboard(){const p=loadProgress(),done=p.done.length,accuracy=p.phraseTotal?Math.round(100*p.phraseCorrect/p.phraseTotal):0;app.innerHTML='<section class="panel"><h2>시험 대비 현황</h2><div class="cards"><div class="stat"><span class="muted">문제별 학습 완료</span><b>'+done+'/8</b><div class="progress"><i style="width:'+(done/8*100)+'%"></i></div></div><div class="stat"><span class="muted">영문 판독 정답률</span><b>'+accuracy+'%</b><span class="muted">'+p.phraseCorrect+' / '+p.phraseTotal+'문항</span></div><div class="stat"><span class="muted">블라인드 풀이 기록</span><b>'+Object.keys(p.blind).length+'/8</b></div><div class="stat"><span class="muted">시험 조건</span><b>90분</b><span class="muted">5문제 · 소문항 약 15개</span></div></div><h3>학습 우선순위</h3><ol><li>Full Solution으로 풀이 논리 이해</li><li>Exam Solution으로 3분 내 식과 순서 재현</li><li>영문 판독 훈련에서 문장 → 수학 작업을 즉시 연결</li><li>블라인드 풀이에서 해설 없이 작성하고 마지막에 검산</li></ol><p class="muted">학습 기록은 현재 브라우저의 localStorage에만 저장됩니다. 다른 기기나 브라우저와 자동 동기화되지 않습니다.</p><button class="btn" id="export">학습 기록 내보내기</button> <button class="btn" id="clear">기록 초기화</button></section>';$("#export").onclick=()=>{const blob=new Blob([JSON.stringify(p,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="game-theory-progress.json";a.click();URL.revokeObjectURL(a.href)};$("#clear").onclick=()=>{if(confirm("현재 브라우저의 학습 기록을 모두 초기화할까요?")){localStorage.removeItem("gtlab-progress");render()}}}
function render(){nav();if(state.tab==="learn")renderLearn();if(state.tab==="phrase")renderPhrase();if(state.tab==="blind")renderBlind();if(state.tab==="dashboard")renderDashboard();}
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;render()});
loadDocs().then(render).catch(e=>{app.innerHTML='<section class="panel"><h2>학습 문서 로드 실패</h2><p>'+esc(e.message)+'</p><p class="muted">GitHub 저장소의 EXAM_METHOD 폴더가 배포 경로에 포함되어 있는지 확인하세요.</p></section>'});