import { ref } from 'vue';

export const articles = ref([
  { reference: '1', designation: 'la vaisselle', qte: 3, prix: 1500 },
  { reference: '3', designation: 'Machine a laver', qte: 3, prix: 1200 },
  { reference: '17', designation: 'Micro-onde', qte: 4, prix: 300 },
]);

export const montantTotal = ref(0);

export const recalculateMontantTotal = () => {
    const total = articles.value.reduce((total, article) => total + article.qte * article.prix, 0);
    montantTotal.value = total;
  };