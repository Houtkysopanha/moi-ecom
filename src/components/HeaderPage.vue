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
          <div class="logo" style="margin-right: 3.5cm;">
            <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
          </div>
          <div class=" icon-nav flex items-center justify-between">
           <div>
            <i class="fa-solid fa-bag-shopping text-2xl"></i>
           </div>
            <div class=" mx-10">
              <i class="fa-solid fa-heart text-2xl" style="margin: 0 0.5cm 0 0.5cm;"></i>
            </div>
           <div>
            <i class="fa-solid fa-user text-2xl"></i>
           </div>
          </div>
        </div>
      </nav>
        <div class="mega-menu">
          <nav>
      <ul class="flex items-start justify-start " style="margin: 0.8cm 0;">
        <li class="relative group">
          <button class=" cursor-default py-2 text-base font-semibold"> NEW ARRIVAL</button>
          <div
            class="absolute top-0  transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-80 transform">
            <div class="relative top-6 bg-white shadow-xl w-full mx-[1cm]">
              <div
                class=" bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out ">
              </div>

              <div class="relative z-10">
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 ">The Suite</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Course Editor
                          <p class="text-gray-500 ">All-in-one editor</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Accept payments
                          <p class="text-gray-500 ">Pre-build payments page</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                          Closed Captioning
                          <p class="text-gray-500 ">Use AI to generate captions</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 ">Extensions</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800  hover:text-indigo-600">
                          Plugins
                          <p class="text-gray-500 ">Tweak existing functionality</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800  hover:text-indigo-600">
                          Batch uploads
                          <p class="text-gray-500 ">Get your time back</p>
                        </a>
                      </li>
                      <li>
                        <a href="#"
                          class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800  hover:text-indigo-600">
                          Social sharing
                          <p class="text-gray-500 ">Generate content for socials</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default text-base font-semibold"  style="margin: 0 0.8cm;" >BESTSELLER</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <p class="uppercase tracking-wider text-gray-500 ">Use cases</p>
                <ul class="mt-3 text-[15px]">
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Creators
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Streamers
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Influence
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500  hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">
                      Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default text-base font-semibold"  style="margin: 0 0.8cm;">CLOTHING</button>
          <div
            class="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm">
              </div>

              <div class="relative z-10">
                <a href="#"
                  class="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800  hover:text-indigo-600">
                  Documentation
                  <p class="text-gray-500 ">Start integrating in no time</p>
                </a>
                <div class="mt-6 ">
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 ">Get started</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Libraries and SDKs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Code samples
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Tutorials
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="uppercase tracking-wider text-gray-500 ">Guides</p>
                    <ul class="mt-3 text-[15px]">
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Accept online payments
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Editing video like a pro
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Automation techniques
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                          Create stunning effects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default text-base font-semibold"  style="margin: 0 0.8cm;">ACCESSORIES</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default text-base font-semibold"  style="margin: 0 0.8cm;">SHOES</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
        <li class="relative group px-3 py-2">
          <button class="hover:opacity-50 cursor-default text-red-600 text-base font-semibold"  style="margin: 0 0.8cm;">SALE</button>
          <div
            class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div
                class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
              </div>
              <div class="relative z-10">
                <ul class="text-[15px]">
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Get Support
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-600 hover:text-gray-800 py-1 block ">
                      News &amp; Events
                    </a>
                  </li>
                </ul>


              </div>
            </div>
          </div>
        </li>
    
      </ul>
    </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped></style>
