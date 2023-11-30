
<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, getDocs } from "firebase/firestore";

import ProductCard from '@/components/ProductCard.vue'

// create an empty array
const pokemons = ref([])

async function getPokemon() {
  const querySnapshot = await getDocs(collection(db, 'Pokemon'))
  querySnapshot.forEach((doc) => {
    const pokemonDetails = {
      "id": doc.id,
      "name": doc.data().name,
      "type1": doc.data().type1,
      "type2": doc.data().type2,
      "japanesename": doc.data().japanesename,
      "evolution": doc.data().evolution,
      "imageURL": doc.data().imageURL 
    }
    pokemons.value.push(pokemonDetails)
  })
}


onMounted(async () => {
  console.log("Connecting to Firebase")
  await getPokemon()
})
</script>

<template>
  <div class="pokemon-list">
    <ProductCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}
</style>

