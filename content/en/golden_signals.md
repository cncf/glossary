---
title: Golden Signals
status: Feedback Appreciated
category: concept
---

## What it is
Golden signals are metrics that provide a wide view of a service from the user's perspective . It is the gold standard for monitoring an application’s performance using the following criterias :

#### Latency
It is the time taken to service a request. e.g. : It’s important to track error latency, as opposed to just filtering out errors.<br />
#### Traffic
It is the measure of how much demand is being placed on the application.<br />
#### Errors
It is the measurement of rate of requests that fail, either explicitly (e.g. :technical errors), implicitly (e.g. : success response with wrong content), or by policy (e.g. : any response generation that breaches an agreement).<br />
#### Saturation
It measures how "full" your application is. It measures the application fraction, emphasizing the resources that are most constrained (e.g.: deadlock in database due to saturation or server bottleneck).
 
## Problem it addresses
Everything becomes a muddy guessing game , without actual measurements (noted observations) at hand to arrive at a conclusion (for deducing performance of the application) and earlier monitoring tools were designed to monitor machines, not applications/services. While on the flip side of the coin modern monitoring systems offer a huge variety of parameters making it easier to drown in and lose focus of what really is relevant for the application.
The Golden Signals are comprehensive and steer clear from getting stuck in the mud by putting the performance data into different buckets.
Which then provides the visibility to pinpoint the problems that might originate.


## How it helps
Measuring latency tells about how long it takes the application to handle transactions which is a sign of a major performance issue.<br />
Measuring website traffic allows a clear understanding of what is working or what isn't and develops a more potent content. It helps in better utilization of traffic.<br />
Measuring error is important to keep track of the time frames when errors tend to increase and develop a workaround for the cause.<br />
Measuring  saturation provides the resource limit after which performance of application will either degrade or it’ll crash.<br />

For detailed information please visit : https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals


