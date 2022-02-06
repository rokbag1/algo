<template>
    <div class="menu-bar">
        <button @click="$store.commit('changeMessage')">asdasdas</button>
        <div></div>
    </div>
</template>

<script>
export default {
  name: 'MenuBar',
}
</script>

<style scoped>
.menu-bar {
    background-color: grey;
    height: 100px;
    width: 100%;
}
</style>
