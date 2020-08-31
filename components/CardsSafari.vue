<template>
  <div class="relative flex">
    <!-- Card Container -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

      <!-- Selected Card -->
      <div class="card-wrapper hidden md:flex">
        <div class="card card-selected">
          <div class="card-image">
            <div class="card-selected-sign absolute inset-0 absolute z-50">
              +
            </div>
            <img class="" src="" />
          </div>

          <div class="card-body">
            <div class="card-title">
              사파리 여행의 게임 드라이브<br />
              (Game Drive)에 꼭 알아야<br />
              할점 13가지 -5편-<br />
            </div>
            <div class="card-text">
              <div class="card-description">
                블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Normal Card -->
      <div class="card-wrapper flex">
        <div class="card">
          <div class="card-image">
            <img class="" src="" />
          </div>

          <div class="card-body">
            <div class="card-title">
              사파리 여행의 게임 드라이브<br />
              (Game Drive)에 꼭 알아야<br />
              할점 13가지 -5편-<br />
            </div>
            <div class="card-text">
              <div class="card-description">
                블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Normal Card -->
      <div class="card-wrapper hidden lg:flex">
        <div class="card">
          <div class="card-image">
            <img class="" src="" />
          </div>

          <div class="card-body">
            <div class="card-title">
              사파리 여행의 게임 드라이브<br />
              (Game Drive)에 꼭 알아야<br />
              할점 13가지 -5편-<br />
            </div>
            <div class="card-text">
              <div class="card-description">
                블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Normal Card -->
      <div class="card-wrapper hidden xl:flex">
        <div class="card">
          <div class="card-image">
            <img class="" src="" />
          </div>

          <div class="card-body">
            <div class="card-title">
              사파리 여행의 게임 드라이브<br />
              (Game Drive)에 꼭 알아야<br />
              할점 13가지 -5편-<br />
            </div>
            <div class="card-text">
              <div class="card-description">
                블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내 블로그내
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- End of Card Container -->
    </div>
    <div class="absolute inset-0 flex flex-1 flex-col justify-center xl:hidden">
      <CarouselNormalnav />
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  @apply w-full justify-center;
}
.card {
  width: 300px;
  @apply bg-white shadow-xl;
}
.card-image {
  background-color: #16222b;
  @apply relative z-40;
}
.card-image img {
  @apply h-48 w-full object-cover;
}
.card-selected {
  border: 4px solid #e4ddbb;
}
.card-selected-sign {
  color: #e4ddbb;
  @apply flex justify-center items-center text-6xl;
}
.card-body {
  color: #9c9780;
  @apply p-4 text-center flex flex-col justify-center;
}
.card-title {
  color: #575446;
  @apply font-bold text-xl;
}
.card-description {
  @apply text-sm my-4;
}
</style>