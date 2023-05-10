# 注意

この README は、このソフトのマニュアルだけ先に書いたものです。実際にはまだ動かせないのでご注意ください。

# PrettifyPict

この Web アプリはイラスト等のギャラリーサイトを作るためのアプリです。

## 想定する利用者の技術レベル

- html, css を改変して自分の好みの Web ページを作ることができる
- Windows の場合はコマンドプロンプト、 Macintosh の場合はターミナルといった CUI によるパソコン操作がある程度できる
- localhost は自分のパソコンの中を示していることを理解できる
- Web サーバにファイルをアップロードできる

上記を全て満たすレベルの利用者を想定しています。

## 使い方

大まかな流れは以下のようになります。

1. ローカルで Angular (https://angular.jp) を立ち上げる
2. 設定ファイルなどを編集して絵を追加する
3. サイトを難読化された JavaScript などに変換（ビルドと呼びます）する
4. これを Web サーバ（CGI が使えないサーバでも大丈夫です）にアップロードする

### 事前準備

Docker (https://www.docker.com/) を事前にお使いのパソコンにインストールしておいてください。

### PrettifyPict のダウンロード

このページの右上にあるコードボタンから Download ZIP を選択してコードをダウンロードしてください。

それから、任意のフォルダでダウンロードした zip ファイルを解凍してください。

### Docker 上での Angular の起動

CUI ツール上で PrettifyPict を解凍したフォルダに移動します。

そこで、 `docker compose up -d` と入力してください。

必要なもののダウンロードに時間はかかりますが、コマンドが無事に実行できたら `http://localhost:4200/` にアクセスしてみてください。

サンプルのギャラリーが表示されていたら成功です。

### PrettifyPict に絵を追加する方法

PrettifyPict に絵を追加するには、以下のように設定を変更してください。

#### 最初の一回だけやればいい設定

`assets` の中に画像を格納するフォルダを作ります。名前はお好きな名前をお選びください。

そして、`app/config.ts` を書き直してください。

```ts
export const CONFIGURE = {
  siteTitle: 'Gallery by PrettifyPict',   // 自分のサイトのタイトルに書き換える
  imageFolder: 'testImages'               // assets の下の画像を格納するフォルダの名前にする
}
```

#### 絵を追加する度に行う設定

先ほど作ったフォルダの中に、画像ファイルをサムネイルとフルサイズの両方を入れてください。サムネイルもフルサイズも英数字と_ （半角アンダースコア）か-（半角ハイフン）のみ名前の部分に書き、画像にあった拡張子をつけたものにして下さい。

サムネイルの推奨サイズは、300 x 300 pixel です。

それから、`app/pictures.ts` を書き直してください。

```ts
export const PICTURES = [
  {
    pictureTitle: '私の初めての作品',          // 作品のタイトルを書く（日本語可）
    pictureCategorySlug: 'original',        // 作品のカテゴリー識別用の文字列（大文字不可）
    picturePath: '',                        // 通常は空欄でいい
    pictureName: 'this_your_first_pict',    // 表示したい作品のファイル名を書く
    pictureExtension: 'jpg',                // 表示したい作品の拡張子を書く
    thumbnailPath: '',                      // 通常は空欄でいい
    thumbnailName: 'this_your_first_thumb', // サムネイルのファイル名を書く
    thumbnailExtension: 'png',              // サムネイルの拡張子を書く
    slug: 'first_picture',                  // URLにしたい文字列を書く（大文字不可）
    description: `ここに作品の説明を書きます。
      必要がなければバッククオートを二つ残して空文字にしておいて下さい。`
  },
  {
    // 作品の数が増えるごとに、{} を増やしてその中に必要な情報を書いていって下さい。
    // また、{} と {} の間にはカンマを忘れないようにして下さい。
    // また、slug, pictureName, thumbnailNameは他の {} の中の同名の設定と被らないようにして下さい。
    // 以下略
  }
]
```

これで `http://localhost:4200` にアクセスしてみると、PrettifyPict の絵が自分の絵に差し代わっているはずです。

### PrettifyPict のカスタマイズ

html, css を改変してどうぞ。

改変した結果は `http://localhost:4200/` にて確認できます。

（後日もっと詳しく書く）

### PrettifyPict のビルド

以下のコマンドを打ちます。

`docker compose run --rm angular ng build`

そうすると、難読化されたサイトのソースコードなどが `dist` フォルダに出力されます。

### Docker 上での Angular の終了

CUI　ツール上で、 `docker compose down` と入力してください。

このコマンドを打つことで Angular が終了します。

Angular が終了したあとは `http://localhost:4200/` のサイトにはアクセスできなくなりますのでご注意ください。

### サーバへのアップロード

あとはご自分で契約された Web サーバに `dist` フォルダの中身をアップロードしてください。
CGI が使えない Web サーバでも問題ありません。
