<template>
        <div class="container container_product">
            <div class="product w-75">
                <h1 class="title">Novo produto</h1>
                <form id="form_product" @submit.prevent="saveProduct">
                    <div>
                        <div class="product_1">
                            <div class="infos_1">
                                <label  for="product_name">Nome:</label>
                                <input type="text" class="form-control" id="product_name" v-model="product.name">
                            </div>
                            <div class="price">
                                <label for="product_price">Preço:</label>
                                <input type="text" class="form-control" id="product_price"  v-model="product.price">
                            </div>
                            <div class="category_products">
                                <label for="product_qtd">Quantidade em estoque:</label>
                                <input type="text" class="form-control" id="product_qtd" v-model="product.qtd">
                            </div>
                        </div>
                        <div class="product_2">
                            <div class="infos_2">
                                <label for="product_description">Descrição:</label>
                                <textarea rows="5" class="form-control" id="product_description" v-model="product.description"></textarea>
                            </div>
                            <div class="category_products">
                                <label for="product_category">Categoria:</label>
                                <select class="form-select" aria-label="Default select example" id="product_category"  v-model="product.category">
                                    <option selected>Selecione...</option>
                                    <option value="1">Informática</option>
                                    <option value="2">Livros</option>
                                    <option value="3">Móveis</option>
                                </select>
                            </div>
        
                        </div>
                    </div>
                    <div class="input_btn">
                        <button type="submit" class="btn form_btn" id="form_btn">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
   
</template>

<script lang="ts">

import type { Product } from '@/models/product';
import { createProduct } from '@/models/product';


import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Home',
    setup() {

        let product = ref<Product>(createProduct("", "", 0, 0, ""));

        function saveProduct(): void {
            fetch('http://localhost:3000/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product.value)
            })
                .then(resposta => product.value = createProduct("", "", 0, 0, ""))
        }

        return {
            product,
            saveProduct
        }
    }
})

</script>

<style scoped>
.title {
    color: #ffffff;
}

.product_1 {
    display: flex;
    justify-content: space-between;
    width: 100%;


}

.product_2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
}

.infos_1 {
    width: 50%;
}

.infos_2 {
    width: 75%;
}

.container_product {
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: #8FA8FF; */

}



.title {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.form_btn {
    background-color: #6383f7;
    border-color: #6383f7;
    border-radius: 5px;
    font-family: var(--inter);
    color: azure;
    width: 40%;
}

.input_btn {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.category_products {
    width: 20%;
}

@media(max-width: 1440px) {

    .container_product {
        width: 70%;
        box-sizing: border-box;
        background-color: #8FA8FF;
    }

    .product_1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
    }

    .product_2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

    }

    .category_products {
        width: 75%;
    }

    .price {
        width: 75%;
        margin-bottom: 1rem;
    }



    .infos_1 {
        width: 75%;
        margin-bottom: 1rem;
    }

    .infos_2 {
        width: 75%;
        margin-bottom: 1rem;
    }

}
</style>