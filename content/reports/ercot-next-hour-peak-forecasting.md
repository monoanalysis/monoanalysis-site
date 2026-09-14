---
title: "Forecasting ERCOT Peak Hours"
subtitle: "Predicting the next peak hour so customers can curtail load and cut transmission cost."
date: "2026-09-14"
tags: ["Power"]
featured: true
summary: "A neural network predicts whether the next hour will be a peak hour in ERCOT, built on five years of EIA demand data. It reaches 96.7% precision and 72.4% recall."
---

## Three Things to Know

1. Predicting peak hours to curtail during systemwide high demand to save transmission cost
2. This model predicts whether the next hour will be a peak hour using five years of historical ERCOT demand data.
3. The model achieves:
   * 99.4% accuracy
   * 96.7% precision: Of all the hours flagged as peak hours, 96.7% are actually peak hours.
   * 72.4% recall: The model identifies 72.4% of all actual peak hours.

## Why This Model?

Transmission costs depend on how much electricity a customer uses when demand across the ERCOT system is at its highest. Therefore, predicting peak hours allows customers to curtail their electricity consumption during those periods and reduce their transmission costs.

This model predicts the probability that the next hour will be a peak hour in ERCOT.

## How Is It Done?

### Data

Hourly ERCOT electricity-demand data is collected from the U.S. Energy Information Administration (EIA) for 2020 through 2026.

### Assumptions

1. The top 2% of demand hours in each calendar year are classified as peak hours.
2. The model relies only on historical electricity-demand patterns. It does not use weather data in its predictions.

### Process

1. Extract hourly ERCOT demand data from the EIA.
2. Define the top 2% of demand hours in each year as peak hours.
3. Create a target variable ranging from 0 to 1, representing the probability that an hour will be a peak hour.
4. Split the data:
   * 2020–2024: Model training
   * 2025: Validation and prediction-threshold selection
   * 2026: Final out-of-sample testing
5. Feed the input variables into the neural network.
6. The neural network calculates its weights, generates predictions, compares them with the actual outcomes, and updates its weights during training.
7. Generate a final probability between 0 and 1 indicating whether the next hour is likely to be a peak hour. The selected threshold converts this probability into a peak or non-peak prediction.

## Model Performance

The model is tested and validated on 2026 data through September.

![Next-hour peak detection, 2026](/images/ercot-peak-threshold-tradeoff.png)

The chart shows how changing the prediction threshold affects model performance. Lower thresholds catch more peak hours but create more false alarms, while higher thresholds improve precision but miss more actual peaks.

* Precision: How often a peak warning is correct.
`Precision = TP / (TP + FP)`
* Recall: How many actual peaks the model catches.
`Recall = TP / (TP + FN)`
* F1 score: Balance between precision and recall.
`F1 = 2 × (Precision × Recall) / (Precision + Recall)`

TP = correctly predicted peak, FP = false peak warning, FN = missed peak.

## Results

```
PERIOD: 2026-08-01 00:00:00  ->  2026-09-13 23:00:00   (1,056 hours)
  demand range      : 53,900 - 90,741 MW
  real peak hours   : 92
  hours flagged     : 68   (threshold α=0.985)

  HITS            67   caught correctly
  MISSED          25   real peaks not flagged
  FALSE ALARMS     1   flagged but not actually peaks
  correct pass   963

  precision 98.5%   recall 72.8%   F1 0.838
```

![August 2026 peaks and model flags](/images/ercot-peak-august-confidence.png)

The top chart compares actual ERCOT demand with peak predictions: grey dots are actual peaks, while red circles are model-flagged peaks. The bottom chart shows the model's predicted rank; whenever it crosses the 0.985 threshold, the next hour is flagged as a peak. Overlapping grey and red markers represent correct predictions.
