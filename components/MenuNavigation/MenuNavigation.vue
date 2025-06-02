<template>
    <aside class="flex flex-col justify-between w-64 h-full bg-zinc-900">
        <div class="flex flex-col">
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
        </div>

        <div 
            v-if="currentInstant"
            class="w-full text-white h-fit bg-zinc-700"
        >
            <MiniPlayer
                @play="play"
                @pause="pause"
                :duration="duration"
                :title="currentInstant.title"
                :is-playing="playing"
                :progress="progress"
            />
        </div>
    </aside>
</template>

<script setup lang="ts">
  import { AudioLines, AudioWaveform } from 'lucide-vue-next';

  const { currentInstant, play, pause, playing, progress, duration } = useAudioPlayer()

</script>