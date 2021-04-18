---
author: "Aleš Trunda"
date: "2021-04-18"
path: "/blog/clean-up/"
image: "../images/news/clean-up.jpg"
title: "How to clean up dozens of GBs from your dev machine"
---

SSDs are great, but they are expensive. I've got a small SSD, maybe you're like ma and running out of space. We certainly do not want to store some junk files in such a limited space. So I was inspecting what was taking most of my space and whether I can get rid of some of those junk files.

Looks like our development machines store a lot of unnecessary files we can simply remove and claim back dozens of GBs. It will of course depend on what tools and to which extend you use them. All of the commands I used should be safe as they relate only to cache, dangling files, etc. so files you can simply recreate or download again.

The most space-consuming might be Docker, simply running `docker system prune` could indeed free up dozens of GBs. I'm not used to having that many docker containers on my pc, so in my case, it was a few GBs. You can do even better and tell Docker to store images on your other drive than SSD, [instructions how to do that](https://stackoverflow.com/a/63752264/6846434).

Another very useful command is `yarn cache clean`. I was pretty surprised that this one freed up almost 10GBs since I prefer `npm` over `yarn` and running `npm cache clean --force` freed up about 1GB.

It seems odd to me that cypress stores files for all previous versions installed and they take a lot of space. By running `npx cypress cache prune` I claimed back almost 10GBs.

In total, I was able to get back more than 30GBs. The commands seem to be simple enough, I will keep in my mind to run them from now and then.
