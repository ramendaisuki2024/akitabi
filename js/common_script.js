// スクロール時の表示（一斉に）
ScrollReveal().reveal(".scroll", {
  origin: "bottom", //下からふわっと表示させる
  distance: "30px", //表示された時に要素を30px移動させる
  duration: 1300, //アニメーションの完了まで1.3秒。
  viewFactor: 0.3, //画面が表示エリアに対して0.3でアニメーションを開始
  easing: "ease",
});
// スクロール時の表示(順番に)
ScrollReveal().reveal(".target1", {
  delay: 100,
  origin: "bottom",
  distance: "30px",
  duration: 1300,
  easing: "ease",
});
ScrollReveal().reveal(".target2", {
  delay: 400,
  origin: "bottom",
  distance: "30px",
  duration: 1300,
  easing: "ease",
});
ScrollReveal().reveal(".target3", {
  delay: 600,
  origin: "bottom",
  distance: "30px",
  duration: 1300,
  easing: "ease",
});
//モバイルメニュー

//モバイルメニュー
/* Aパターン開始 */
// .hmenuをクリックした時
$(".hmenu").click(function () {
  // →navにスライドトグル
  $("nav").fadeToggle(500);
  // →$(this)にクラスcloseをトグル
  $(this).toggleClass("close");
});
/* Aパターンここまで */
