<template>
  <div class="product">
      <div class="product--box" v-for="(item, index) in items">

        <img :src="require('../assets/images' + item.image)" :alt="item.alt"/>

        <div class="product--box__inner">

            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>

            <div class="product--box__button-holder">
                <h3>{{item.price}} Kč</h3>
                <button v-on:click="addtocart(item)">+</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Basket from '@/components/Basket.vue'
import axios from 'axios';
import {mapMutations} from 'vuex'

export default {
  name: 'product',
	data() {
		return {
      items: [],
      pocet: 0
		}
	},
	mounted() {
		this.fetchItems()
  },
  props: {
    title: {
      type: String
    }
  },
	methods: {
    fetchItems() {
			  let id = this.$route.params.id;
        let url = '/products.json';

        axios.get(url)
             .then(response => {
        this.items = response.data
      });
    },
    ...mapMutations(["addToCart"]),
    addtocart(item)
    {
      this.addToCart(item)
    }
  },

	watch: {
    '$route.params.id': 'fetchItems'
  }
}

</script>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/product";


</style>
