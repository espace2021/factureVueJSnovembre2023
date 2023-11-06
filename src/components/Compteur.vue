<template>
  <div>
{{ state.count}}
<button class="btn btn-success" @click="update">Modif</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const state = reacrt(0)


const update=()=>{
  state.value.count++

 
}
</script>

<style lang="scss" scoped>

</style>
