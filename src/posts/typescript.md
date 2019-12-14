---
author: "Aleš Trunda"
date: "2019-12-14"
path: "/blog/typescript/"
image: "../images/news/typescript.jpg"
title: "Typescript 3.7 is out"
---

New version of Typescript is out. This time it comes with very interesting feature "Optional Chaining", which I've been really looking forward to. About a week ago it's been integrated into my favorite Create React App, so everything's ready to start using it.

Having complex objects with possible undefined props required developers to use not very nice syntax when accessing nested props. Now that's solved - in a nutshell instead of someting like:

```javascript
users && users.admin && users.admin.name
```

We can write just:

```javascript
users?.admin?.name
```

And now imagine even more nesting, that makes "Optional Chaining" very nice and concise indeed.

Another interesting feature is "Nullish coalescing operator" - that is **??**
