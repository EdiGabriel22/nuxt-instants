<template>
    <div class="flex w-full h-full">
        <MenuNavigation class="hidden md:block" />
        
        <MainContent class="flex-1">
            <slot>
                
            </slot>
        </MainContent>
    </div>
</template>