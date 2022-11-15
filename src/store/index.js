import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartProductList: []
    },
    getters: {
        countProduct:state=> {
            return state.cartProductList.length;
    },
        mycartList:state=> {
            return state.cartProductList;
    }
    },
        mutations: {
            addToCart:(state,product)=>
    {
        state.cartProductList.push(product);
    }

    },
    actions: {
    },
    modules: {
    }
})
