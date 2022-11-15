<template>
    <div class="home">

    <ProductList />

    </div>
</template>

<script>
import Product from '@/components/Product.vue';
import Basket from '@/components/Basket.vue';
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'home',
    components: {
    Product,
    Basket,
    ProductList
    }
}
</script>
