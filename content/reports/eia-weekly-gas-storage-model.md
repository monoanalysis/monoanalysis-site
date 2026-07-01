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

## Where Storage Sits Today

![Full history](/images/gas_storage_full_history.png)

Latest weekly print is inside the 5-yr band but tracking the top edge of it.

## Ten Years of Extremes

![Historical extremes](/images/gas_storage_historical_extremes.png)

The five largest withdrawals in the last decade all cluster in January and February. Winter Storm Uri in February 2021 pulled 338 Bcf in a single week. The January 2026 cold snap tied the January 2018 Arctic event at 359 Bcf, the record.

## Distribution of Weekly Changes

![Distribution of weekly changes](/images/gas_storage_distribution.png)

Injections cluster tightly around +60 to +90 Bcf. Withdrawals spread wider and reach further. The record withdrawal is -359 Bcf, the record injection is +129 Bcf.

## Which Variables Move the Needle

![Variable importance](/images/gas_storage_variable_importance.png)

Heating demand contributes 23 pp of R². The next largest driver, dry gas production, contributes 1.3 pp. LNG exports and power burn each contribute roughly 1 pp. CDD, price, and storage deviation each contribute under 0.3 pp.

## The 2022 Structural Break

![Pre vs post 2022](/images/gas_storage_pre_post_2022.png)

Post-2022 the LNG coefficient is meaningfully larger in absolute terms, CDD became statistically significant, and power burn weakened. LNG exports are now the marginal demand source the storage balance keys off.

## Forward Projection

![Forward projection](/images/gas_storage_forward_projection.png)

Rolling the model forward four weeks from the latest print using 5-yr seasonal HDD and CDD produces the injection path shown above. A custom hot-weather scenario (HDD 12, CDD 85 the following week; HDD 10, CDD 92 the week after) projected +97.8 Bcf and +95.2 Bcf respectively, with 95% prediction intervals of roughly ±85 Bcf.

## Limitations

Production, LNG, and power burn data comes from monthly EIA reports that lag by about two months, so the model uses stale supply numbers. Price uses last week's value, so real-time price spikes are not captured. Extreme cold weeks like Winter Storm Uri fit worse than normal weeks. Production and LNG tend to move together in the data, which makes it harder to separate their individual effects.

## The View

Under the hot-weather scenario (HDD 12, CDD 85 next week, then HDD 10, CDD 92), the model projects +97.8 Bcf and +95.2 Bcf, moving implied storage from 2,835 Bcf to 3,028 Bcf by July 3, a 6.8% two-week build. The 95% prediction band is ±82 Bcf per week. That is wide enough that one hot CDD surprise can flip a triple-digit injection into a sub-50 number. The tail risk is not the summer. It is the first cold week of November, when the model's HDD coefficient of -1.79 turns every incremental HDD into 1.79 Bcf of withdrawal.
