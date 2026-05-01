---
layout: about
title: about
permalink: /
subtitle: Compiler Research at <a href='https://nvidia.com'>NVIDIA</a>

profile:
  align: right
  image: gry3.jpg
  image_circular: true # crops the image to make it circular
  more_info: >

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
education: true # includes education section
work_experience: true # includes work experience section

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Guray Ozen is a Principal Compiler Engineer on the **Machine Learning Compiler** team at **NVIDIA**. 

## Current Projects

Guray currently works on programming models based on MLIR compiler:

- **[CuTeDSL (CUTLASS Python DSL)](https://docs.nvidia.com/cutlass/latest/media/docs/pythonDSL/cute_dsl_general/dsl_introduction.html)**: A peak-performance DSL for composable, high-performance GPU kernels, tightly integrated with CUTLASS.
- **Python DSL Infra for MLIR**: I designed and built that powers [CuTeDSL](https://docs.nvidia.com/cutlass/latest/media/docs/pythonDSL/cute_dsl_general/dsl_introduction.html). While CuTeDSL is the public face, the DSL Infra is the underlying framework — used internally as the frontend layer for several MLIR-based compiler projects.

At its core, it is a **multi-stage programming** system embedded in Python, targeting MLIR. This design draws on classical work in *multi-stage programming*, *partial evaluation*, and *phase-driven typing*, but is shaped by a single pragmatic goal: **writing fast GPU kernels**. Python's expressiveness is exactly what you want when *constructing* a kernel — and exactly what you don't want when *executing* one. MLIR Python DSL Infra gives you all of it at compile time, then discards it before a single instruction reaches the GPU.  
 
- **[cuda TILE Compiler](https://docs.nvidia.com/cuda/tile-ir/latest/)**: Focused on productivity and portability, targeting kernel composition and performance tuning across ML and HPC workloads.

## Research Interest

His current focus centers on optimizing compilers and programming languages for **GPU utilization** in **machine learning (ML)** and **high-performance computing (HPC)**. He has made key contributions to several production-grade compilers, including **Clang**, **Flang**, **MLIR**, **IREE**, and **NVIDIA HPC** (formerly PGI).

Previously, he was actively involved in language design for parallel programming models, such as **OpenMP** and **OpenACC**. He served as a voting member of the **OpenMP Language Committee** for NVIDIA and contributed extensively to the OpenACC language specification.
