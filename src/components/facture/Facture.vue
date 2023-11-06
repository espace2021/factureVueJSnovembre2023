<template>
    <div>
<Entetefacture :fact="facture" />
<Detailfacture  />
<Formfacture :ajoutLigne="ajoutLigne"/>

    </div>
</template>

<script setup>
import { ref } from "vue";
import Entetefacture from "./Entetefacture.vue";
import Formfacture from "./Formfacture.vue";
import Detailfacture from "./Detailfacture.vue";

import { articles } from './sharedStore';

const facture =ref({
                numfact:"100",
                datefact:"18/05/2022",
                raisoc:"Confort-Plus",
                responsable:"Turki Mounir"

            });
            
    
    const ajoutLigne =(ref,des,qt,pr)=>{
   //on construit la nouvelle ligne
         let ligne={reference:ref,designation:des,qte:qt,prix:pr}
//on change le state des articles en lui ajoutant la ligne
        articles.value.push(ligne)
 }


</script>

<style lang="scss" scoped>

</style>
