import type { Instant } from "~/entities/Instant";

const currentInstant = ref<Instant>();
const audioRef = ref<HTMLAudioElement | null>();
const progress = ref<number>(0)
const duration = ref<number>(0)
const playing = ref<boolean>(false)

export function useAudioPlayer() {

    const isAudioPlaying = (id: string) => {
        if (!currentInstant.value) {
            return false;
        }

        return id === currentInstant.value?.id;
    };

    const pause = () => {
        audioRef.value?.pause();
        playing.value = false;
    }

    const play = (instant: Instant) => {
        pause();

        currentInstant.value = instant;

        audioRef.value = new Audio(instant.audioUrl);
        audioRef.value.play();
        playing.value = true;
        duration.value = audioRef.value.duration;

        audioRef.value.onended = () => {
            pause()
        }

        audioRef.value.ontimeupdate = () => {
            if (!audioRef.value) {
                return
            }

            progress.value = (audioRef.value.currentTime / audioRef.value.duration) * 100
        }
    };

    return {
        currentInstant,
        play,
        pause,
        isAudioPlaying,
        progress,
        playing,duration
    }
}