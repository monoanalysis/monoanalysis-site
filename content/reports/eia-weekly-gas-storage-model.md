---
title: "65,000 Hours of Grid Data, One Weekly Gas Storage Print"
subtitle: "NOAA daily gas-utility-weighted HDD and EIA-930 hourly power burn get R² to 0.978. Walk-forward MAE 12 Bcf. Model predicts +96.5 Bcf for the release tomorrow morning."
date: "2026-07-01"
tags: ["Gas"]
featured: true
summary: "A structural OLS on 382 weekly observations (Jan 2019 to May 2026) using NOAA CPC daily degree days and EIA-930 hourly grid generation. Walk-forward MAE is 12.1 Bcf against a naive 5-year seasonal of 33.8 Bcf. Directional hit rate is 98.2%. For the week ending June 26, released July 2 at 10:30 ET, the model prints +96.5 Bcf with a 95% band of +67 to +126."
---

## Three Things to Know

1. R² is 0.978 across 382 weekly observations. Walk-forward MAE is 12.1 Bcf. Directional hit rate is 98.2%. The 95% prediction interval is ±32 Bcf, roughly one-third the historical weekly standard deviation.
2. Heating demand carries the model. Every additional heating-degree day pulls roughly 1.5 Bcf out of the weekly balance, and no other variable comes close to that force. Winter withdrawals are a pure weather trade.
3. Post-2022, LNG exports moved from a secondary driver to the marginal demand block. Every incremental Bcf/d of LNG flow now pulls 8.3 Bcf out of the weekly balance.

## The Setup

The dataset is 382 clean weekly observations from January 2019 to May 2026. Target is net weekly change in Lower 48 working gas storage. Predictors are HDD (NOAA CPC daily, gas-utility-weighted), CDD (NOAA daily, population-weighted), prior-week storage deviation from the 5-yr seasonal, dry gas production, LNG exports, power burn (EIA-930 hourly grid generation converted at 7.8 MMBtu/MWh), and lagged Henry Hub spot. Weather and burn come in at daily and hourly frequency, then aggregate cleanly to the Saturday-Friday storage week.

## Where Storage Sits Today

![Storage full history](/images/gas_storage_v2_full_history.png)

Latest EIA print is 2,835 Bcf as of June 19, tracking the upper edge of the 5-year band. The injection season is running above pace but inside the historical envelope.

## Ten Years of Extremes

![Historical extremes](/images/gas_storage_v2_historical_extremes.png)

Five largest withdrawals in the last decade all cluster in January and February. Winter Storm Uri pulled 338 Bcf in one week. The January 2026 cold snap tied the January 2018 Arctic event at 359 Bcf, the record. Every extreme in the series is a weather event.

## Which Variables Move the Needle

![Variable importance](/images/gas_storage_v2_variable_importance.png)

Heating demand dominates. Power burn, LNG exports, and production form a second tier. CDD and storage deviation add modest incremental fit. Henry Hub price at a one-week lag is not statistically significant (p = 0.29). The read is that storage moves are a physical flows story, not a price-response story on the weekly horizon.

## The 2022 Structural Break

![Pre vs post 2022](/images/gas_storage_v2_pre_post_2022.png)

Splitting the sample at January 2022 changes the LNG coefficient the most. Pre-2022 LNG was a moderate demand signal. Post-2022 it is the marginal call on domestic supply, running at 17.9 Bcf/d as of the latest EIA monthly. Freeport, Sabine Pass, Corpus Christi, and Plaquemines set the demand side of the balance now.

## The Backtest

![Actual vs predicted](/images/gas_storage_v2_actual_vs_predicted.png)

Walk-forward predictions track actuals through both winter withdrawal seasons and shoulder injection periods. The Uri and January 2026 tails are where the model's residuals sit. Everywhere else, the fit is inside 20 Bcf.

![Backtest diagnostics](/images/gas_storage_v2_backtest_diag.png)

The scatter is close to the 45° line. The error distribution is roughly Gaussian with kurtosis of 3.65 and no visible skew, meaning the model's misses are symmetric.

## The Forecast

![Live 2-week forecast](/images/gas_storage_v2_live_forecast.png)

For the week ending June 26, released tomorrow (July 2) at 10:30 ET, the model prints **+96.5 Bcf** with a 95% band of +66.9 to +126.1. Implied storage lands at 2,931 Bcf. For the week ending July 3, released July 9, the model prints +79.8 Bcf, taking storage to 3,011 Bcf. Week-1 inputs are fully actual. Week-2 blends NOAA's published 7-day forecast with the trailing-week EIA-930 average.

## Limitations

Production and LNG data come from monthly EIA reports that lag by about two months, so the model uses stale supply numbers. Extreme cold weeks like Uri fit worse than normal weeks. Production and LNG move together in the data, which makes it harder to separate their individual effects.

## The View

The model calls +96.5 Bcf tomorrow and +79.8 Bcf the following Thursday, building storage from 2,835 to 3,011 Bcf. The reason the forecast holds is that hourly grid generation is picking up power burn in near-real-time, which is where most of the injection-season variance actually sits. Tomorrow's release is the first honest test. If it lands inside the band, the framework is ready to run every Wednesday night.
