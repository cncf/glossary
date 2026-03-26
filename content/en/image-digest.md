---
title: Image Digest
status: Completed
category: concept
tags: ["application", "fundamental", ""]
---

An image digest is a unique, content-based identifier for a [container image](/container/),
represented as a cryptographic hash (typically SHA-256) of the image's manifest.
Unlike an image tag, which is a mutable human-readable label that can be reassigned,
an image digest is immutable — it permanently and uniquely identifies the exact content of an image.

## Problem it addresses

Container images are commonly referenced by tags (e.g., `myapp:v1.0` or `myapp:latest`).
Tags are convenient, but they are mutable: a registry owner can push a different image
under the same tag at any time. This means that two deployments using `myapp:latest`
may run entirely different software, making reproducibility difficult and introducing
security risks — for example, a compromised tag could silently deliver a malicious image.

## How it helps

An image digest provides a guaranteed, tamper-evident way to reference a container image.
Because the digest is derived from the content of the image itself,
any change to the image produces a different digest.
By referencing an image using its digest (e.g., `myapp@sha256:abc123...`),
teams ensure they are always running the exact same image,
regardless of what happens to its tag.
This is especially important for security audits, reproducible builds,
and [supply chain](/cloud-native-security/) integrity in production environments.