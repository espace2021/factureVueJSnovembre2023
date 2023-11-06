<template>
    <div>
           <table border="1">
    
    <tbody>
  <tr>
   
   <td> <input type="text" placeholder="Réf"
    name="reference" 
    v-model="reference"
   
    size="1"/> 
    </td> 
   <td> 
    <input type="text" placeholder="Désignation"
   name="des" 
   v-model="des"
   size="12"/> </td>  
   <td> 
    <input type="number" 
   name="qte" 
   v-model="qte"
   
   size="2"/> </td> 
   <td> 
    <input type="number" name="pr" 
   v-model="prix"/>
   </td> 
   
    <td width="55px"> {{prix*qte}}</td>  
   </tr> 
   </tbody> 
  </table>
    <button @click="validerLigne">
       Ajout ligne
    </button>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['ajoutLigne'])
        const reference=ref()
        const des=ref()
        const qte=ref(0)
        const prix=ref(0)
      
        const validerLigne=()=>{
          props.ajoutLigne(reference.value,des.value,qte.value,prix.value);
          reference.value=''
          des.value=""
          qte.value=0
          prix.value=0
        }

</script>

<style lang="scss" scoped>

</style>
