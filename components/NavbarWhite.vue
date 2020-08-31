<template>
  <nav class="bg-white py-2 absolute w-full z-30">
    <div class="container mx-auto flex justify-between">
      <!-- Left Side of Navbar -->
      <div class="flex flex-1 items-center">
        <!-- Hamburger Icon -->
        <div class="block lg:hidden menu-icon navbar-dark-text text-3xl ml-4 w-4 sm:w-24">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </div>
        <!-- Logo -->
        <div class="logo flex flex-1 lg:flex-none items-center justify-around lg:mr-8">
          <a href="/">
            <div class="logo-text text-2xl navbar-brown-text">SIMPLE SAFARIS</div>
          </a>
        </div>
        <!-- Spacer to centre logo on mobile screens -->
        <div class="w-8 sm:hidden"></div>
        <!-- Menu Links -->
        <ul class="hidden lg:flex items-center font-bold">
          <li class="mr-8">
            <a class="navbar-dark-text hover:text-gray-400" href="/about">About</a>
            <DropdownMenu class="mt-1" />
          </li>
          <li class="mr-8">
            <a class="navbar-dark-text hover:text-gray-400" href="#">Destinations</a>
          </li>
          <li class="mr-8">
            <a class="navbar-dark-text hover:text-gray-400" href="#">Trip Ideas</a>
          </li>
          <li class="mr-8">
            <a class="navbar-dark-text hover:text-gray-400" href="#">Blog</a>
          </li>
          <li>
            <a
              class="border border-gray-100 font-bold navbar-dark-text hover:bg-white hover:text-black px-4 py-2 rounded-lg"
              href="/contact"
            >Contact Us</a>
          </li>
        </ul>
      </div>
      <!-- Social Media Icons -->
      <ul id="social-media-buttons" class="flex items-center hidden sm:flex">
        <div class="font-bold navbar-brown-text mr-2 hidden xl:flex items-center">
          <div><font-awesome-icon class="text-2xl mr-2" :icon="['fas', 'phone']"/></div>
          <div>070-4517-0225</div>
        </div>
        <li class="mr-2">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-youtube-ft.svg" />
          </a>
        </li>
        <li class="mr-2">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-instargram-ft.svg" />
          </a>
        </li>
        <li class="">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-blog-ft.svg" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.navbar-dark-text {
  color: #1a1915;
}
.navbar-brown-text {
  color: #9c9780;
}
.dropdown-menu {
  background-color: #1a1915;
}
.dropdown-item {
  color: #9c9780;
  @apply px-4 py-2 font-normal;
}
.dropdown-item:hover {
  background-color: #827F6A;
  @apply font-bold text-white;
}
</style>