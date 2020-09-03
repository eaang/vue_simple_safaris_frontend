<template>
  <div class="mt-24">
    <div class="text-5xl text-center title-dark font-bold px-8 my-8">
      Your Safari Consultants
    </div>

    <!-- Profile Section -->
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- Profile Card -->
      <div class="profile-card">
        <div class="flex justify-center">
          <img class="h-48 lg:h-64 object-contain" src="@/assets/images/john.png">
        </div>
        <div class="">
          <div class="profile-name text-xl lg:text-2xl title-dark">
            John Bio
          </div>
          <div class="profile-description text-lg lg:text-xl title-dark px-8 space-y-8">
            <div>
              미국 Northwestern University을 졸업한 뒤 스타트업과 컨설팅을 거쳐 심플사파리를 시작하게 되었습니다.
            </div>

            <div>
              홍콩에서 태어나 미국과 스페인에서 유학생활을 하며 사람들에게 기억에 남는 추억을 제공하는 일이 즐겁다는 
              것을 알게 되었습니다.
            </div>

            <div>
              이런 생각을 품고 한국에 돌아온 후, 우연히 저와 비슷한 생각을 가진 Jin을 만나 결혼을 하게 되었습니다. 
              결혼 후 다양한 곳 여행하던 도중 Jin이 오지로 여행을 가고 싶다고 말했습니다. 결국 저희 부부는 몇 개월에 
              준비 끝에 아프리카로 여행을 떠나게 되었습니다.
            </div>

            <div>
              그곳에서 제가 경험한 것은 말 그대로 지상 낙원이었습니다. 끝없는 평야와 그 안을 자유롭게 뛰어다니는 야생 
              동물들을 보며 꿈을 꾸는 것 같았습니다. 평생 잊을 수 없을 만큼 행복한 경험을 제게 선사했던 사파리 여행을 
              통해 저는 사파리 여행에 매력에 빠지게 되었습니다.
            </div>

            <div>
              심플사파리를 이용하는 모든 고객분들께 잊을 수 없는 감동을 남겨드리기 위해 최선을 다하겠습니다.
            </div>

          </div>
        </div>
      </div>

      <!-- Profile Card -->
      <div class="profile-card">
        <div class="flex justify-center">
          <img class="h-48 lg:h-64 object-contain" src="@/assets/images/jin.png">
        </div>
        <div class="">
          <div class="profile-name text-xl lg:text-2xl title-dark">
            Jin Bio
          </div>
          <div class="profile-description text-lg lg:text-xl title-dark px-8 space-y-8">
            <div>
              미국 New York University에서 공부하며, 여행을 떠나는 법, 맛있는 음식과 와인을 즐기는 법, 패션을 
              사랑하는 법을 배웠습니다. 
            </div>

            <div>
              한국에 돌아와 John 만나 결혼 후 더 열심히 맛집 찾아다니고 여행을 다녔습니다. 그러던 중 탄자니아를 
              다녀오게 되었고 사파리 여행에 매력에 빠져들어 John과 함께 심플사파리를 시작했습니다.
            </div>

            <div>
              제게 왜 사파리 여행이 왜 그리도 감동적이었는지 누군가가 물어본다면, 때묻지 않은 자연과 아프리카 
              사람들의 따뜻함 때문이라고 말하고 싶습니다. 아직도 제가 세렝게티에 도착한 첫 날 제 방에 놓여있었던 
              빨간 장미꽃 다발을 잊을 수 없습니다.
            </div>

            <div>
              심플사파리의 모든 고객이 저와 똑 같은 감동을 느낄 수 있도록 제가 돕고 싶습니다.
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.profile-name {
  @apply font-bold text-center p-4;
}
.profile-description {
  @apply text-justify;
}
</style>