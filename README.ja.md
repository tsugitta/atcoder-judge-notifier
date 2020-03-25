# AtCoder judge notifier

[English](README.md)

AtCoder における提出のジャッジ結果を通知する Chrome 拡張機能です。

[インストール](https://chrome.google.com/webstore/detail/atcoder-judge-notifier/hcjjfcidaloadjcemebolmdphhbpehba)

![TLE](https://user-images.githubusercontent.com/8144911/77526337-c2933600-6ecd-11ea-99a8-a1f412d28d9c.png)
![AC](https://user-images.githubusercontent.com/8144911/77526347-c45cf980-6ecd-11ea-8334-7ef514c9fc30.png)

## 機能

以下の全ての条件が満たされる場合にジャッジ結果の通知を音と共に表示します。

- 提出ページ `https://atcoder.jp/contests/****/submissions/me` が開かれ、その時ページ中にジャッジ待ちもしくはジャッジ中の提出があった。
- ジャッジの途中もしくはジャッジを終えて結果が表示され、その時提出ページのタブもしくはウィンドウがアクティブでなかった。

通知をクリックすると、提出ページのタブがアクティブになります。

## マニュアルインストール

1. 必要なパッケージをインストールし、ビルドします。

```
$ yarn install
$ yarn build
```

2. 以下のガイドに従いインストールします。なお、拡張機能のフォルダとして 1 で生成された `dist` ディレクトリを指定します。

https://support.google.com/chrome/a/answer/2714278?hl=ja
