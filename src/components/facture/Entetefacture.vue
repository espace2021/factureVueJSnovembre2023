<template>
    <div>
        <div>
        <h1>Impression Facture</h1>
        Facture N° {{fact.numfact}}<br/>
        Date Facture : {{fact.datefact}}<br/>
        
        </div>
        <div>
            <h3>Client:</h3>
            Raison sociale : {{fact.raisoc}}<br/>
            Responsable : {{fact.responsable}}
        </div>

     </div> 

</template>

<script setup>

const props=defineProps(['fact'])
</script>

<style lang="scss" scoped>

</style>
