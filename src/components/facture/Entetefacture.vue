<template>
    <div>
      <div>
        <h1>Impression Facture</h1>
        Facture N° {{ fact.numfact }}<br />
        Date Facture : {{ fact.datefact }}<br />
        Montant : {{ montantTotal }}
      </div>
      <div>
        <h3>Client:</h3>
        Raison sociale : {{ fact.raisoc }}<br />
        Responsable : {{ fact.responsable }}
      </div>
    </div>
  </template>
  
  <script setup>
import { onMounted } from 'vue';
import { montantTotal, recalculateMontantTotal } from './sharedStore';

const props = defineProps(['fact']);

onMounted(() => {
  recalculateMontantTotal();
});
</script>
  
  <style lang="scss" scoped>
  </style>
  