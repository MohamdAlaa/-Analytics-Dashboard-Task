# Ledgers – Frontend Developer Technical Assignment

This project is a responsive analytics dashboard built with **Vue 3**, **Vite**, **Tailwind CSS**, and **PrimeVue**, based on the provided `task.png` design reference.

## Tech stack

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- PrimeVue + Chart.js (for charts)

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
cd "d:\Ledgers task"
npm install
```

### Development server

```bash
npm run dev
```

Then open the printed local URL in your browser (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/main.js` – Vue app bootstrap, Tailwind and PrimeVue setup.
- `src/App.vue` – Root component wiring the main layout.
- `src/components/layout/*` – Reusable layout components (top navigation, sidebar, layout shell).
- `src/components/dashboard/*` – KPI cards, chart cards, main dashboard, and scenario panels.
- `src/assets/main.css` – Tailwind entrypoint and global styles.

Mock data is used for KPIs, charts, and analytics tables to match the look and feel of the provided design.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
