<template>
    <div class="flex items-center gap-2">
        <Button
            :class="{
                'animate-pulse' : isPlaying
            }"
            size="icon"
            @click="tooglePlayPause"
        >
            <Pause v-if="isPlaying" class="text-gray-100 size-4"/>
            <Play v-else class="text-gray-100 size-4"/>
        </Button>
        <p class="text-gray-100 truncate">{{ props.title }}</p>
    </div>
</template>

<script setup lang="ts">
import { Pause, Play } from "lucide-vue-next";
import type { Instant } from "~/entities/Instant";

const props = defineProps<{
    id: string;
    title: string;
    audioUrl: string;
    isPlaying: boolean;
}>();

const emit = defineEmits<{
    (event: "play", instant: Instant): void
}>();


const tooglePlayPause = () => {
    emit("play", { id: props.id, title: props.title, audioUrl: props.audioUrl});
};
</script>