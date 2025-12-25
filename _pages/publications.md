---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 2
---

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

## Papers

<div class="publications">
{% bibliography --query @inproceedings || @phdthesis --group_by year --group_order descending %}
</div>

---

## Talks

<div class="publications">
{% bibliography --query @misc --group_by year --group_order descending %}
</div>
