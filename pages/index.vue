<template>
    <div class="grid md:grid-cols-2">
        <InstantsItem
            v-for="instant in instants" 
            class="mb-2"
            :is-playing="isAudioPlaying(instant.id)"
            :key="instant.title"
            :id="instant.id"
            :title="instant.title"
            :audio-url="instant.audioUrl"
            @play="handlePlayaAndPause"
        />
    </div>
</template>

<script setup lang="ts">
import type { Instant } from "~/entities/Instant";
useHead({
    title: "Todos os instants"
})

const { play, pause, isAudioPlaying } = useAudioPlayer();
const { data: instants } = await useFetch<Instant[]>("/api/instants");

const handlePlayaAndPause = (instant: Instant) => {
    if (isAudioPlaying(instant.id)) {
        pause();
        return;
    }
    
    play(instant);
}
</script>