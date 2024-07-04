<template>
    <div v-if="show" class="backdrop" @click="toggleBackdropHandler"></div>
    <dialog :open="show" class="modal">
        <div class="modal-box">
            <header class="py-3">
                <slot name="modal-header"> </slot>
            </header>
            <main class="py-3">
                <slot name="modal-content"> </slot>
            </main>
            <!-- Action -->
            <div class="py-3">
                <slot />
            </div>
        </div>
    </dialog>
</template>

<script setup>
const props = defineProps(["show"]);
const emit = defineEmits(["toggleBackdrop"]);

const toggleBackdropHandler = () => {
    emit("toggleBackdrop", props.show);
    console.log(props.show);
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    /* Ensures the backdrop covers the entire viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black */
    z-index: 99;
    /* Ensure it's on top of other content */
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
