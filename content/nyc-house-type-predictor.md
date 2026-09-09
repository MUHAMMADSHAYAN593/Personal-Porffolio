---
title: "Predicting House Type – NYC Real Estate ML Platform"
excerpt: "End-to-end machine learning web application and market intelligence dashboard trained on 48,895+ NYC Airbnb listings with 84% F1-score."
category: "Data Science"
year: "2026"
technologies: ["Python", "Scikit-Learn", "Streamlit", "Plotly", "Pandas", "NumPy", "Joblib"]
liveUrl: "https://shayan123-svg-nyc-house-type-predictor-main-u1uhha.streamlit.app/"
---

## Overview

Can Machine Learning accurately predict accommodation and room types in the world’s most competitive short-term rental market?

**Predicting House Type** is an end-to-end Machine Learning web application and market intelligence dashboard built with Python, Scikit-Learn, Streamlit, and Plotly. Trained on **48,895+ New York City Airbnb listings**, the platform classifies properties into *Entire Home/Apt*, *Private Room*, and *Shared Room* with **84% accuracy** and a **weighted F1-score of 84%**.

Live App: [NYC House Type Predictor on Streamlit](https://shayan123-svg-nyc-house-type-predictor-main-u1uhha.streamlit.app/)

## Why This Project?

In high-density real estate hubs like NYC, incorrect room-type categorization distorts pricing indices, affects host discoverability, and can lead to regulatory non-compliance. This platform serves as an automated verification and revenue optimization engine for hosts, guests, and real estate analysts.

## Feature Engineering & Spatial Modeling

- **Haversine Geodesic Modeling**: Computed distance vectors from NYC Center (Times Square) to model geographical price premiums.
- **Logarithmic Transforms**: Applied $\log(1+x)$ transformations to normalize extreme right-skewed pricing and minimum-stay distributions.
- **Interaction Terms**: Modeled availability ratios and price-occupancy interactions to capture host listing behavior.

## Scikit-Learn ML Pipeline

- **Tuned `RandomForestClassifier`**: Utilized balanced subsample weighting to manage severe class imbalances across minority room categories (such as shared rooms).
- **Outlier-Resistant Preprocessing**: Engineered pipelines using `RobustScaler` (resistant to extreme luxury outliers) and `OneHotEncoder`.

## Interactive Dashboard Features

1. **Property Attribute Studio**: Real-time slider tuning, coordinates auto-fill, presets, and model explainability drivers.
2. **Batch CSV Inference**: Instantaneous multi-row classification with downloadable prediction sheets.
3. **NYC Real Estate EDA**: Geospatial dark-matter scatter maps, pricing boxplots, and borough distributions via Plotly.
4. **Model Performance Hub**: Real-time confusion matrix, classification metrics, and top feature weights.
5. **Host Revenue & Pricing Simulator**: Live dynamic gross revenue estimation and pricing threshold testing.

## Defensive Engineering

Implemented a resilient, self-healing singleton design pattern with automated artifact recovery to prevent memory crashes during high-concurrency Streamlit re-renders. Strict static typing maintained with Pyright/Pylance.
