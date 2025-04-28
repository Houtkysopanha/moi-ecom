<template>
  <div class="main">
    <div class="header-bar">
      <nav>
        <div class="search flex mx-auto flex-wrap items-center justify-between">
          <div class="relative hidden md:block">
            <button
              class="relative flex items-center w-70 h-10 text-sm border-2 border-black px-4"
              style="padding-left: 1cm"
            >
              <div
                style="padding-left: 0.3cm"
                class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <span class="text-gray-400">Search for...</span>
            </button>
          </div>
          <div class="logo" style="margin-right: 3.5cm">
            <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
          </div>
          <div class="icon-nav flex items-center justify-between">
            <div>
              <i class="fa-solid fa-bag-shopping text-2xl"></i>
            </div>
            <div class="mx-10">
              <i
                class="fa-solid fa-heart text-2xl"
                style="margin: 0 0.5cm 0 0.5cm"
              ></i>
            </div>
            <div>
              <i class="fa-solid fa-user text-2xl"></i>
            </div>
          </div>
        </div>

        <div class="mega-menu" style="margin-top: 0.6cm">
          <div class="relative w-full flex justify-start items-center">
            <!-- Mega menu here -->
            <div class="group">
              <button class="font-bold uppercase">New Arrivals</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                  <div class="flex flex-col">
                    <h3 class="text-sm font-bold uppercase leading-8">
                      Just in
                    </h3>
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >All New</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >Back in Stock</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Dresses</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Top</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Bottom</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Jacket & Sweater</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Shoes</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New New Accessories</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">bestseller</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                  <div class="flex flex-col">
                    <h3 class="text-sm font-bold uppercase leading-8">
                      Just in
                    </h3>
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >All New</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >Back in Stock</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Dresses</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Top</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Bottom</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Jacket & Sweater</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New Shoes</a
                    >
                    <a
                      href="#"
                      class="hover:underline hover:text-pink-400 leading-8"
                      >New New Accessories</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">clothing</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>
            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">Accessories</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase">shoes</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>

            <div class="group" style="margin-left: 1.5cm;">
              <button class="font-bold uppercase text-red-600">sale</button>

              <div
                style="margin-top: 0.2cm"
                class="hidden group-hover:flex flex-col absolute left-0 z-10 w-full border-t-3 border-black text-black duration-300 before:content-[''] before:absolute before:top-[-16px] before:left-10 before:border-8 before:border-transparent before:border-b-black"
              >
                <div
                  class="grid grid-cols-2 md:grid-cols-4 gap-5 bg-white"
                  style="padding: 1cm"
                >
                <!-- write list down -->
                </div>
              </div>
            </div>


          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style>

</style>
