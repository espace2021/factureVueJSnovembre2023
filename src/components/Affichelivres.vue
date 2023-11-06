<script setup>

const props=defineProps(['livres','ajoutlivre'])
</script>

<template>
  <div>
    <h3>LISTE DES LIVRES DE LA BIBLIOTHEQUE</h3>
    
                    
                    <button @click.prevent="ajoutlivre" class="btn btn-success">Nouveau</button>
    <table class="table table-striped">
      <thead>
          <tr>
            <th>ISBN</th>
            <th>Image</th>
            <th>Titre Livre</th>
            <th>Auteur</th>
            <th>Année Edition</th>
            <th>Prix</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="liv in livres" :key="liv.isbn">
                <td>{{liv.isbn}}</td>  
                <td><img :src="liv.couverture" :alt=liv.titre width="100" /></td>
                <td>{{liv.titre}}</td>  
                <td>{{liv.auteur}}</td> 
                <td>{{liv.annedition}}</td>
                <td>{{liv.prix}}</td>
      
                
                <td>
                    
                    <button  class="btn btn-danger">Supprimer</button></td>
            </tr>

      </tbody>
    </table>
    
  </div>
</template>
  
<style scoped>

</style>
