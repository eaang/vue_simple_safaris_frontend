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
      <div class="container mx-auto mt-24 lg:flex">
        <div class="map-container flex-1 h-screen/2 lg:h-screen/75">
          <img class="" src="@/assets/ic-pin.svg">
          <img class="" src="@/assets/ic-pin2.svg">
          <img class="" src="@/assets/ic-pin3.svg">
        </div>
        <!-- Map Buttons -->
        <div class="space-x-4 lg:space-x-0 lg:space-y-4 mt-4 ml-4 lg:mb-32 self-end flex justify-center lg:block">
          <div class="circle-icon background-light">
            <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'angle-double-up']"/>
          </div>
          <div class="circle-icon background-light">
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
    <div class="container my-16 mx-auto">
      <div class="text-center font-bold text-5xl">Schedule Highlights</div>
    </div>
    <!-- Card Container -->
    <div class="container mx-auto grid grid-flow-cols md:grid-cols-2 xl:grid-cols-4 mb-24">
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
    <!-- End of card container -->
    </div>

    <!-- Daily Schedule -->
    <div class="container mx-auto flex space-x-16 mb-24">
      <!-- Main Section -->
      <div class="w-full xl:w-2/3 px-8">

        <!-- Day Card -->
        <div class="shadow-xl mb-8">
          <div class="day-title background-light">Day 1</div>
          <div class="day-place">Arusha</div>
        </div>

        <!-- Info Section -->
        <div class="space-y-8 mb-32">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <div>
            <div class="day-description-title text-dark-brown">Arusha</div>
            <div class="day-description">
              아루샤는 킬리만자 신과 메루산이 보이는 탄자니아 사파리 여행의 
              베이스캠프와 같은 곳입니다. 장시간 국제선 비행으로 지친 몸을 
              편안하게 쉴 수 있는 휴식 시간을 가지 수 있습니다.
            </div>
          </div>
        </div>

        <!-- Day Card -->
        <div class="shadow-xl mb-8">
          <div class="day-title background-light">Day 2~3</div>
          <div class="day-place">Serengeti National Park</div>
        </div>

        <!-- Info Section -->
        <div class="space-y-8">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <div>
            <div class="day-description-title text-dark-brown">Serengeti National Park</div>
            <div class="day-description">
              상상하지 못할 정도로 다양한 야생동물이 살고 있는 끝없는 평야, 세렝게티! 
              수백만 마리의 누떼 (Wildebeest)의 대이동( The Great Migration)하는 
              장관을 구경할 수 있습니다. 
            </div>
          </div>
        </div>

        <!-- Transport Box -->
        <div class="transportation-box my-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Transportation</span>
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>
          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            <div class="transport-content space-y-8 mx-auto">
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'plane']"/>
                </div>
                Arusha to Serengeti
              </div>
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'car']"/>
                </div>
                Seregenti to 숙소         
              </div>
            </div>
          </div>
        </div>

        <!-- Staying Box -->
        <div class="my-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Stay</span>
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>
          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            
            <div class="flex justify-between items-center">
              <!-- Left Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-right-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-left']"/>
              </div>
              <!-- Hotel Card -->
              <div class="w-4/5 md:w-1/2 mx-auto shadow-xl">
                <div class="">
                  <img class="object-contain" src="https://picsum.photos/800/600">
                </div>
                <div class="flex flex-col justify-center items-center p-8 space-y-8">
                  <div class="text-dark-brown text-3xl">Sigita Sasakwa Lodge</div>
                  <div class="text-brown font-bold text-3xl">$$$$$</div>
                  <div class="text-brown flex justify-center">
                    <span class="pr-4 text-xs">more</span>
                    <img class="object-contain" src="@/assets/more.svg" />
                  </div>
                </div>
              </div>
              <!-- Right Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-left-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-right']"/>
              </div>
            </div>

            <!-- Carousel Dots -->
            <CarouselDotsBrown class="mt-8" :num-labels="2" />

          </div>
        </div>

        <!-- Activity Box -->
        <div class="mt-24 mb-8">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Activity</span>
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>
          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            <div class="space-y-8 w-1/3 mx-auto">
              <div class="text-dark text-xl text-center">
                 열기구 탑승 
              </div>
            </div>
          </div>
        </div>
        
        <!-- Info Section -->
        <div class="space-y-8">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <div>
            <div class="day-description">
              설명문구 추가설명문구 추가설명문구 추가설명문구 추가설명문구 추가 
              설명문구 추가설명문구 추가
            </div>
          </div>
        </div>

        <!-- Day Card -->
        <div class="shadow-xl mt-32 mb-8">
          <div class="day-title background-light">Day 4~5</div>
          <div class="day-place">Zanzibar Stonetown</div>
        </div>

        <!-- Info Section -->
        <div class="space-y-8">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <div>
            <div class="day-description-title text-dark-brown">Zanzibar Stonetown</div>
            <div class="day-description">
              옛 건물들이 잘 보존된 고풍스러운 도시, 잔지바르의 스톤타운을 구경하는 
              시간입니다. 좁고 구불구불한 미로와 같은 골목길을 거닐며, 이슬람의 정취가 
              물씬 풍기는 스톤타운을 마음껏 즐길 수 있습니다.
            </div>
          </div>
        </div>
        <!-- Transport Box -->
        <div class="transportation-box my-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Transportation</span>
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>

          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            <div class="transport-content space-y-8 mx-auto">
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'plane']"/>
                </div>
                Seregenti to Stonetown
              </div>
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'car']"/>
                </div>
                Zanzibar Airport to Stonetown
              </div>
            </div>
          </div>
        </div>

        <!-- Staying Box -->
        <div class="my-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Stay</span>
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>
          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            
            <div class="flex justify-between items-center">
              <!-- Left Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-right-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-left']"/>
              </div>
              <!-- Hotel Card -->
              <div class="w-4/5 md:w-1/2 w-1/2 mx-auto shadow-xl">
                <div class="">
                  <img class="object-contain" src="https://picsum.photos/800/600">
                </div>
                <div class="flex flex-col justify-center items-center p-8 space-y-8">
                  <div class="text-dark-brown text-3xl">Park Hyatt Zanzibar</div>
                  <div class="text-brown text-3xl"><span class="font-bold">$$$</span>$$</div>
                  <div class="text-brown flex justify-center">
                    <span class="pr-4 text-xs">more</span>
                    <img class="object-contain" src="@/assets/more.svg" />
                  </div>
                </div>
              </div>
              <!-- Right Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-left-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-right']"/>
              </div>
            </div>

            <!-- Carousel Dots -->
            <CarouselDotsBrown class="mt-8" :num-labels="2" />

          </div>
        </div>

        <!-- Day Card -->
        <div class="shadow-xl mt-32 mb-8">
          <div class="day-title background-light">Day 6~8</div>
          <div class="day-place">Zanzibar Nungwi</div>
        </div>

        <!-- Info Section -->
        <div class="space-y-8">
          <img class="object-cover" src="https://picsum.photos/1280/760">
          <div>
            <div class="day-description-title text-dark-brown">Zanzibar Nungwi</div>
            <div class="day-description">
              잔지바르 동쪽에 위치한 능위는 아름다운 바다색을 가지고 있기로 유명한 지역입니다. 
              스노쿨링와 스쿠버다이빙 등 다양한 해양 레포츠도 즐길 수 있으며, 럭셔리 리조트에서 
              편안한 휴식시간을 가질 수도 있습니다.
            </div>
          </div>
        </div>
        <!-- Transport Box -->
        <div class="transportation-box my-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Transportation</span>
            <div class="grid grid-rows-2 w-1/3">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>

          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            <div class="transport-content space-y-8 mx-auto">
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'car']"/>
                </div>
                Nungwi to Zanzibar Airport
              </div>
              <div class="text-dark text-xl flex justify-center">
                <div class="w-10">
                  <font-awesome-icon class="text-brown text-2xl" :icon="['fas', 'car']"/>
                </div>
                Stonetown to Nungwi
              </div>
            </div>
          </div>
        </div>

        <!-- Staying Box -->
        <div class="mt-24">
          <div class="text-center text-3xl font-bold text-dark flex justify-between">
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-left-border"></div>
            </div>
            <span class="bg-white px-8 top-title">Stay</span>
            <div class="grid grid-rows-2 w-2/5">
              <div class=""></div>
              <div class="brown-top-border-big brown-right-border"></div>
            </div>
          </div>
          <!-- Text Container -->
          <div class="w-100 py-12 brown-bottom-border brown-right-border brown-left-border">
            
            <div class="flex justify-between items-center">
              <!-- Left Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-right-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-left']"/>
              </div>
              <!-- Hotel Card -->
              <div class="w-4/5 md:w-1/2 w-1/2 mx-auto shadow-xl">
                <div class="">
                  <img class="object-contain" src="https://picsum.photos/800/600">
                </div>
                <div class="flex flex-col justify-center items-center p-8 space-y-8">
                  <div class="text-dark-brown text-3xl">Park Hyatt Zanzibar</div>
                  <div class="text-brown text-3xl"><span class="font-bold">$$$</span>$$</div>
                  <div class="text-brown flex justify-center">
                    <span class="pr-4 text-xs">more</span>
                    <img class="object-contain" src="@/assets/more.svg" />
                  </div>
                </div>
              </div>
              <!-- Right Nav -->
              <div class="hidden md:block w-12 h-24 brown-top-border brown-left-border brown-bottom-border flex justify-center items-center">
                <font-awesome-icon class="text-brown text-4xl" :icon="['fas', 'chevron-right']"/>
              </div>
            </div>

            <!-- Carousel Dots -->
            <CarouselDotsBrown class="mt-8" :num-labels="2" />

          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div class="hidden xl:block h-64 w-1/3 space-y-2">
        <div class="selected-item-outer background-pale">
          <div class="selected-item-inner background-dark text-white text-lg font-bold">Day 1: Arusha</div>
        </div>
        <div class="summary-item background-pale">
          <div class="text-dark text-lg">Day 2~3: Serengeti National Park</div>
        </div>
        <div class="summary-item background-pale">
          <div class="text-dark text-lg">Day 4~5: Zanzibar Stonetown</div>
        </div>
        <div class="summary-item background-pale">
          <div class="text-dark text-lg">Day 6~8 장소 : Zanzibar Nungwi</div>
        </div>
        <div class="summary-item background-pale italic">
          <div class="text-dark text-lg italics">$300만원 부터 시작</div>
        </div>
        <!-- Button -->
        <div class="">
          <div class="text-white text-center text-xl background-dark py-4 rounded-lg">
            여행 문의하기 <font-awesome-icon class="text-white" :icon="['fas', 'angle-right']"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .brown-top-border-big {
    border-top: 2px solid #bbb599;
  }
  .brown-top-border {
    border-top: 1px solid #bbb599;
  }
  .brown-left-border {
    border-left: 1px solid #bbb599;
  }
  .brown-right-border {
    border-right: 1px solid #bbb599;
  }
  .brown-bottom-border {
    border-bottom: 1px solid #bbb599;
  }
  .hero-pic {
    background: url('../assets/images/tanzania01.jpg') no-repeat center center / cover;
  }
  .map-container {
    background-color: #ececec;
  }
  .circle-icon {
    @apply h-12 w-12 rounded-full flex justify-center items-center;
  }
  .text-light {
    color: #807f7d;
  }
  .text-dark {
    color: #1a1915;
  }
  .text-brown {
    color: #9c9780;
  }
  .text-dark-brown {
    color: #575446;
  }
  .background-dark {
    background-color: #646152;
  }
  .background-light {
    background-color: #9c9780;
  }
  .background-pale {
    background-color: #ECEAE4;
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
  .summary-item {
    @apply py-3 pl-6;
  }
  .selected-item-inner {
    @apply py-3 pl-6 ml-1;
  }
  .selected-item-outer {
    background-color: #bbb599;
  }
  .day-title {
    @apply text-white font-bold text-xl py-3 flex justify-center items-center;
  }
  .day-place {
    @apply text-xl py-6 flex justify-center items-center;
  }
  .day-description-title {
    @apply text-2xl my-8;
  }
  .day-description {
    color: #9c9780;
    @apply text-lg;
  }
</style>