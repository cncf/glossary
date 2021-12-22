---
title: Stateless Apps
status: Feedback Appreciated
category: technology
---

## What it is

When we speak of stateless apps, these apps need not store any previous data(state) to function as designed. Any kind of online shop that remembers your credit/debit cards is a stateful application, whereas the CVV we enter every time while making a transaction is the stateless application as it is not remembered apriori.  
Another crude example of stateless apps could be the calculator that always start with zero without storing the calculations or data from before.  

## Problem it addresses

While using an app, we avail many independent services. For example, when we are surfing web in a browser, we may perform online transaction in one tab, and we may listen to music in another tab. Both these tasks can be considered as [clusters](/cluster/) that work independently at the same time.  

## How it helps

If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime. No state implies less complex design of the application.
