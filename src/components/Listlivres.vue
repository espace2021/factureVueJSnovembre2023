<script setup>
import { ref } from 'vue';
import Affichelivres from './Affichelivres.vue';
const ajoutlivre=()=> { 
                 const liv1={
                  "isbn": "42368756",
  "titre": "ReactJS",
  "auteur":"Romain Rissouan",
  "annedition": 2021,
  "prix": 33,
  "couverture": "https://m.media-amazon.com/images/I/61vg+0-1yGL._SY466_.jpg",
                 }
                 livres.value.push(liv1)
            }


const livres=ref([
{
  "isbn": "42368756",
  "titre": "ReactJS",
  "auteur":"Romain Rissouan",
  "annedition": 2021,
  "prix": 33,
  "couverture": "https://m.media-amazon.com/images/I/61vg+0-1yGL._SY466_.jpg",
},
{
   "isbn": "123698745",
  "titre": "Les VPNS",
  "auteur":"Stephan@gmail.com",
  "annedition": 2020,
  "prix": 55,
  "couverture": "http://res.cloudinary.com/iset-sfax/image/upload/v1696761358/images/9782100491155_internet_w290.jpg.jpg",
},
{
  "isbn": "54894",
  "titre": "Techniques de Référencement Web",
  "auteur":"Patrick Wampe",
  "annedition": 2020,
  "prix": 55,
  "couverture": "https://blog.internet-formation.fr/wp-content/uploads/2018/04/1e-4e-couverture-livre-SEO.jpg",
},
{
   "isbn": "5464sf",
  "titre": "VueJS",
  "auteur":"Alexandra Martin",
  "annedition": 2020,
  "prix": 20,
  "couverture": "https://m.media-amazon.com/images/I/718QqTspltL._SY466_.jpg",
},
{
   "isbn": "65465445",
  "titre": "Laravel",
  "auteur":"Eric Sarrion",
  "annedition": 2020,
  "prix": 50,
  "couverture": "https://images.booksense.com/images/132/218/9798554218132.jpg",
}
])
</script>

<template>
  <div>
    <Affichelivres :livres="livres" :ajoutlivre="ajoutlivre"/>
    
  </div>
</template>
  
<style scoped>

</style>
