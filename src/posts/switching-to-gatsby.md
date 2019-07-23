---
author: "Aleš Trunda"
date: "2019-07-23"
path: "/blog/switching-to-gatsby/"
image: "../images/news/switching-to-gatsby.jpg"
title: "Switching to Gatsby"
---

To keep up with modern technologies I decided to rebuild my websites from WordPress to Gatsby. I really like React and GraphQL and I already worked with Gatby, it's a quite nice tool. The whole static CMS thing looks interesting. I believe that's the way how to make small to mid web sites.

The main problem static CMS like Gatsby has is editing content. You have two possibilities. Work with MarkDown files and that for somebody without technical background that might not be easy. Or the another way - connect the site to some persitent storage, for example [Contentful](https://www.contentful.com/) looks nice. And with every change you have to make sure the whole site is rebuilded. That may seem daunting but there are tools for that - after some change for example in github they trigger rebuild and take care of releasing new version. So after you figure out these let's say problems you can enjoy all the benefits Gastby offers, especially speed.

Without the need for database I decided to use Github pages for static hosting, it's stable and free. So I just registered domain and set up DNS records, that's it, using Github pages with custom domain.
