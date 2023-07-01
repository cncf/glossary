---
title: Self Healing
status: Completed
category: property
tags: ["infrastructure", "property"]
---

A self-healing system is capable of recovering from certain types of failure without any human intervention. 
It has a "convergence" or "control" loop that actively looks at the system’s actual state and 
compares it to the state that the operators initially desired. 
If there is a difference (e.g., fewer application instances are running than desired), 
it will take corrective action (e.g., start new instances).
