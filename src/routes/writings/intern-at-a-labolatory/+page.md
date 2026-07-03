---
title: Intern at a Labolatory
date: 2025-09-01
displayDate: Sep-Oct
---

<script>
  import MDImage from '$lib/components/MDImage.svelte';
  import is1 from '$lib/assets/is-1.webp';
  import is2 from '$lib/assets/is-2.webp';
  import is3 from '$lib/assets/is-3.webp';
</script>

# {title}

In September–October 2025 I joined the [Intelligent Systems Laboratory](https://www.instagram.com/is.lab.filkom/) for a two‑month probationary internship as part of their recruitment process. During this period I worked on individual assignments and developed a final research project that leveraged deep learning.

# Lerning about Transformers 
My evaluation began with exploring the world of Natural Language Processing (NLP). One of the first task was building a spam detection system.

On paper, binary text classification sounds straightforward. However, implementing it using the DistilBERT transformer model was a significant step up from the basic algorithms I was used to. It involved fine-tuning a pre-trained language model, which essentially means taking a model that already "knows" English and teaching it to specifically recognize spam. It was a great warm-up that forced me to get comfortable with the Hugging Face Transformers library very quickly.

# Final Research Project: BioBERT and Wikipedia

For the core of our recruitment challenge, my partner and I decided to tackle a complex research project. We chose to address a critical issue facing online health information which is reliability.

Wikipedia is the most frequently accessed source for health information, but it suffers from a reputation for inaccuracy due to its open-editing nature. While the WikiProject Medicine department manually assesses article quality, they cannot keep up with the sheer volume of changes. Edits on the platform occur approximately 18 times per second. We proposed building an automated Deep Learning system capable of grading articles from "Stub" to "Featured Article" instantly and objectively.

## Phase 1: The Data Pipeline

Before we could model, we needed a dataset. Since no ready-made dataset combined medical article text with their quality ratings, we had to build one.

We started by scraping the titles of all graded medical articles from [WikiProject Medicine/Assessment](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Medicine/Assessment). Then, rather than scraping pages one by one, we downloaded the massive English Wikipedia XML data dump. I wrote extraction scripts to parse this dump by filtering out only the relevant medical articles to ensure efficient processing.

However, raw text was not enough. Drawing from previous research, we engineered a set of tabular features to give the model more context. In the end, we curated a clean dataset of 51,890 medical articles that was rich with both textual content and structural metadata.

<MDImage src={is1} alt="Class distribution of the dataset" class="max-h-64 rounded-lg mx-auto"/>

## Phase 2: The Multi-Input Architecture

For the modeling phase, we wanted to surpass traditional Machine Learning baselines like Random Forest. Traditional models rely heavily on tabular data and often ignore the actual meaning of the sentences. We chose BioBERT because it is a transformer model pre-trained specifically on biomedical corpora to capture the semantic context.

We designed a Multi-Input Neural Network to get the best of both worlds.

The architecture worked in two streams:

- Input A (Text): The raw article text was fed into BioBERT to generate dense vector embeddings. We specifically extracted the CLS token representation.

- Input B (Tabular): Our engineered features were passed through a Dense Layer.

These two streams were concatenated and passed through a final fully connected layer with Dropout to prevent overfitting. This ended in a Softmax output that classified the article into one of six quality tiers.

<MDImage src={is2} alt="Model Architecture" class="max-w-80 rounded-lg mx-auto"/>

# Results

The implementation process was rigorous. We had to handle severe class imbalance because there are far more "Stub" articles than "Featured Articles." We addressed this using contextual augmentation and back-translation.

<MDImage src={is3} alt="Results" class="max-h-64 rounded-lg mx-auto"/>

Despite these efforts, the results were mixed. The final model achieved an overall accuracy of 61% on the test set, with a weighted average F1-score of 0.62. While it performed reasonably well on the more common, lower-quality classes like "Stub" (F1-score of 0.75) and "Start" (F1-score of 0.67), it struggled significantly with the high-quality, minority classes. For instance, the "FA" (Featured Article) and "GA" (Good Article) classes had very low F1-scores of 0.04 each, reflecting the difficulty of correctly identifying these rare, high-standard articles. The project demonstrated the potential of deep learning for this task, but also highlighted the significant challenge of building a truly robust automated grading system for complex content.

# The Takeaway

The recruitment process for the Intelligent Systems Laboratory was a reality check. It pushed me to move beyond simple implementations and grapple with the messy, often frustrating nature of real-world data science.

The mixed results were a humbling lesson. Seeing the model struggle to identify high-quality articles despite our complex multi-input architecture taught me that algorithms are not magic. No amount of model complexity can easily fix a dataset where the target you care about most is also the rarest.

For anyone looking to join a research lab, I cannot recommend this kind of hands-on challenge enough. It is one thing to achieve high accuracy on a pre-cleaned dataset in a tutorial. It is entirely another to scrape your own data, engineer custom features, and face the harsh reality of class imbalance head-on. It was a short two months, but the technical depth and resilience I gained were invaluable.

## Links

- [Final Project Repository](https://github.com/AgungAryansyah/project-intern-kc)
- [Individual Task Repository](https://github.com/AgungAryansyah/tugas-intern-kc)
