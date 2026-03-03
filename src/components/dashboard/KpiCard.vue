<script setup>
defineProps({
  label: String,
  value: String,
  subtitle: String,
  trend: String
})
</script>

<template>
  <div
    class="bg-white/90 shadow-card rounded-2xl px-5 py-3.5 flex flex-col gap-1.5 min-w-[150px] border border-white/80"
  >
    <p class="text-[10px] uppercase tracking-[0.12em] text-slate-400">{{ label }}</p>
    <p class="text-lg font-semibold text-slate-900">{{ value }}</p>
    <p class="text-[11px] text-slate-400">{{ subtitle }}</p>
    <p v-if="trend" class="text-[11px] text-emerald-500 font-medium">{{ trend }}</p>
  </div>
</template>

