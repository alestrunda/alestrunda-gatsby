---
author: "Aleš Trunda"
date: "2021-11-25"
path: "/blog/automate-tedious-tasks/"
image: "../images/news/chrome.jpg"
title: "Automate tedious tasks in your web browser"
---

I'm sure from time to time we all do some tedious tasks in our web browser. Wouldn't it be great to save us some time and automate those tasks? Sure it would, but is it worth the trouble? Well, that's the thing, it's actually pretty simple to create a web browser extension to do various things for us.

In my job, I was regularly doing some testing using many different accounts. It was not handy to have all the different credentials saved in my web browser. So I had them stored elsewhere and was copying them back and forth. But using browser extension I can get the credentials filled in the form easily by mapping them to keys 1 to 9. And you can come up with any logic you want.

You do not need to worry about security. When you develop a web browser extension, the whole code is only in your local machine.

---

To add a script that would run on every page we use `content_scripts` property in `manifest.json`. Then by `matches` prop we can restrict the script to run only on specific URLs. For simplicity, I used `<all_urls>` which of course means to run it on every page.

```json
{
  ...
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content-script.js"]
    }
  ]
}
```

Then we need to create the file `content-script.js` and put there the logic we want. For example, if we want to automatically fill field `username` with text "John Doe" every time we press key "j", the code would be:

```javascript
document.addEventListener("keydown", function (e) {
  if (e.code === "KeyJ") {
    document.querySelector('[name="username"]').value = "John Doe";
  }
});
```

Well, in this case, the code does not do much, but we could create way more complex logic with DOM manipulations to save us a significant amount of time.
