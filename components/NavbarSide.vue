<template>
  <div class="navbar-side flex flex-col justify-between h-screen w-5/6 z-50 pl-8 py-8 block overflow-auto lg:hidden">
    <div>
      <!-- Close Button -->
      <div class="navbar-side-close flex justify-end">
        <img class="pr-8" src="@/assets/btn-closed.svg">
      </div>

      <!-- Links to Pages -->
      <div class="navbar-side-links">
        <div class="navbar-side-link">
          <a href="#">Home</a>
        </div>
        <div class="navbar-side-link">
          <a href="#">About</a>
          <div class="navbar-side-expand pr-8"><img src="@/assets/btn-add.svg"></div>
          <div class="navbar-side-collapse hidden pr-8"><img src="@/assets/btn-minus.svg"></div>
        </div>
        <div class="navbar-side-link">
          <a href="#">Destinations</a>
          <div class="navbar-side-expand hidden pr-8"><img src="@/assets/btn-add.svg"></div>
          <div class="navbar-side-collapse pr-8"><img src="@/assets/btn-minus.svg"></div>
        </div>

        <!-- Dropdown Options -->
        <NavbarSideDropdown />

        <div class="navbar-side-link">
          <a href="/trip">Trip Ideas</a>
          <div class="navbar-side-expand pr-8"><img src="@/assets/btn-add.svg"></div>
          <div class="navbar-side-collapse hidden pr-8"><img src="@/assets/btn-minus.svg"></div>
        </div>
        <div class="navbar-side-link">
          <a href="#">Blog</a>
        </div>
        <div class="navbar-side-link">
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div class="navbar-side-bottom space-y-4 mt-8 pb-8">
      <div class="navbar-side-social-media flex space-x-2">
        <div class="navbar-side-social-media-icon">
          <img src="@/assets/ic-instargram-ft.svg">
        </div>
        <div class="navbar-side-social-media-icon">
          <img src="@/assets/ic-blog-ft.svg">
        </div>
        <div class="navbar-side-social-media-icon">
          <img src="@/assets/ic-kakao.svg">
        </div>
      </div>
      <div class="navbar-side-contact flex space-x-2 font-bold text-lg">
        <div><font-awesome-icon class="text-2xl mr-2" :icon="['fas', 'phone']"/></div>
        <div>070-4517-0225</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-side {
  background-color: #1a1915;
}
.navbar-side-contact {
  color: #9c9780;
}
.navbar-side-link {
  color: #9c9780;
  border-bottom: 1px solid rgba(156, 151, 128, .3);
  @apply font-bold text-3xl py-2 border-b flex justify-between items-center;
}
.navbar-side-link a:hover {
  @apply underline;
}
</style>