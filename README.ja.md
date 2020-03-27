# AtCoder judge notifier

[English](README.md)

AtCoder における提出のジャッジ結果を通知する Chrome 拡張機能です。

[インストール](https://chrome.google.com/webstore/detail/atcoder-judge-notifier/hcjjfcidaloadjcemebolmdphhbpehba)

![TLE](https://user-images.githubusercontent.com/8144911/77526337-c2933600-6ecd-11ea-99a8-a1f412d28d9c.png)
![AC](https://user-images.githubusercontent.com/8144911/77526347-c45cf980-6ecd-11ea-8334-7ef514c9fc30.png)

## 機能

AtCoder の提出ページ `https://atcoder.jp/contests/****/submissions/me` が開かれた時にジャッジ待ちもしくはジャッジ中であった提出に対して、その結果が判明したタイミングで結果を通知します。
なお、結果が判明したタイミングで Chrome の当該タブ及びそのウィンドウがアクティブであった場合には通知しません。

通知をクリックすると、提出ページのタブがアクティブになります。

## マニュアルインストール

1. 必要なパッケージをインストールし、ビルドします。

```
$ yarn install
$ yarn build
```

2. 以下のガイドに従いインストールします。なお、拡張機能のフォルダとして 1 で生成された `dist` ディレクトリを指定します。

https://support.google.com/chrome/a/answer/2714278?hl=ja
