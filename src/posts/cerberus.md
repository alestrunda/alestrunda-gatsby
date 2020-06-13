---
author: "Aleš Trunda"
date: "2019-12-24"
path: "/blog/cerberus/"
image: "../images/news/cerberus.jpg"
title: "Cerberus application"
---

I made Cerberus app some while ago when I started as a freelancer. It's vital for freelancing to track all projects, debts, etc. Sometimes a project could last several months, so you need to know how much time exactly you've put into it.

The Cerberus does that for me. It does not track just debts, but my expenses and incomes as well. Everyone should have a good view of these.
I made the first Cerberus version in PHP, jQuery, and jQuery-UI. That was years ago.
Now I made a brand new version of this app. It's in react.js, sass, and GraphQl and the back-end is running on node.js, apollo and MongoDB, cached with Redis. Back-end can be spinned up easily using docker-compose - does not include MongoDB, for that I use 3rd party service to have it available publicly.

The app is running [online](https://cerberus-client.netlify.com/), it's just a presentation with sample data, so feel free to test it.

If you would like to run your own version, you can find both [client](https://github.com/alestrunda/cerberus-client) and [server](https://github.com/alestrunda/cerberus-server) on my github.
