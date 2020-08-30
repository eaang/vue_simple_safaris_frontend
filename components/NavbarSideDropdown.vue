<template>
  <div class="navbar-side-dropdown">
    <div class="navbar-side-dropdown-options">
      <div class="navbar-side-dropdown-item navbar-border-right">아프리카</div>
      <div class="navbar-side-dropdown-item">아시아</div>
    </div>
    <div class="navbar-side-dropdown-choices grid grid-flow-rows sm:grid-flow-col sm:grid-rows-3">
      <div class="navbar-side-choices-items">케냐</div>
      <div class="navbar-side-choices-items">보츠와나</div>
      <div class="navbar-side-choices-items">나미비아</div>
      <div class="navbar-side-choices-items">탄자니아</div>
      <div class="navbar-side-choices-items">남아프리카 공화국</div>
    </div>
  </div>
</template>

<style scoped>
.navbar-side-dropdown-options {
  @apply grid grid-cols-2;
}
.navbar-side-dropdown-item {
  color: #9c9780;
  @apply text-2xl text-center py-4;
}
.navbar-border-right {
  color: white;
  border-right: 1px solid rgba(156, 151, 128, .3);
}
.navbar-side-dropdown-choices {
  background-color: rgba(156, 151, 128, 0.14);
  @apply text-2xl text-white px-16 py-8;
}
.navbar-side-choices-items {
  color: white;
  @apply py-2 mx-4;
}
</style>