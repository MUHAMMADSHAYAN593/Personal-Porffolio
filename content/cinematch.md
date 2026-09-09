---
title: "CineMatch – Movie Recommendation System"
excerpt: "Movie recommendation web app using NLP (TF-IDF) and content similarity with memory-efficient on-demand sparse cosine calculations."
category: "Data Science"
year: "2026"
technologies: ["Python", "FastAPI", "Tailwind CSS", "Scikit-Learn", "TF-IDF", "Pickle"]
liveUrl: "https://movie-recomendation-system-obn0.onrender.com/"
---

## Overview

**CineMatch** is a movie recommendation web application that suggests films based on the stories, genres, and taglines of movies users already enjoy.

Live Demo: [CineMatch on Render](https://movie-recomendation-system-obn0.onrender.com/)

## The NLP Pipeline

- **Feature Vectorization**: Converted unstructured text into numerical feature vectors using **TF-IDF** (Term Frequency–Inverse Document Frequency).
- **Multi-Field Concatenation**: Combined each movie's overview, tagline, and genres, applying higher weights to genres to ensure thematic relevance. English stop words are scrubbed during vectorization.
- **Cosine Similarity**: Evaluated angle disparities between the query film's vector and candidate titles in the dataset to return ranked recommendations.

## The Memory Efficiency Challenge

With over **42,000 movies**, pre-generating a full $42,000 \times 42,000$ similarity matrix would require excessive memory, making deployment on cost-effective infrastructure impossible.

### The Solution:
Instead of creating a dense static matrix, CineMatch calculates similarity **on demand** using the pre-computed sparse TF-IDF matrix only when a user selects a specific movie. This dropped memory consumption by more than 90% with sub-50ms response times.

## Application Architecture

- **Backend**: Built with **FastAPI** for high-throughput asynchronous request processing. Model artifacts and vectorized matrices are serialized via Pickle and loaded into memory on server boot.
- **Frontend**: Clean Tailwind CSS interface featuring trending films, poster cards, search suggestions, movie details, and match percentage indicators.
