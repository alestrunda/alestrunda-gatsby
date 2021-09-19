---
author: "Aleš Trunda"
date: "2021-08-06"
path: "/blog/snyk/"
image: "../images/news/lock.jpg"
title: "Secure your code with Snyk"
---

It's important to mind security, especially if you have an application working with private data. We hear every now and then about huge security incidents involving even the top software companies like Google or Microsoft. Luckily we've got several tools at our disposal that can help us with finding and fixing vulnerabilities.

In my opinion, Snyk is the leading platform for securing code. Another popular one is WhiteSource, or we could also use for example tool build in npm - `npm audit`, but Snyk seems to be the most advanced one.

I have Snyk enabled for this project through GitHub for free since my project is open source. If you want Snyk for your private projects, you'll have to go with a paid version. By default Snyk tests the project every day and also every time there is a change in your source code.

Snyk sends weekly emails about current vulnerabilities and also email every time a new vulnerability is found in one of your dependencies. Snyk also has other features like automatically creating pull requests with updated versions of the vulnerable dependency. From my experience, developers do not care about updating the dependencies, so being notified regularly makes them pay attention to keep the dependencies up to date. It's also easier to update them regularly than just once in a while which could affect a lot of code, especially if you'll updating by a major version.
