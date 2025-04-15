<template>
    <div class="flex flex-col gap-5 p-3">
        <div>
            <p class="text-xs">Tocando agora:</p>
            <p class="mt-1">{{  props.title }}</p>
        </div>
        
        <div class="flex gap-2">
            <span>
                <Button
                    :class="{
                        'animate-pulse' : props.isPlaying
                    }"
                    size="icon"
                    @click="handleToogle()"
                >
                    <Pause v-if="props.isPlaying" class="text-gray-100 size-4"/>
                    <Play v-else class="text-gray-100 size-4"/>
                </Button>
            </span>
    
            <Slider
              :default-value="[0]" :max="100" :step="props.progress"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Pause, Play } from "lucide-vue-next";
import Button from "../ui/button/Button.vue";
import Slider from "../ui/slider/Slider.vue";

const props = defineProps<{
    title: string,
    progress: number,
    isPlaying: Boolean
}>();

const emit = defineEmits<{
    (e: 'play') : void
    (e: 'pause') : void
}>();

const handleToogle = () => {
    if(props.isPlaying) {
        emit("pause");
        return
    }

    emit("play")
};
</script>