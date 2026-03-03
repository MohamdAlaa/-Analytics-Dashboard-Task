<script setup>
defineProps({
  title: String,
  description: String,
  sliders: {
    type: Array,
    default: () => []
  }
})

const rows = [
  { label: 'Gross Profit', current: '$640,000', adjusted: '$650,000', change: '+1.6%' },
  { label: 'Net Income', current: '$650,000', adjusted: '$670,000', change: '+3.0%' },
  { label: 'Runway (months)', current: '4.1', adjusted: '6.5', change: '+2.4' }
]
</script>

<template>
  <section class="bg-surface shadow-card rounded-card p-5 sm:p-6 flex flex-col gap-4">
    <header class="space-y-1">
      <p class="text-sm font-semibold text-slate-900">{{ title }}</p>
      <p class="text-xs text-slate-400">
        {{ description }}
      </p>
    </header>

    <div class="space-y-4">
      <div
        v-for="slider in sliders"
        :key="slider"
        class="flex items-center justify-between gap-3 text-xs"
      >
        <span class="text-slate-500">{{ slider }}</span>
        <div class="flex-1 h-1.5 rounded-full bg-surface-muted mx-2 overflow-hidden">
          <div class="h-full rounded-full bg-primary"></div>
        </div>
        <span class="text-slate-400">+{{ Math.floor(Math.random() * 10) }}%</span>
      </div>
    </div>

    <div class="bg-primary text-white rounded-2xl p-3 text-[11px] space-y-2">
      <div class="grid grid-cols-4 gap-2 font-medium">
        <span></span>
        <span>Current</span>
        <span>Adjusted</span>
        <span>Changes</span>
      </div>
      <div
        v-for="row in rows"
        :key="row.label"
        class="grid grid-cols-4 gap-2 items-center border-t border-white/15 pt-1.5 mt-1.5"
      >
        <span>{{ row.label }}</span>
        <span class="text-xs text-white/80">{{ row.current }}</span>
        <span class="text-xs text-white/80">{{ row.adjusted }}</span>
        <span class="text-xs font-semibold">{{ row.change }}</span>
      </div>
    </div>

    <button
      type="button"
      class="mt-1 inline-flex items-center justify-center rounded-full bg-primary text-white text-xs font-medium py-2 px-4 self-start shadow-card"
    >
      Generate
    </button>
  </section>
</template>

