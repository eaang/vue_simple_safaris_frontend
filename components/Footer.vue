<template>
  <div class="footer py-16">
    <div class="container px-8 mx-auto grid grid-flow-row grid-cols-1 xl:grid-cols-6 gap-4">
      <!-- Footer Logo -->
      <div class="hidden xl:block">
        <a href="/">
          <div class="logo-text text-xl menu-title">SIMPLE SAFARIS</div>
        </a>
      </div>

      <!-- Menu Section -->
      <div class="menu-section hidden xl:block">
        <div class="menu-title menu-header">
          <a href="/about">About</a>
        </div>
        <div class="menu-items">
          <div class="menu-item"><a href="#">About us</a></div>
          <div class="menu-item"><a href="#">개인정보처리방침</a></div>
          <div class="menu-item"><a href="#">해외여행약관</a></div>
        </div>
      </div>

      <!-- Menu Section -->
      <div class="menu-section hidden xl:block">
        <div class="menu-title menu-header">
          Trip Style
        </div>
        <div class="menu-items">
          <div class="menu-item"><a href="#">Taste of Africa</a></div>
          <div class="menu-item"><a href="#">East Africa Paradise</a></div>
          <div class="menu-item"><a href="#">Safari Lover</a></div>
        </div>
      </div>

      <!-- Menu Section -->
      <div class="menu-section hidden xl:block">
        <div class="menu-title menu-header">
          Destination
        </div>
        <div class="menu-items">
          <div class="menu-item"><a href="#">탄자니아</a></div>
          <div class="menu-item"><a href="#">케냐</a></div>
          <div class="menu-item"><a href="#">보츠와나</a></div>
          <div class="menu-item"><a href="#">남아프리카 공화국</a></div>
          <div class="menu-item"><a href="#">나미비아</a></div>
        </div>
      </div>

      <!-- Menu Section -->
      <div class="menu-section">
        <div class="menu-title menu-header">
          Contact
        </div>
        <div class="menu-items">
          <div class="menu-item">070-4517-0225</div>
          <div class="menu-item">jin@simplesafaris.com</div>
        </div>
      </div>

      <!-- Menu Section -->
      <div class="menu-section">
        <div class="menu-title menu-header hidden xl:inline-block">
          Stay in touch
        </div>
        <div class="menu-items flex space-x-2">
          <div class="menu-item">
            <img src="@/assets/ic-instargram-ft.svg">
          </div>
          <div class="menu-item">
            <img src="@/assets/ic-blog-ft.svg">
          </div>
          <div class="menu-item">
            <img src="@/assets/ic-kakao.svg">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #1a1915;
}
.menu-title {
  color: #9c9780;
  @apply font-bold;
}
.menu-header {
  @apply text-lg mb-2;
}
.menu-item {
  color: rgba(156, 151, 128, 0.47);
  @apply my-1;
}
.menu-item a:hover {
  @apply underline;
}
</style>
