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
<div style="font-size:10.5px;color:#8C9BAA;margin-bottom:10px;">Nov 2025–Apr 14, 2026 · Source: Google Finance.</div>
<img src="/images/ttf_screenshot.png" alt="TTF Natural Gas EU price chart Nov 2025 to Apr 2026" style="width:100%;max-width:760px;display:block;" />
</div>

## The View

Kpler's base case puts EU storage at 96% by November 1. That scenario was built on Hormuz resolving by May and record LNG imports normalizing through summer. The US blockade declared April 12 makes that timeline materially harder to hit.

If the strait stays frozen through June, the 80% revised floor comes under real pressure. Demand-side curbs and emergency intergovernmental gas sharing mechanisms stop being theoretical. Every week the blockade holds is a week of injection capacity lost that cannot be recovered later in the season. The constructive case is still achievable. The window to get there is narrowing.
