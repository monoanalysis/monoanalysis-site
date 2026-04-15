---
title: "European Gas Storage Refill Race 2026"
subtitle: "Storage sits at 29.55%. The legal target is 90%. The US just declared a naval blockade of Hormuz."
date: "2026-04-14"
tags: ["Gas"]
featured: true
summary: "Europe opens the 2026 injection season at 29.55%. Every comparable low-start year ended badly. Norway is at capacity, LNG is the only lever, and Hormuz just got a US naval blockade. The constructive case exists. The window to achieve it is narrowing fast."

---

## The Setup

European gas storage sits at 29.55% as of April 14, holding 334.35 TWh. That is the lowest injection season starting point since 2021.

The comparison matters. In 2021, Europe opened at 31% and ended the following winter in an energy crisis. In 2022, it opened at 34% — the year the EU launched an emergency refill program after Russia's invasion cut off pipeline supply. In 2025, it also opened at 34%, required 50 bcm of injections across the summer just to reach 83% by November. This year opens below all of them.

The legal target is 90% by November 1 under EU Regulation 2022/1032. The EU Gas Coordination Group has revised the operative floor to 80%, creating a 10-point buffer. Going from 29.55% to 90% across the April–October window requires net injections of roughly 670 TWh. That is not a forecast. That is arithmetic.

<div style="margin:28px 0;padding:24px 24px 16px;border:1px solid #e8e8e8;background:#fff;font-family:Arial,sans-serif;">
<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#1C2B3A;margin-bottom:3px;">EU Gas Storage — Start of Injection Season by Year</div>
<div style="font-size:11px;color:#8C9BAA;margin-bottom:18px;">% of working capacity, April 1 each year · Source: GIE-AGSI, EIA, European Commission</div>
<canvas id="c1" width="656" height="280" style="display:block;"></canvas>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<script>
(function(){
  var COLORS={low:'#C9A96E',mid:'#4A7FA5',accent:'#B03A2E'};
  var ctx1=document.getElementById('c1').getContext('2d');
  new Chart(ctx1,{type:'bar',data:{labels:['2021','2022','2023','2024','2025','2026'],datasets:[{data:[31,34,56,59,34,29.55],backgroundColor:[COLORS.low,COLORS.low,COLORS.mid,COLORS.mid,COLORS.low,COLORS.accent],borderWidth:0,borderRadius:3,categoryPercentage:0.52}]},options:{responsive:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#1C2B3A',titleColor:'#fff',bodyColor:'#A8B8C8',padding:10,callbacks:{label:function(c){return ' '+c.parsed.y+'% full';}}}},scales:{y:{min:0,max:70,ticks:{callback:function(v){return v+'%';},font:{size:11},color:'#8C9BAA',stepSize:10},grid:{color:'#F0F3F6'},border:{display:false}},x:{grid:{display:false},ticks:{font:{size:12,weight:'600'},color:function(c){return c.index===5?COLORS.accent:'#1C2B3A';}},border:{display:false}}}}});
})();
</script>

## Norway Is Maxed Out. LNG Has to Do the Work.

Pipeline gas from Norway is running at capacity. There is no incremental volume to call on. The entire supply equation falls on LNG.

Kpler's pre-Hormuz base case had EU-plus LNG imports reaching 145 mt in 2026, up 19% from 2025's 127 mt. Northwest Europe alone was projected at 73.6 mt, up 29% year-on-year. Southern Europe at 34.6 mt, up 25% from 2025's 27.6 mt. That volume was already aggressive. It required competing with Asian buyers for every spot cargo through summer. The 2025 injection season ran on roughly 90 bcm of pipeline gas and 85 bcm of LNG. Holding pipeline flat and growing LNG 19% is the base case. There is no cushion for underperformance on either leg.

<div style="margin:28px 0;padding:24px 24px 16px;border:1px solid #e8e8e8;background:#fff;font-family:Arial,sans-serif;">
<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#1C2B3A;margin-bottom:3px;">EU LNG Import Forecast by Region — 2025 vs 2026 (mt)</div>
<div style="font-size:11px;color:#8C9BAA;margin-bottom:10px;">Million tonnes · Source: Kpler European Natural Gas Outlook, Dec 2025</div>
<div style="display:flex;gap:20px;margin-bottom:14px;">
<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#4A5568;"><div style="width:12px;height:12px;border-radius:2px;background:#8AAEC8;flex-shrink:0;"></div>2025 Actual</div>
<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#4A5568;"><div style="width:12px;height:12px;border-radius:2px;background:#1C2B3A;flex-shrink:0;"></div>2026 Forecast</div>
</div>
<canvas id="c2" width="656" height="270" style="display:block;"></canvas>
</div>

<script>
(function(){
  var ctx2=document.getElementById('c2').getContext('2d');
  var data25=[57.1,27.6,13.4,21.5];
  var data26=[73.6,34.6,15.0,19.5];
  new Chart(ctx2,{type:'bar',data:{labels:['NW Europe','Southern Europe','Rest of EU-27','UK & Turkey'],datasets:[{label:'2025 Actual',data:data25,backgroundColor:'#8AAEC8',borderWidth:0,borderRadius:3,categoryPercentage:0.68,barPercentage:0.46},{label:'2026 Forecast',data:data26,backgroundColor:'#1C2B3A',borderWidth:0,borderRadius:3,categoryPercentage:0.68,barPercentage:0.46}]},options:{responsive:false,plugins:{legend:{display:false},tooltip:{backgroundColor:'#1C2B3A',titleColor:'#fff',bodyColor:'#A8B8C8',padding:10,callbacks:{label:function(c){return ' '+c.dataset.label+': '+c.parsed.y+' mt';},afterLabel:function(c){if(c.datasetIndex===1){var pct=(((c.parsed.y-data25[c.dataIndex])/data25[c.dataIndex])*100).toFixed(1);return ' YoY: +'+pct+'%';}return '';}}}},scales:{y:{ticks:{callback:function(v){return v+' mt';},font:{size:11},color:'#8C9BAA',stepSize:20},grid:{color:'#F0F3F6'},border:{display:false}},x:{grid:{display:false},ticks:{font:{size:11},color:'#1C2B3A'},border:{display:false}}}}});
})();
</script>

## The Hormuz Shock Just Got Worse

The Strait of Hormuz disruption is not background noise. It is the injection season's primary supply risk, and as of April 14 it has escalated materially.

Qatar halted LNG production after Iranian drone strikes in early March. Goldman Sachs estimated the halt cut near-term global LNG supply by 19%. TTF spiked from the pre-crisis consensus of ~€30/MWh to over €60/MWh at peak. Then the situation deteriorated further. Iran-US talks collapsed on April 12. Trump declared a US naval blockade of the strait. 230 loaded tankers are currently waiting inside the Gulf. Shipping remains effectively frozen. TTF closed April 14 at €42.91, down 7.5% on the day on brief ceasefire optimism that has not translated into resumed flows. Goldman's revised April forecast of €55/MWh is still in play.

The problem is structural, not uniform. Spain holds 40% of total EU LNG regasification capacity and sits at 60.2% storage fill. The Netherlands is at 5.5%. That nine-to-one divergence between two major EU economies is not a rounding error. Northern European countries that historically relied on Russian pipeline volumes and have limited regasification infrastructure are the most exposed if Qatari LNG stays offline through May.

<div style="margin:28px 0 48px;font-family:Arial,sans-serif;">
<div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#1C2B3A;margin-bottom:3px;">TTF Natural Gas EU — Annotated Price Path (EUR/MWh)</div>
<div style="font-size:10.5px;color:#8C9BAA;margin-bottom:10px;">Nov 2025–Apr 14, 2026 · Source: Google Finance. Annotations: Goldman Sachs, CNBC, Reuters.</div>
<div style="display:flex;gap:20px;margin-bottom:10px;flex-wrap:wrap;">
<div style="display:flex;align-items:center;gap:6px;font-size:10px;color:#4A5568;"><svg width="22" height="10"><line x1="0" y1="5" x2="22" y2="5" stroke="#8AAEC8" stroke-width="1.5" stroke-dasharray="6 4"/></svg>Pre-crisis baseline (€33.5)</div>
<div style="display:flex;align-items:center;gap:6px;font-size:10px;color:#4A5568;"><svg width="10" height="10"><polygon points="5,0 10,10 0,10" fill="#B03A2E"/></svg>Goldman Sachs Apr-26 forecast (€55)</div>
</div>
<div style="position:relative;width:100%;max-width:760px;height:430px;">
<img src="/images/ttf_screenshot.png" alt="TTF 6M price chart" style="position:absolute;top:0;left:0;width:100%;height:100%;display:block;" />
<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;">

  <!-- ── PRE-CRISIS BASELINE €33.5 — y=322 ── -->
  <line x1="68" y1="322" x2="690" y2="322" stroke="#8AAEC8" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.8"/>
  <rect x="70" y="326" width="122" height="15" rx="2" fill="rgba(255,255,255,0.85)"/>
  <text x="74" y="337" fill="#8AAEC8" font-size="9" font-family="Arial" font-weight="700">Pre-crisis baseline €33.5</text>

  <!-- ── EVENT 1: QATAR LNG HALT — Mar 3 — x=543 ── -->
  <line x1="543" y1="95" x2="543" y2="385" stroke="rgba(176,58,46,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- event dot on price line ~€50 at Mar 3, y(50)=189 -->
  <circle cx="543" cy="189" r="5" fill="#B03A2E" stroke="#fff" stroke-width="1.5"/>
  <!-- label box — placed LEFT of the event, top area, x ends at ~540 -->
  <rect x="310" y="88" width="152" height="48" rx="3" fill="#B03A2E"/>
  <text x="318" y="102" fill="#fff" font-size="8.5" font-family="Arial" font-weight="700">QATAR LNG HALT</text>
  <text x="318" y="114" fill="rgba(255,255,255,0.9)" font-size="8" font-family="Arial">Mar 3, 2026</text>
  <text x="318" y="126" fill="rgba(255,255,255,0.75)" font-size="7.5" font-family="Arial">GS: −19% global LNG supply</text>
  <text x="318" y="128" fill="rgba(255,255,255,0.6)" font-size="7" font-family="Arial">TTF →€63 peak</text>
  <!-- connector: box right edge to dot -->
  <line x1="462" y1="112" x2="538" y2="189" stroke="#B03A2E" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>

  <!-- €63 peak dot — x≈558, y(63)=84 -->
  <circle cx="557" cy="84" r="3.5" fill="#B03A2E" stroke="#fff" stroke-width="1.5"/>
  <rect x="562" y="76" width="52" height="14" rx="2" fill="rgba(176,58,46,0.85)"/>
  <text x="566" y="86" fill="#fff" font-size="8" font-family="Arial" font-weight="700">€63 peak</text>

  <!-- ── EVENT 2: US NAVAL BLOCKADE — Apr 12 — x=694 ── -->
  <line x1="694" y1="95" x2="694" y2="385" stroke="rgba(176,58,46,0.3)" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- event dot on price line ~€46, y(46)=229 -->
  <circle cx="694" cy="229" r="5" fill="#B03A2E" stroke="#fff" stroke-width="1.5"/>
  <!-- label box — placed LEFT, below Qatar box, no overlap -->
  <rect x="310" y="175" width="152" height="32" rx="3" fill="#B03A2E"/>
  <text x="318" y="189" fill="#fff" font-size="8.5" font-family="Arial" font-weight="700">US NAVAL BLOCKADE</text>
  <text x="318" y="201" fill="rgba(255,255,255,0.9)" font-size="8" font-family="Arial">Apr 12, 2026</text>
  <!-- connector: box right edge to dot -->
  <line x1="462" y1="191" x2="689" y2="229" stroke="#B03A2E" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>

  <!-- ── GS FORECAST — Apr 14 target €55 ── -->
  <!-- triangle marker at x=700, y(55)=148 -->
  <polygon points="700,138 708,154 692,154" fill="#B03A2E" opacity="0.9"/>
  <!-- label box — placed LEFT, below blockade box -->
  <rect x="310" y="238" width="110" height="30" rx="3" fill="#B03A2E"/>
  <text x="318" y="251" fill="#fff" font-size="8" font-family="Arial" font-weight="700">GS FORECAST</text>
  <text x="318" y="263" fill="rgba(255,255,255,0.95)" font-size="9" font-family="Arial" font-weight="700">€55 / MWh</text>
  <!-- connector: box right edge to triangle -->
  <line x1="420" y1="253" x2="692" y2="154" stroke="#B03A2E" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>

  <!-- ── CURRENT PRICE €43.37 — Apr 14 close ── -->
  <!-- small pill on the left margin at y(43.37)=242 -->
  <rect x="68" y="232" width="62" height="18" rx="2" fill="#1C2B3A"/>
  <text x="99" y="245" fill="#fff" font-size="9.5" font-family="Arial" font-weight="700" text-anchor="middle">€43.37</text>
  <!-- dotted horizontal guide line across -->
  <line x1="130" y1="241" x2="700" y2="241" stroke="#1C2B3A" stroke-width="0.8" stroke-dasharray="3 4" opacity="0.35"/>

  <!-- ── MID-DEC TROUGH €27 — x=251, y(27)=371 ── -->
  <circle cx="251" cy="371" r="3.5" fill="#1C2B3A" stroke="#fff" stroke-width="1.5"/>
  <rect x="200" y="354" width="72" height="28" rx="2" fill="rgba(255,255,255,0.88)"/>
  <text x="204" y="365" fill="#1C2B3A" font-size="8" font-family="Arial" font-weight="700">€27 trough</text>
  <text x="204" y="376" fill="#8C9BAA" font-size="7" font-family="Arial">mid-Dec 2025</text>

</svg>
</div>
</div>

## The View

Kpler's base case puts EU storage at 96% by November 1. That scenario was built on Hormuz resolving by May and record LNG imports normalizing through summer. The US blockade declared April 12 makes that timeline materially harder to hit.

If the strait stays frozen through June, the 80% revised floor comes under real pressure. Demand-side curbs and emergency intergovernmental gas sharing mechanisms stop being theoretical. Every week the blockade holds is a week of injection capacity lost that cannot be recovered later in the season. The constructive case is still achievable. The window to get there is narrowing.
