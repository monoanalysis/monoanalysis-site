---
title: "PJM Load Decides Appalachian Gas: A Structural Break After MVP"
subtitle: "Daily demand explains 64% of Appalachian gas burn. After MVP, the fit got tighter, the swings got wider, and the price stopped mattering."
date: "2026-06-24"
tags: ["Gas", "Power"]
featured: true
summary: "1,466 daily observations from June 2022 to June 2026. A simple regression of daily PJM demand on daily gas burn returns R² = 0.64. The full model returns R² = 0.71. After MVP (June 14, 2024) the demand-burn correlation strengthened from 0.77 to 0.84 and daily burn variance jumped from 1.29 to 1.54."
---

## Three Things to Know

1. PJM daily electricity demand explains 64% of daily gas burn on its own. With Henry Hub, storage, MVP, and season controls, R² rises to 0.71. Demand is by far the strongest standardized driver.
2. The MVP pipeline (in-service June 14, 2024) is a clean structural break. Demand-burn correlation strengthened from 0.77 to 0.84, daily burn variance rose from 1.29 to 1.54 (Levene p < 0.001), and gas share of PJM generation fell from 43.0% to 41.9% (p < 0.001).
3. Henry Hub price barely matters in the short run. r = 0.115, R² = 0.013. Gas burn is dispatched on load, not on price.

## The Setup

The dataset is 1,466 daily observations covering PJM hourly generation aggregated to days, PJM daily demand, Henry Hub spot, and East-region weekly storage forward-filled to daily. The frame is how PJM power demand translates into Appalachian gas takeaway. The MVP pipeline in-service date splits the sample into 734 pre-MVP days and 732 post-MVP days.

## Demand Is The Signal

The hero scatter shows daily PJM demand against daily gas burn. Each dot is one day. The slope is 3.7 Bcf per million MWh and the fit is tight.

![PJM Demand vs Daily Gas Burn](/images/pjm_demand_vs_burn_hero.png)

A simple OLS of burn on demand returns R² = 0.644. Each 100,000 MWh increase in daily PJM demand corresponds to 0.37 Bcf of additional daily gas burn. That is the single most useful equation in the file.

## The Full Model

Adding Henry Hub, storage level, storage change, MVP flag, and season dummies pushes R² to 0.708. Standard errors are clustered by week because storage is a step function.

![Standardized Regression Coefficients](/images/pjm_std_coefs.png)

PJM demand is the dominant standardized coefficient. Summer and storage level are positive and significant. MVP is negative and significant, meaning gas share fell after the pipeline opened even though absolute burn rose. Henry Hub carries a small negative coefficient. Storage weekly change is not significant.

## MVP Is The Break

The pre vs post-MVP comparison is the cleanest part of the analysis.

![Pre vs Post-MVP by Season](/images/pjm_pre_post_mvp.png)

Mean daily burn rose from 6.91 Bcf to 7.07 Bcf (Welch t-test p = 0.027). The variance change is sharper. Pre-MVP std was 1.29 Bcf, post-MVP std is 1.54 (Levene p < 0.001). The fleet is burning more on average and swinging harder day-to-day. Gas share of PJM generation fell from 43.0% to 41.9% (p < 0.001), and the demand-burn correlation strengthened from 0.766 to 0.840.

## The Time Series and Heatmap

The 7-day rolling chart shows the demand-burn co-movement and the MVP marker.

![PJM Gas Burn and Demand Over Time](/images/pjm_timeseries_mvp.png)

The monthly heatmap confirms the seasonal pattern. June, July, August dominate. December and January carry the winter peak.

![Monthly Average Daily Gas Burn](/images/pjm_monthly_heatmap.png)

## Price Does Not Drive Short-Run Burn

The Henry Hub scatter is the negative result that matters. The dispatch is on load, not price.

![Henry Hub vs Daily Gas Burn](/images/pjm_hh_vs_burn.png)

Pearson r = 0.115, R² = 0.013. In the full model the price coefficient is small and negative, consistent with a modest substitution effect at high prices that does not show up in the bivariate fit.

## So-What For An Appalachian Gas Trader

PJM daily demand at 6.99 Bcf/d average burn is the dominant short-term call on Appalachian gas. EQT produces roughly 5.5 Bcf/d, so PJM gas burn alone clears more than EQT's entire daily output on most days. Watching PJM demand forecasts gives a real-time read on local takeaway. The summer-to-winter seasonal swing is 1.47 Bcf/d. After MVP, expect higher mean burn and wider daily swings. The trade is to use PJM load forecasts as a leading indicator, not Henry Hub.
