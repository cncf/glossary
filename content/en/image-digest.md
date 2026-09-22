---
title: Image Digest
status: Completed
category: concept
tags: ["application", "security"]
---

An image digest is a unique, content-addressable identifier for a
[container image](/container-image/). It is a cryptographic hash (typically
SHA-256) of the image’s manifest, as defined in the
[OCI Image Specification](https://specs.opencontainers.org/image-spec/#overview).
Suppose an image tag is like a nickname: a mutable, human-readable label you can
reassign to a different image at any time. An image digest is like a
fingerprint: it is immutable and always identifies the exact content of one
image.

## Problem it addresses

Container images are commonly referenced by tags (e.g., `myapp:v1.0` or `myapp:latest`).
Tags are convenient, but they are mutable: a registry owner can push a different image
under the same tag at any time. This means two deployments using `myapp:latest`
may run entirely different software, making reproducibility difficult and introducing
security risks; for example, a compromised tag could silently deliver a malicious image.

## How it helps

An image digest provides a guaranteed, tamper-evident way to reference a
container image. Because the digest is derived from the image content itself,
any change to the image produces a different digest. By referencing an image by
digest (e.g., `myapp@sha256:abc123...`), teams ensure they always run the exact
same image, regardless of what happens to its tag. This is especially important
for security audits, reproducible builds, and supply chain integrity in
production environments.

## Related terms

- [Container](/container/)
- [Container Image](/container-image/)
