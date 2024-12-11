// メインビジュアルを複数枚表示
$(".bgswitcher").bgswitcher({
  images: ["img/toppage/mainvisual1.webp", "img/toppage/mainvisual2.webp", "img/toppage/mainvisual3.webp", "img/toppage/mainvisual4.webp"],
  interval: 6000, // 背景画像を切り替える間隔を指定 3000=3秒
  loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
  shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
  effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
  duration: 2000, // エフェクトの時間を指定します。
  easing: "linear", // エフェクトのイージングをlinear,swingから指定
});
