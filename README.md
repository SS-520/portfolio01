# portfolio01
ポートフォリオ用アプリ

## 概要

- お買い物リスト
- 一人用ではなく、複数人分をまとめて購入する前提
  - 誰が何を何個購入希望かをそれぞれ任意のタイミングで確認できる
  - 誰の総額が何円になるか任意のタイミングで確認できる
  - 全員分の買い物をすると総額何円になるか常に確認できる
- イベント会場での会計管理などでの使用を想定→想定メインの環境はスマートフォン
- 普段はスプレッドシートで管理しているものをwebアプリとして作成を試みる
- 対象とするイベントは2020年に開催された[うたの☆プリンスさまっ♪ All-Star Shop](https://www.utapri.com/allstarshop/)
  - アイテムのバリエーションとなるキャラクター数が一番多いため選出

## 画面

### イメージ図

- <a href="[URL](https://www.figma.com/proto/kMeZXP4Le6tEgsu4irMmKe/%E3%81%8A%E4%BD%BF%E3%81%84%E3%83%AA%E3%82%B9%E3%83%88?type=design&node-id=27-299&t=ocmVMsSHyGoJUkCI-1&scaling=scale-down&page-id=0%3A1&mode=design)" target="_blank" rel="noopener noreferrer">リンク</a>（figmaで簡易作成）

### 構成
1. メニュー画面
   1. 管理画面
      1. イベント登録画面（DB連携があるため製作優先度低）
      2. 商品登録画面（DB連携があるため製作優先度低）
   2. ユーザー画面（ユーザー公開されるTOP画面はここ）
      1. イベントリスト
         1. お使いリスト
            1. イベント現地での購入結果記入表
                - 完売・現地での追加購入などが発生するためあると便利

## 機能

### メニュー画面

- メニュー表示
- 画面遷移

### 管理画面

- メニュー表示
- 画面遷移

### ユーザー画面（イベントリスト）

- 開催年度別イベント一覧表示
- イベントごとのお使いリストへの遷移

### お使いリスト

- アイテム表示
  - 金額
  - 購入上限数
  - 販売開始日
  - 種類別個数の入力
  - リセットボタン（ランダム商品）
  - 上限ボタン（ランダム商品）