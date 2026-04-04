---
title: "Corn vs WTI Correlation Analysis"
subtitle: "Investigating the evolving relationship between agricultural and energy commodity prices"
date: "2026-04-01"
tags: ["Agriculture", "Oil"]
featured: true
summary: "A quantitative study of the rolling correlation between CBOT corn futures and WTI crude oil, examining how biofuel mandates and macro shocks reshape cross-commodity linkages."
---

## Motivation

The corn-crude oil nexus has strengthened since the Renewable Fuel Standard expanded ethanol mandates. Understanding this correlation is critical for cross-commodity hedging strategies and for anticipating spillover effects from energy shocks into agricultural markets.

The relationship is not static. During periods of financial stress, correlations across all asset classes tend to spike as macro factors dominate. But the corn-WTI link has a structural component that persists even in calm markets, driven by the biofuel production chain.

## Data & Methodology

We compute 60-day rolling Pearson correlations between front-month CBOT corn and WTI crude oil futures from 2010 to 2026. Regime shifts are identified using a Markov switching model with two states (high/low correlation). We control for USD index movements and seasonal planting cycles.

Data sources include CME Group settlement prices, FRED for the DXY index, and USDA planting progress reports for seasonal adjustment.

## Results

The average rolling correlation sits at 0.38, but regime analysis reveals two distinct states:

- **Low-correlation regime** (mean 0.12): Prevails during stable energy markets when fundamental supply-demand dynamics in each commodity dominate pricing.
- **High-correlation regime** (mean 0.67): Triggered during energy price dislocations, financial crises, and periods of elevated macro uncertainty.

The high-correlation state has become more frequent since 2020, appearing in approximately 40% of trading days versus 25% in the 2010-2019 period.

## Interpretation

For commodity portfolio managers, the implication is clear: diversification benefits between ag and energy diminish precisely when they are most needed. Hedging frameworks should incorporate regime-dependent correlation assumptions rather than static estimates.

A practical application is to monitor the Markov model state probability in real-time. When the probability of the high-correlation regime exceeds 60%, cross-commodity hedges should be adjusted to reflect the tighter linkage.
