---
title: Client/Server Architecture
status: Feedback Appreciated
category: concept
---
## Client/Server Architecture

**Status:** Feedback Appreciated

A client-server architecture is one where the logic that makes up an application is split between two or more components: a client that asks for work to be done (e.g. the GMail web application running in your web browser), and one or more servers that satisfy that request (e.g. the ‘send email’ service running on Google’s computers in the cloud). This is in contrast to legacy applications which were typically self-contained (such as desktop apps in the 1990’s) and did all the work in one place (in our example the email is sent by Google’s computers rather than your own).

Self-contained applications cannot be updated regularly, as users would need to download and install the latest versions. Data would need to be ‘baked in’ to the application when it is packaged, meaning it cannot change until the app is updated, and users could not share a view of data. Imagine having to download all of Amazon’s product catalogue to your own computer before being able to browse it!

By implementing application logic in a remote server or service, operators can update that without needing to change logic in the client. This means that updates can be made much more frequently. Storing data on the server allows many clients to all see and share the same data. Consider the difference between using an online word processor, compared to a traditional offline word processor. In the former your files exist server-side, and can be shared with other users who simply download them from the server. In the legacy world, files needed to be copied to removable media (floppy disks!) and shared with individuals.

