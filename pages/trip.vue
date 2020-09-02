<template>
  <div>
    <NavbarWhite />
    <!-- Carousel Here -->
    <div class="bg-local hero-pic h-screen/75 grid grid-flow-col grid-cols-1 grid-rows-3">
      <!-- Top Spacer Grid -->
      <div class="h-screen/75 text-white text-5xl text-center flex justify-center items-center">
          Taste of Tanzania
      </div>
      <!-- Carousel Navigation -->
      <CarouselBignav />
      <!-- Carousel Dots -->
      <CarouselDots :num-labels="2" />
    </div>

    <!-- Map Here -->
    <div class="">
      <!-- Map Itself -->
      <div class="container mx-auto mt-24 flex">
        <div class="map-container flex-1 h-screen/2 lg:h-screen/75">
          <img class="" src="@/assets/ic-pin.svg">
          <img class="" src="@/assets/ic-pin2.svg">
          <img class="" src="@/assets/ic-pin3.svg">
        </div>
        <!-- Map Buttons -->
        <div class="space-y-4 ml-4 mb-32 self-end">
          <div class="circle-icon">
            <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'angle-double-up']"/>
          </div>
          <div class="circle-icon">
            <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'comment-dots']"/>
          </div>
        </div>
      </div>
      <!-- Map Caption -->
      <div class="text-center text-light mt-8">
        추천일정 설명문구추가<br />
        추천일정 설명문구추가
      </div>
    </div>

    <!-- Schedule Highlights -->
    <div class="container mt-24 mb-16 mx-auto">
      <div class="text-center font-bold text-5xl">Schedule Highlights</div>
    </div>
    <!-- Card Container -->
    <div class="container mx-auto grid grid-flow-cols md:grid-cols-2 xl:grid-cols-4">
      <!-- Card 1 -->
      <div class="">
        <div class="card-pic">
          <img class="" src="@/assets/ic-sh-01.svg" />
        </div>
        <div class="">
          <div class="card-text text-light">
            4X4 차량을 타고 세렝게티에
            살고 있는 다양한 야생 동물을
            찾아보는 액티비티
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="">
        <div class="card-pic">
          <img class="" src="@/assets/ic-sh-02.svg" />
        </div>
        <div class="">
          <div class="card-text text-light">
            엄선된 럭셔리 숙소에서의
            편안한 휴식
          </div>
        </div>
      </div>

      
      <!-- Card 3 -->
      <div class="">
        <div class="card-pic">
          <img class="" src="@/assets/ic-sh-03.svg" />
        </div>
        <div class="">
          <div class="card-text text-light">
            하늘 위에서 세렝게티의 일출을
            바라보며 자연의 웅장함을
            느낄 수 있는 액티비티
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="">
        <div class="card-pic">
          <img class="" src="@/assets/ic-sh-04.svg" />
        </div>
        <div class="">
          <div class="card-text text-light">
            유네스코 세계 문화유산
            (UNESCO World Heritage)에
            등재되어 있는 스톤타운을 거닐며
            고풍적인 도시 관람
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .hero-pic {
    background: url('../assets/images/tanzania01.jpg') no-repeat center center / cover;
  }
  .map-container {
    background-color: #ececec;
  }
  .circle-icon {
    background-color: #897c66;
    @apply h-12 w-12 rounded-full flex justify-center items-center;
  }
  .text-light {
    color: #807f7d;
  }
  .card-text {
    @apply text-center px-8 py-2 h-32;
  }
  .card-pic {
    @apply flex justify-center h-32;
  }
  .card-pic img {
    @apply object-contain;
  }
</style>