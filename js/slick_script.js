$("#main-slider").slick({
  //ここにオプション
  asNavFor: "#text-slider,#sub-slider", //追加（テキストスライダーを追従させる
  autoplay: true, //追加（自動再生
  autoplaySpeed: 6000,
  // ふわっと表示
  fade: true,
  // ホバー時も自動に変化する
  pauseOnHover: false,
  // 2秒かけて変化する
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$("#sub-slider").slick({
  //ここにオプション
  asNavFor: "#main-slider,#text-slider", //追加（テキストスライダーを追従させる
  autoplay: true, //追加（自動再生
  autoplaySpeed: 6000,
  // ホバー時も自動に変化する
  pauseOnHover: false,
  // 2秒かけて変化する
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
});
$("#text-slider").slick({
  //ここにオプション
  asNavFor: "#main-slider,#sub-slider", //追加（テキストスライダーを追従させる
  draggable: false, //追加（ドラッグでのスライド禁止
  arrows: false, //追加（矢印非表示
  // ふわっと表示
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
