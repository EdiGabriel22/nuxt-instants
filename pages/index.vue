<template>
    <div class="grid md:grid-cols-2">
        <InstantsItem
            v-for="instant in instants" 
            class="mb-2"
            :is-playing="isAudioTitlePlaying(instant.title)"
            :key="instant.title"
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

const { play, pause, isAudioTitlePlaying } = useAudioPlayer();
const { data: instants } = await useFetch<Instant[]>("/api/instants");

const handlePlayaAndPause = (instant: Instant) => {
    if (isAudioTitlePlaying(instant.title)) {
        pause();
        return;
    }
    
    play(instant);
}
</script>