# AtCoder judge notifier

[日本語](README.ja.md)

A Chrome extension to notify the result of the submission on AtCoder

[Install](https://chrome.google.com/webstore/detail/atcoder-judge-notifier/hcjjfcidaloadjcemebolmdphhbpehba)

![TLE](https://user-images.githubusercontent.com/8144911/77526337-c2933600-6ecd-11ea-99a8-a1f412d28d9c.png)
![AC](https://user-images.githubusercontent.com/8144911/77526347-c45cf980-6ecd-11ea-8334-7ef514c9fc30.png)

## Behavior

This extension shows a desktop notification with a sound about the judge of submissions that are waiting for judge or judging when the submission page `https://atcoder.jp/contests/****/submissions/me` was opened.
The notification won't be shown if the tab and its window is active.

you can make the tab active by clicking the notification.

## How to install manually

1. Install deps and build.

```
$ yarn install
$ yarn build
```

2. Follow the below guide and choose the directory `dist` as the extension folder.

https://support.google.com/chrome/a/answer/2714278
