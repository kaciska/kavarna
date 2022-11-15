<template>
	<div class="basket-holder">
		<div class="container">
			<h2>Vaše objednávka</h2>

			<hr>

			<div class="basket-holder--item">
				<div>{{pocet}}x Espresso</div>
				<div class="basket-holder--item__buttons">
					<button v-on:click="plus">+</button>
					<button v-on:click="minus">-</button>
				</div>
			</div>

			<div class="basket-holder--item">
				<div>{{pocet}}x Cortado</div>
				<div class="basket-holder--item__buttons">
					<button v-on:click="plus">+</button>
					<button v-on:click="minus">-</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Product from '@/components/Product.vue'
import ProductList from '@/components/ProductList.vue'
import App from '@/App.vue'

export default {
	name: 'basket',

	data: function () {
    return {
	  items: [],
      pocet: 0
    }
  },
	methods: {
		minus() {
			this.pocet--;
		},

		plus() {
			this.pocet++;
		}
	},
	computed: {
		...mapGetters([
			'mycartlist'
		])
	},
};

</script>

<style lang="scss" scoped>

@import "../scss/colors";
@import "../scss/basket";

</style>