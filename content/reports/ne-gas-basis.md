---
title: "New England Basis Differentials and Winter Risk Pricing"
subtitle: "Algonquin Citygate spread dynamics under pipeline constraints"
date: "2026-03-25"
tags: ["Gas"]
featured: true
summary: "Analysis of Northeast natural gas basis differentials, examining how pipeline bottlenecks and LNG import dependency create outsized winter volatility at the Algonquin Citygate hub."
---

## Motivation

New England remains the most pipeline-constrained gas market in the US. The Algonquin Citygate regularly trades at 2-5x Henry Hub during cold snaps. Understanding the structural drivers of this basis is essential for anyone trading Northeast gas or power.

The region has no significant gas storage capacity and relies on a limited set of pipeline interconnections, primarily the Algonquin Gas Transmission system. When heating demand spikes, the marginal supply source shifts from pipeline gas to LNG imports at the Everett terminal, fundamentally changing the pricing regime.

## Data & Methodology

We analyze daily basis spreads (Algonquin minus Henry Hub) from 2015-2026, segmented by heating degree days (HDD), pipeline utilization on the Algonquin Gas Transmission system, and Everett LNG terminal sendout volumes.

A multivariate regression isolates the marginal contribution of each driver. We also examine the forward curve's pricing of winter basis risk using options on Algonquin basis swaps.

## Results

Pipeline utilization above 92% is the single strongest predictor of basis blowouts, explaining 54% of variance in winter spreads. LNG sendout becomes the marginal supply source above this threshold.

Key findings:
- Average winter basis (Nov-Mar): $2.40/MMBtu above Henry Hub
- Average basis when pipeline utilization exceeds 92%: $8.75/MMBtu
- Peak observed basis: $35.20/MMBtu (January 2018 bomb cyclone)
- Forward curves consistently underprice tail risk in December-February

## Interpretation

The structural supply deficit will persist until new pipeline capacity is built, which faces ongoing permitting challenges in the Northeast. Traders should model basis risk using pipeline flow data rather than relying on historical spread distributions that underweight constraint events.

The systematic underpricing of tail risk in basis options creates an opportunity for informed traders who can model pipeline utilization scenarios using weather forecasts and flow nomination data.
