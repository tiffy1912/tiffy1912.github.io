$(document).ready(function () {
  $("#submenu").hide(); // 初始化隱藏

  $("#article-link").click(function (e) {
    e.preventDefault(); // 阻止默認跳轉
    $("#submenu").toggle(); // 切換顯示/隱藏
  });

  $(document).click(function (e) {
    // 如果點擊的不是子選單或 Article 鏈接，則隱藏
    if (!$(e.target).closest("#submenu, #article-link").length) {
      $("#submenu").hide();
    }
  });