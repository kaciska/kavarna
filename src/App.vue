<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Kávový domeček</router-link>
            <Basket />
            <img id="cartIcon" v-on:click="openCart()" src="@/assets/icons/basket.svg" alt="košík"/>
        </div>
    <router-view/>
    </div>
</template>

<script>
import Basket from '@/components/Basket.vue'
import {mapGetters} from 'vuex'


export default {
name: 'home',
components: {
    Basket
},
methods: {
    openCart() {
        let cart = document.querySelector(".basket-holder");

        if (cart.style.display === "block") {
            cart.style.display = "none";
        } else {
            cart.style.display = "block";
        }
    },
},

computed: {
    ...mapGetters([
        'mycartlist'
    ])
},
}

</script>

<style lang="scss">
@import "@/../scss/colors";
@import "@/../scss/app";

</style>
