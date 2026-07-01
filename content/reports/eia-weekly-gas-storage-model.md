---
title: "EIA Weekly Gas Storage: A 7-Variable Model That Beats the Seasonal Baseline by 19%"
subtitle: "406 weekly observations. R² = 0.86. Directional hit rate 93.5%. Weather is the story, LNG is the new margin."
date: "2026-07-01"
tags: ["Gas"]
featured: true
summary: "A structural OLS on weekly Lower 48 storage change (Jul 2018 to May 2026). Model MAE of 27.0 Bcf beats the naive 5-yr seasonal by 19.2%. HDD alone explains 23 pp of R². Post-2022, LNG sensitivity roughly doubled and power burn weakened."
---

## Three Things to Know

1. Seven variables explain 86% of weekly storage variance. Walk-forward MAE is 27.0 Bcf against a naive 5-yr baseline of 33.4 Bcf. Directional hit rate is 93.5%.
2. HDD alone drives most of the fit. Removing it costs 23 percentage points of R². Every other variable adds under 1.5 pp individually. Weather is the story.
3. The gas balance shifted in 2022. LNG became more sensitive, CDD turned statistically significant, and power burn weakened. LNG exports are now the marginal demand the storage balance keys off.

## The Setup

The dataset is 406 clean weekly observations from July 2018 to May 2026, pulled from EIA API v2. Target is net weekly change in Lower 48 working gas storage. Predictors are HDD, CDD, prior-week storage deviation from the 5-yr seasonal, dry gas production, LNG exports, power burn, and lagged Henry Hub spot.

## Which Variables Move the Needle

![Variable importance](/images/gas_storage_variable_importance.png)

Heating demand dominates at 23 pp of R². The next largest driver, dry gas production, contributes 1.3 pp. That gap is the story. Winter withdrawals and summer injections are weather trades first.

## The Backtest

![Actual vs predicted](/images/gas_storage_actual_vs_predicted.png)

The model tracks turning points cleanly. Winter withdrawals and shoulder-season injections both land inside the confidence band on most weeks. The scatter shows the same story with less noise.

![Scatter](/images/gas_storage_scatter.png)

## The 2022 Structural Break

![Pre vs post 2022](/images/gas_storage_pre_post_2022.png)

Post-2022 coefficients tell a different market. LNG absolute sensitivity roughly doubled. CDD became a statistically significant driver. Power burn weakened as a marginal signal. The read is that Freeport, Sabine Pass, Corpus Christi, and Plaquemines are now the price-setting demand block, not domestic power.

## Ten Years of Extremes

![Historical extremes](/images/gas_storage_historical_extremes.png)

The five largest withdrawals in the last decade all cluster in January and February. Winter Storm Uri in February 2021 pulled 338 Bcf in a single week. The January 2026 cold snap tied the 2018 Arctic event at 359 Bcf, the record. Every extreme move is a weather event.

![Distribution of weekly changes](/images/gas_storage_distribution.png)

The distribution is bimodal with a longer left tail. Injections cluster tightly around +60 to +90 Bcf. Withdrawals spread wider and reach further, reflecting the asymmetry of cold-driven demand shocks versus mild-weather injection seasons.

## Where Storage Sits Today

![Full history](/images/gas_storage_full_history.png)

Latest weekly print is inside the 5-yr band but tracking the top edge. The forward projection uses 5-yr seasonal HDD/CDD as the baseline and rolls the model forward four weeks.

![Forward projection](/images/gas_storage_forward_projection.png)

## Limitations

Monthly EIA series (production, LNG, power burn) lag by two months, so this is not a real-time nowcast. Price is included at a one-week lag. Mild multicollinearity between production and LNG.

## The View

The model isolates weather as the single dominant driver of weekly storage and confirms that the 2022 LNG buildout structurally repriced the demand side. The next iteration swaps monthly supply series for daily pipeline proxies to turn this from a structural explainer into a live nowcast.
