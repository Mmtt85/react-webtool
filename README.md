# web-tool
## Frontend web server
> 下記の環境設定完了後、localhost:8080にアクセスし、右上のログインアイコンを押下
>
> admin / admin もしくわ user1 / user1 もしくわ user2 / user2でログリン
>
> 現在、Pythonサーバーの構築は必要なし

### Environment
```
・node.js (10.16.3)
・react.js (parcel)
・typescript
・apollo-graphql
・immutable
・redux / redux-saga
・react-bootstrap
```
### Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn dev
```
### Compiles and minifies for production
```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Run your unit tests
```
yarn test:unit
```

## Backend Server setup
### Environment
```
・Python3
・SQLAlchemy (ORM)
・graphene_sqlalchemy (apollo-graphql)
・Flask
・Flask-GraphQL
・flask-cors
・...
```
### Project setup
```
cd server
pip install virtualenv
virtualenv venv
source ./venv/Scripts/activate
(env) pip install -r requirements.txt
```
### Server run
```
flask run
```
### deactivate 
```
deactivate
```

## 開発環境

## 説明
```
社内や団体で共通的に必要な各種ツールを
ネットですぐ使える・見えるようにする。
```
## 要件定義：会員管理
```
・ログインプロセス
　→ 会員登録
　→ 会員ログイン
・会員情報見る
　→ 写真・名前・フリガな・内線・email
・座席表
　→ 座席配置図作成
　→ 座席配置図に基づいた各会員の座席を表示
　→ 各会員の座席管理
　→ 座席押下時、会員情報を表示
・アンケート
　→ 匿名投稿可
　→ 投稿機関設定
　→ いいね
　→ 結果エキスポート
```
## 要件定義：各種ツール
```
・文字列変換
　→ base64
　→ 臨時パスワード生成（桁数指定・小文字、大文字、数字、記号含む）
・json parser  
　→ http://json.parser.online.fr
```
