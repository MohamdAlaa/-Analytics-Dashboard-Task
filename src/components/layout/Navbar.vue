<script setup>
import { ref } from 'vue';

const tabs = ["FINANCE", "SALES", "HR", "MGMT"]
const activeTab = ref("FINANCE")
</script>

<template>
  <header class="px-4 pt-4 pb-2 sm:px-6 lg:px-10 relative">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-2xl  text-slate-800">The
          <span class="font-semibold">Essentials.</span>
        </p>
        <p class="text-sm text-blue-500">Here’s how your business is performing today.</p>
      </div>

      <div class="flex items-center gap-5">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow">
          <div class="grid grid-cols-2 gap-0.5 w-4 h-4">
            <div class="bg-blue-500 rounded-sm size-2"></div>
            <div class="bg-blue-500 rounded-sm size-2"></div>
            <div class="bg-blue-500 rounded-sm size-2"></div>
            <div class="bg-blue-500 rounded-sm size-2"></div>
          </div>
        </div>
        <div class="flex items-center bg-gray-100  rounded-full w-[445px] shadow-inner">
          <div class="flex rounded-full w-full gap-8">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              class="px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
              :class="
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow'
                  : 'text-gray-600 hover:text-black'
              "
            >
              {{ tab }}
            </button>
          </div>
        </div> 
      </div>

      
        <div class="flex gap-3 items-center">
          <span class="bg-white rounded-full w-24 h-9 flex items-center ">
            <p class="ml-5 text-lg ">Sep 25</p>
          </span>
          <span class="bg-blue-500 rounded-full w-10 h-10 flex items-center">
            <p class="text-white text-2xl ml-2">☰</p>
          </span>
        </div>

        <div 
              class="flex items-center justify-around bg-blue-400  w-[250px] rounded-b-3xl h-16 mt-[-18px]"
            >
              <span class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-[22px] ">
              🔔
              </span>
              <span class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-[22px]">
              ❄️
              </span>
              <span class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-[22px]">
                💳
              </span>
              <span class="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-[22px]">
                🧴
              </span>
            </div>


    </div>
  </header>
</template>

