<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',

}
</script>

<style scoped>
.btn {
    cursor: pointer;
    padding: 10px 15px;
    background: none;
    color: rebeccapurple;
    border: 1px solid rebeccapurple;
}
</style>
