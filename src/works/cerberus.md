---
date: "2019-12-24"
excerpt: "Cerberus application for tracking incomes, debts and outlays"
image: "../images/works/cerberus.jpg"
imageFull: "../images/works/cerberus-full.jpg"
path: "/works/cerberus/"
published: "true"
technologies: "HTML5 & CSS3, ITCSS, SASS, JavaScript, Typescript, React, Node.js, GraphQL, MongoDB, Webpack, Redis, Docker"
title: "Cerberus"
urlGithub: "https://github.com/alestrunda/cerberus-client"
urlLive: "https://cerberus-client.netlify.com/"
---

I've just released a new version of Cerberus application. I made the first version a couple of years ago build on PHP and jQuery. Now I've released a brand new version.

Cerberus tracks my incomes, debts and outlays. I made it for myself when I started freelancing because it's vital for a freelancer to have a good view of all projects and how much hours did they take.

It's a client-server app. The client is built on react, typescript and GraphQL. The server is built on node.js, apollo, and MongoDB cached with Redis. Back-end can be spinned up easily using docker-compose - MongoDB is not included, I use 3rd party service for that, so it's available publicly.

Check [version online](https://cerberus-client.netlify.com/) with sample data that you can play around with.

If you'd like to run your own instance, you can find all the code on my github.
