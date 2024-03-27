<template>
    <aside class="flex flex-col w-64 h-full gap-4 bg-zinc-900">
        <div class="p-5">
            <span class="text-2xl font-bold text-gray-200">Nuxt Instants</span>
        </div>

        <div class="flex flex-col gap-1">
            <nuxt-link 
                class="flex items-center gap-2 px-4 py-3 text-gray-100 transition ease-in-out font-regular hover:bg-zinc-800" 
                to="/"
            >
                <AudioLines class="w-4 h-4"/>
                Todos
            </nuxt-link>

            <nuxt-link 
                class="flex items-center gap-2 px-4 py-3 text-gray-100 transition ease-in-out font-regular hover:bg-zinc-800" 
                to="/recents"
            >
                <AudioWaveform class="w-4 h-4"/>
                Recentes
            </nuxt-link>
        </div>
    </aside>
</template>

<script setup lang="ts">
  import { AudioLines, AudioWaveform } from 'lucide-vue-next';

</script>