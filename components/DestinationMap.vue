<template>
  <div class="pb-24">

    <!-- Section Title -->
    <div class="font-bold title-dark text-5xl text-center py-24 xl:py-0 xl:pb-24">
      Destinations
    </div>

    <div class="container mx-auto grid grid-flow-row xl:grid-flow-col xl:grid-cols-2">
      <!-- Country Selection -->
      <div class="mx-8 grid grid-flow-row xl:grid-flow-col">
        <!-- Countries -->
        <div>
          <ul class="grid grid-flow-col xl:grid-flow-row">
            <li class="picker picker-bold">
              아프리카 (Africa)
              <!-- Dropdown or Dropright icon -->
              <div class="ml-4">
                <span class="hidden xl:block"><font-awesome-icon :icon="['fas', 'angle-right']"/></span>
                <span class="block xl:hidden"><font-awesome-icon :icon="['fas', 'angle-down']"/></span>
              </div>
            </li>
            <li class="picker picker-plain">아시아 (Asia)</li>
          </ul>
        </div>
        <!-- Destinations -->
        <div>
          <ul>
            <li class="picker picker-bold">
              케냐 (Kenya)
              <!-- Dropdown or Dropright icon -->
              <div class="ml-4">
                <span class="hidden xl:block"><font-awesome-icon :icon="['fas', 'angle-right']"/></span>
              </div>
            </li>
            <li class="picker picker-plain">탄자니아 (Tanzania)</li>
            <li class="picker picker-plain">보츠와나 (Botswana)</li>
            <li class="picker picker-plain">남아프리카 공화국 (South Africa)</li>
            <li class="picker picker-plain">나미비아 (Namibia)</li>
          </ul>
        </div>
      </div>

      <!-- Map -->
      <div class="flex justify-center xl:justify-end">
        <img class="h-screen/75 object-contain" src="@/assets/images/map-africa.png" />
      </div>
    </div>

  </div>
</template>

<style>
.picker {
  @apply text-2xl pb-4;
}
.picker-bold {
  color: #1a1915;
  @apply font-bold flex;
}
.picker-plain {
  color: #aea88e;
}
.picker-plain:hover {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #aea88e; 
}
</style>