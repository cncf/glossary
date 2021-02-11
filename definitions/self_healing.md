---
title: Self Healing
status: Feedback Appreciated
category: concept
---
## Self Healing

**Status:** Feedback Appreciated

A self-healing system is one that is capable of recovering from certain types of failure without any human intervention.

For better or worse, there are often failure cases in systems that are known and expected. Most enterprises have one or many systems that are known to crash on a regular basis, and need manual intervention to be restarted. Wouldn’t it be nice if there was an automated system that detected these crashes, and restarted the system for you?

A self-healing system has a ‘convergence’ or ‘control’ loop that actively looks at the actual state of the system, and compares it to the state that the operators originally desired. If there is a difference (e.g. there are fewer application instances running that desired) it will take corrective action (in our example, starting new instances). 

