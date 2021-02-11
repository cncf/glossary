---
title: Continuous integration (CI)
status: Feedback Appreciated
category: concept
---
## Continuous integration (CI)

**Status:** Feedback Appreciated

Continuous Integration (CI) is the practice of integrating code changes from different authors as regularly as possible. This is normally affected by a Continuous Integration software that watches a source control system (such as Git, Mercurial or Subversion) and when a change is noticed, performs a series of actions in order to ensure that the latest changes are ‘good’. CI is a prerequisite of Continuous Delivery.

Software systems are often large and complex, and therefore require many developers to maintain them. These developers may make conflicting changes, and inadvertently break each other’s work. Additionally with many developers working on a project, any common tasks (such as testing, and calculating code quality) would need to be repeated by each developer, wasting time.

CI software automatically checks that code changes merge cleanly whenever any developer ‘pushes’ their changes. It is a near-ubiquitous practice to use the CI server to run code quality checks, tests, and even deployments. As such, it becomes a concrete implementation of quality control within the team.

