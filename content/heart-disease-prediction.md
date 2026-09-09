---
title: "Heart Disease Prediction"
excerpt: "End-to-end machine learning application predicting likelihood of heart disease from clinical inputs using trained KNN models."
category: "Data Science"
year: "2026"
technologies: ["Python", "Scikit-Learn", "Streamlit", "KNN", "Pandas"]
liveUrl: "https://muhammadshayan593-ai-ml-learning-main-m4o4xs.streamlit.app/"
---

## Overview

**Heart Disease Prediction** is an end-to-end machine learning application that predicts the likelihood of cardiovascular disease from patient clinical indicators.

Live App: [Heart Disease Prediction on Streamlit](https://muhammadshayan593-ai-ml-learning-main-m4o4xs.streamlit.app/)

## Clinical Parameters

The application processes:
- Age and biological markers
- Resting blood pressure and serum cholesterol
- Maximum heart rate achieved during stress tests
- Chest pain type classification
- Resting electrocardiographic (ECG) results

## ML Pipeline

- Data cleaning, imputation, and outlier analysis on cardiovascular datasets.
- Categorical one-hot encoding and standard scaling for numerical features.
- Comparative evaluation across multiple classification algorithms, with the fine-tuned K-Nearest Neighbors (KNN) model delivering optimal sensitivity.
- Serialized model, scaler, and feature vectors deployed directly into an interactive Streamlit UI.
