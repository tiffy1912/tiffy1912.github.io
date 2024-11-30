$(document).ready(function () {
  // 點擊 Article 顯示/隱藏 submenu
  $("#article-link").on("click", function (e) {
    e.preventDefault(); // 阻止 href="#" 的預設行為
    $("#submenu").toggle(); // 切換 submenu 顯示狀態
  });

  // 確保點擊子選單不會關閉
  $("#submenu a").on("click", function (e) {
    e.stopPropagation(); // 阻止事件冒泡
  });

  // 預設顯示「定義」的內容
  $(".definition_content").addClass("active");

  // 當點擊不同的連結時
  $(".nav_button a").click(function (e) {
    e.preventDefault(); // 防止默認的跳轉行為

    // 移除所有內容的 'active' 類
    $(".content_section div").removeClass("active");

    // 根據點擊的連結，顯示對應的內容
    if ($(this).hasClass("definition")) {
      $(".definition_content").addClass("active");
    } else if ($(this).hasClass("characteristic")) {
      $(".characteristic_content").addClass("active");
    } else if ($(this).hasClass("context")) {
      $(".context_content").addClass("active");
    }
  });
});
