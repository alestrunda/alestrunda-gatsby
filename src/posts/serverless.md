---
author: "Aleš Trunda"
date: "2021-07-05"
path: "/blog/serverless/"
image: "../images/news/server.jpg"
title: "Serverless technology"
---

Recently I rewrote one of my APIs to use Serverless. The reason was simple, it's a non-profit project, and finding fitting hosting is a tough task - either you will have to be regularly paying for it, or the free version will have some severe limitations - e.g. sleeping mode on Heroku.

The name Serverless might be misleading, it does not mean there is no server, just that you do not care about it. You just put your function up there and that's it, no need to worry about servers, you just "borrow" their computing power to run your stateless function. Serverless is nothing new, it's been around for some time. There are many providers offering Serverless services - AWS, Google Cloud, MS Azure... I've been thinking about using Serverless for some side project to experiment with it a bit. I finally got to it and I'm definitely pleased about how it went.

Regarding side projects, the greatest thing about serverless is that the free quota is very generous. For example, in AWS Lambda the limits are likely much more than what you're going to need. And it's pretty simple to get it up and running. This also makes it a very interesting choice for start-ups - no need to pay guys managing servers, the development of serverless functions is pretty quick and you can start for free and as you grow, Serverless automatically scales with you. That's how Serverless is charged - you pay only for the computing time that you actually used. But of course, it's not a silver bullet, it has cons as well which need to be considered first.

I'm glad that I've tried Serverless, it certainly has some significant pros and I'll be more than willing to consider it in my next project.
