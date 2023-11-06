<template>
    <div>
    
        
<h3>Inscription au site</h3>
<div class="mb-3">
  <label for="Email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email"  v-model="email" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="Nom" class="form-label">Nom : </label>
  <input type="text" class="form-control" id="nom"  v-model="nom" placeholder="Votre nom">
</div>
<div class="mb-3">
  <label for="Prenom" class="form-label">Prénom : </label>
  <input type="text" class="form-control" id="prenom"  v-model="prenom" placeholder="Votre prénom">
</div>
<div class="mb-3">
  <label for="Password" class="form-label">Password : </label>
  <input type="text" class="form-control" id="password"  v-model="password" placeholder="Password">
</div>
<button type="button" @click="handleconfirm" class="btn btn-success">Afficher</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const email = ref('');
const nom=ref('')
const prenom=ref ('')
const password=ref('')

const handleconfirm=()=>{
    
   nom="assabah"
}
</script>

<style lang="scss" scoped>

</style>