<template>
    <div>
 <h3>Liste des articles</h3>

  <table class="table table-striped">
  <thead>
<tr>
<th width="30px">Référence</th>
<th width="40px">Désignation</th>
<th width="25px">Qté</th>
<th width="35px">Prix</th>
<th width="35px">Montant</th>
<th width="100px">Actions</th>
</tr>
</thead>
<tbody>
        <tr v-for="(art, index) in articles" :key="art.reference">
          <td width="40px">{{ art.reference }}</td>
          <td width="125px">{{ art.designation }}</td>
          <td width="40px">
            <span v-if="!art.editMode">{{ art.qte }}</span>
            <input
              v-else
              type="number"
              v-model="art.qte"
              @change="updateArticle(index)"
            />
          </td>
          <td width="55px">
             <span v-if="!art.editMode">{{ art.prix }}</span>
            <input
              v-else
              type="number"
              v-model="art.prix"
              @change="updateArticle(index)"
            />
         </td>
          <td width="55px">{{ art.prix * art.qte }}</td>
          <td width="100px">

            <button
                @click="art.editMode ? enregistrer(art) : toggleEditMode(art)"
                class="btn btn-primary btn-sm"
                >
                {{ art.editMode ? "Enregistrer" : "Modifier" }}
                </button>
           
                <button
              @click="deleteArticle(index)"
              class="btn btn-danger btn-sm"
            >
              Supprimer
            </button>

          </td>
        </tr>
      </tbody>
    </table>
</div>

</template>

<script setup>


//const props = defineProps(['articles']);

import { articles, recalculateMontantTotal } from './sharedStore';

const deleteArticle = (index) => { 
  // on utilise l'index de l'article à supprimer
  if (index >= 0 && index < articles.value.length) {
    articles.value.splice(index, 1);
  }
  recalculateMontantTotal ()
};

const toggleEditMode = (article) => {
  article.editMode = !article.editMode;
};

const updateArticle = (index) => {
  if (index >= 0 && index < articles.value.length) {
    const article = articles.value[index];
    article.montant = article.prix * article.qte;
   
  }
  recalculateMontantTotal ()
};

// Initialise l'état "editMode" pour chaque article
articles.value.forEach((article) => {
  article.editMode = false;
});

const enregistrer =(article)=>{
    toggleEditMode(article); // Désactive le mode édition après la mise à jour
}

</script>

<style lang="scss" scoped>

</style>
