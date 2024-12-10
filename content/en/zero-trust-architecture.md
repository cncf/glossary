---
title: Zero Trust Architecture
status: Completed
category: Concept
tags: ["security", "", ""]
---

Zero trust architecture prescribes to an approach to the design and implementation of IT systems 
where trust is completely removed. 
The core principle being "never trust, always verify", devices or systems themselves, 
whilst communicating to other components of a system, always verify themselves before doing so. 
In many networks today, within the corporate network, systems and devices inside may freely communicate with each other 
as they are within the trusted boundary of the corporate network perimeter. 
Zero trust architecture takes the opposite approach where although inside the network perimeter, 
components within the system first have to pass verification before any communication is made.

## Problem it addresses

With the traditional trust based approach where systems and devices that exist within a corporate network perimeter, 
the assumption is that because there is trust, there is no problem. 
Zero trust architecture however, recognises that trust is a vulnerability. 
In the event where an attacker has gained access to a trusted device, 
depending on the level of trust and access that has been given to that device, 
the system is now vulnerable to attack 
as the attacker is within the "trusted" network perimeter and is able to move laterally throughout the system. 
In a zero trust architecture, trust is removed, therefore reducing the attack surface 
as an attacker is now forced to verify before going any further throughout the system.

## How it helps

Adopting a zero trust architecture brings the principal benefit of increased security 
with a reduction in the attack surface. 
Removing trust from your corporate system now increases the number and strength of security gates 
that an attacker has to go through to gain access to other areas of the system.
