import type { Instant } from "~/entities/Instant"

export function useAudioPlayer() {
    const currentInstant = ref<Instant>();
    const audioRef = ref<HTMLAudioElement | null>();

    const isAudioPlaying = (id: string) => {
        if (!currentInstant.value) {
            return false;
        }

        return id === currentInstant.value?.id;
    };

    const pause = () => {
        audioRef.value?.pause();
        currentInstant.value = undefined;
    }

    const play = (instant: Instant) => {
        pause();

        currentInstant.value = instant;

        audioRef.value = new Audio(instant.audioUrl);
        audioRef.value.play();
    };

    return {
        play,
        pause,
        isAudioPlaying
    }
}