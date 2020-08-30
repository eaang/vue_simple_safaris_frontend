<template>
  <!-- Card Container -->
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">

    <!-- Selected Card -->
    <div class="card card-selected">
      <div class="card-image">
        <div class="card-selected-sign absolute inset-0 absolute z-50">
          +
        </div>
        <img class="" src="@/assets/images/trip1.png" />
      </div>

      <div class="card-body">
        <div class="card-title">Taste of Africa</div>
        <div class="card-text">
          <div class="card-description">부가설명 부가설명 부가설명 부가설명 부가설명 부가설명 부가설명</div>
          <div class="card-options">
            <div class="card-options-title">Course 예상 가격</div>
            <div class="card-description">
              <div>3-5 Days $1,004.60</div>
              <div>7-10 Days $1,004.60</div>
            </div>
          </div>
          <div class="card-end">
            <span class="pr-4 text-xs">more</span>
            <img class="object-contain" src="@/assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Normal Card -->
    <div class="card">
      <div class="card-image">
        <img class="" src="@/assets/images/trip2.png" />
      </div>

      <div class="card-body">
        <div class="card-title">East Africa Paradise</div>
        <div class="card-text">
          <div class="card-description">부가설명 부가설명 부가설명 부가설명 부가설명 부가설명 부가설명</div>
          <div class="card-options">
            <div class="card-options-title">Course 예상 가격</div>
            <div class="card-description">
              <div>3-5 Days $1,004.60</div>
              <div>7-10 Days $1,004.60</div>
            </div>
          </div>
          <div class="card-end">
            <span class="pr-4 text-xs">more</span>
            <img class="object-contain" src="@/assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Normal Card -->
    <div class="card">
      <div class="card-image">
        <img class="" src="@/assets/images/trip3.png" />
      </div>

      <div class="card-body">
        <div class="card-title">Safari Lover</div>
        <div class="card-text">
          <div class="card-description">부가설명 부가설명 부가설명 부가설명 부가설명 부가설명 부가설명</div>
          <div class="card-options">
            <div class="card-options-title">Course 예상 가격</div>
            <div class="card-description">
              <div>3-5 Days $1,004.60</div>
              <div>7-10 Days $1,004.60</div>
            </div>
          </div>
          <div class="card-end">
            <span class="pr-4 text-xs">more</span>
            <img class="object-contain" src="@/assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Normal Card -->
    <div class="card">
      <div class="card-image">
        <img class="" src="@/assets/images/trip4.png" />
      </div>

      <div class="card-body">
        <div class="card-title">Vacation</div>
        <div class="card-text">
          <div class="card-description">부가설명 부가설명 부가설명 부가설명 부가설명 부가설명 부가설명</div>
          <div class="card-options">
            <div class="card-options-title">Course 예상 가격</div>
            <div class="card-description">
              <div>3-5 Days $1,004.60</div>
              <div>7-10 Days $1,004.60</div>
            </div>
          </div>
          <div class="card-end">
            <span class="pr-4 text-xs">more</span>
            <img class="object-contain" src="@/assets/more.svg" />
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Buttons on Mobile -->
    <CarouselButtons class="hidden " :num-labels="4" />

  <!-- End of Card Container -->
  </div>
</template>

<style scoped>
.card {
  @apply bg-white shadow-xl;
}
.card-image {
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
  @apply font-bold text-2xl;
}
.card-description {
  @apply text-sm;
}
.card-options-title {
  @apply font-bold text-xl mt-4;
}
.card-end {
  @apply flex justify-center mt-4;
}
</style>