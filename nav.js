document.addEventListener("DOMContentLoaded", () => {
  const articleLink = document.getElementById("article-link");
  const submenu = document.getElementById("submenu");

  // 初始化子選單為隱藏
  submenu.style.display = "none";

  // 點擊事件切換顯示/隱藏
  articleLink.addEventListener("click", (event) => {
    event.preventDefault(); // 阻止預設行為
    submenu.style.display = submenu.style.display === "none" ? "block" : "none";
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
