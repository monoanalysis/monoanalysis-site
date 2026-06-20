---
title: "ERCOT Negative Pricing and the ITC/PTC Dynamic"
subtitle: "How federal tax credits drive negative electricity prices in West Texas, and what the IRA's solar PTC election means for the market"
date: "2026-06-20"
tags: ["ERCOT", "Energy", "Solar", "Wind", "ITC", "PTC"]
featured: true
summary: "Negative pricing at West Texas Hub is not a market anomaly. It is a policy outcome. The $28.6/MWh Production Tax Credit gives wind and now solar a structural bid below zero. As solar scales under the IRA's new PTC election, the problem compounds."
---

## Three Things to Know

**One.** Negative price hours at West Texas Hub (HB_WEST) grew from 74 in 2018 to 431 in 2022, tracking renewable capacity additions with a Pearson correlation of 0.81. This is not noise. The PTC creates a ~$28/MWh floor below market that keeps generators online even when prices go negative.

**Two.** The IRA's new solar PTC election doubles the capacity willing to bid negative. Before 2022, solar ran on ITC and curtailed near $0. Now solar can elect PTC and stay online down to -$26/MWh, the same as wind. Scenario modeling shows 60% PTC solar adoption could add 500+ annual negative price hours in West Texas by the time solar capacity reaches 65 GW.

**Three.** The ITC vs PTC decision is a directional bet on future market conditions, not a standard tax optimization. At high capacity factors and low negative exposure, PTC dominates by $30-60M NPV on a 200 MW project. Past 12-15% negative price hours, ITC's upfront certainty wins.

---

## Empirical Trend: Negative Hours Rising With Renewables

West Texas Hub negative pricing is structural. Capacity factor and PTC math explain it fully.

![ERCOT Negative Price Hours by Year vs Renewable Capacity](/images/ERCOT_Negative_Price_by_Hours.png)

The bar chart above shows negative hours growing in lockstep with wind and solar buildout. The dip in 2023 reflects transmission congestion relief and curtailment, not a demand shift. 2024 came back at 420 hours.

![Correlation: Renewable Capacity vs Negative Price Hours](/images/Renewable-vs-Negative_Price_Hrs.png)

Pearson r = 0.81. The relationship is not perfect because congestion and weather add noise year to year. The direction is unambiguous.

Negative prices are not distributed randomly across the clock. They cluster between midnight and 5am in spring (March and April), when wind is strong and demand is at its lowest. That is the PTC mechanism in action.

![When Do Negative Prices Occur — Hourly Heatmap](/images/Negatice_Price_Hrs.png)

---

## Shutdown Price Model: The $28/MWh Gap

A PTC generator's marginal shutdown price is Variable O&M minus PTC rate. At $28.6/MWh PTC and $3/MWh variable O&M, wind stays online to -$25.6/MWh. ITC solar curtails near $2.50/MWh. That $28 gap is the mechanism behind every negative price event in West Texas.

![Shutdown Prices by Generator Type](/images/Break_Even_Price.png)

PTC Solar under the IRA behaves identically to wind. Gas peakers need $45/MWh to break even. When wind, PTC solar, and nuclear all run below zero, gas has no bid and the market clears deeply negative.

---

## ITC vs PTC Scenario: What Happens as Solar Scales

Under ITC, only wind surplus drives negative pricing. Under 60% PTC solar adoption, solar joins wind in the negative bid stack and the oversupply roughly doubles during midday oversupply hours.

![Solar PTC Election Impact on Negative Price Hours](/images/Solar_PTC_Impact.png)

The shaded area is the incremental negative hours that come purely from the PTC election decision.

---

## Developer Decision: ITC or PTC?

For a 200 MW ERCOT project at 8% WACC, PTC dominates at capacity factors above 22% when negative price exposure stays below 12%. The per-MWh credit compounds above the 30% upfront ITC over 10 years.

![PTC vs ITC NPV Advantage Heatmap](/images/Decision_Heat_Map_ITC_Vs_PTC.png)

The heatmap is clear. High CF, low negative exposure: elect PTC. Low CF or high negative exposure: ITC provides better downside protection. In West Texas specifically, where negative exposure is already 5-8% annually and rising, the ITC case is stronger than most developers acknowledge.

![PTC vs ITC NPV Convergence Under Rising Negative Exposure](/images/Convergence_ITC_PTC.png)

---

## Conclusion

The data tells a straightforward story. Negative pricing at West Texas Hub is a function of how many PTC-eligible MWh are online at any given hour, not a market failure or a weather event. Wind drove the first wave. The correlation to renewable capacity is 0.81 and it is not flattening.

The IRA's solar PTC election changes the scale. ITC solar curtailed and held negative hours in check. PTC solar bids through the same price floor as wind, and the scenario analysis shows that 60% adoption of PTC solar at current buildout rates adds hundreds of negative price hours per year in West Texas alone.

For developers, the NPV model is decisive. PTC is the better election at capacity factors above 22% when negative exposure stays below 12 to 15% of annual hours. West Texas is already at 5 to 8% and rising. That narrows the PTC advantage faster than most pro formas assume. The ITC election is not conservative. At high negative exposure, it is simply the higher NPV outcome.
