---
author: "Aleš Trunda"
date: "2019-07-29"
path: "/blog/speed-test-grade-a/"
image: "../images/news/speed-test-grade-a.jpg"
title: "Speed test grade A"
---

One of the reasons to rebuild my web from WordPress to Gatsby was speed. Gatsby is really quick, has great optimalizations and without database it has no slow parts.

On WordPress I got these numbers for the front page: 1.2s first byte, load time 7.5s and page size 2.8MB. Though considering it's large one page web, the numbers are not great.

To measure speed I used [webpagetest](https://www.webpagetest.org/), my goal was to get all A's if possible. This project is published on GitHub, so I went also with GitHub pages for hosting, but as it turned out it's impossible to get there all A's in webpagetest. The problem is in cache - the default GitHub's setting is not graded A in webpagetest and you cannot change that setting so there's nothing you can do about it really. But except for that GitHub pages are just fine.

Hence to get all A grades I was forced to pick another hosting. I chose [netlify](https://netlify.com) and it works perfectly, I got these numbers now: 0.2s first byte (1s less), 2s load time (instead of 7.5s) and page size is not even 1MB (only about a third).
