<template>
    <div class="container container_product">
        <div class="product w-75">
            <h1 class="title">Novo produto</h1>

            <form id="form_product" @submit.prevent="formProduct">
                <div>
                    <div class="product_1">
                        <div class="infos_1">
                            <label for="product_name">Nome:</label>
                            <input type="text" class="form-control" id="product_name">
                        </div>
                        <div class="price">
                            <label for="product_price">Preço:</label>
                            <input type="text" class="form-control" id="product_price">
                        </div>
                        <div class="category_products">
                            <label for="product_qtd">Quantidade em estoque:</label>
                            <input type="text" class="form-control" id="product_qtd">
                        </div>
                    </div>

                    <div class="product_2">
                        <div class="infos_2">
                            <label for="product_description">Descrição:</label>
                            <textarea rows="5" class="form-control" id="product_description"></textarea>
                        </div>
                        <div class="category_products">
                            <label for="product_category">Categoria:</label>
                            <select class="form-select" aria-label="Default select example" id="product_category">
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


import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    methods: {
        formProduct() {
            const form = document.getElementById("form_product") as HTMLFormElement;
            const product = createProduct(form.product_name.value, form.product_description.value,
                form.product_price.value, form.product_qtd.value, form.product_category.value);

            postProduct(product);

            const elements = form.getElementsByTagName("input");

            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                element.value = "";

            }

            form.product_description.value = "";
            form.product_category.value = "";

        }
    }
})

let products = new Array<Product>();
products = [
    {
      "uuid": "2e7d4832-9a43-4c98-ac15-520f101db0f8",
      "name": "Placa-Mãe",
      "description": "Placa-Mãe",
      "price": 1.500,
      "qtd": 11,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product1.jpg"
    },
    {
      "uuid": "ea91b025-688f-4911-93fa-f2bbca0dcebd",
      "name": "Controle Nintendo",
      "description": "Controle Super Nintendo",
      "price": 1.900,
      "qtd": 14,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product2.jpg"
    },
    {
      "uuid": "d27a7772-3abe-45be-91dd-536e4e5cb032",
      "name": "Memória RAM",
      "description": "Memória RAM",
      "price": 1.000,
      "qtd": 1,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product3.jpg"
    },
    {
      "uuid": "c4905bdb-f89e-429d-83ec-45474b5bec8b",
      "name": "Fone Bluetooth",
      "description": "Fone Bluetooth",
      "price": 90.00,
      "qtd": 11,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product4.jpg"
    },
    {
      "uuid": "e0c4b058-9c33-4b3d-b470-6e5b236c9195",
      "name": "Controle PS (blue)",
      "description": "Controle PS (blue)",
      "price": 400,
      "qtd": 2,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product5.jpg"
    },
    {
      "uuid": "345a28b2-f0cc-4a57-a86a-d6da4f6de4e8",
      "name": "Controle PS (black)",
      "description": "Controle PS (black)",
      "price": 1.900,
      "qtd": 5,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product6.jpg"
    },
    {
      "uuid": "05d833f8-2ed7-4d52-a88d-0c4ae3bf9d20",
      "name": "Controle X-Box",
      "description": "Controle X-Box",
      "price": 1.900,
      "qtd": 9,
      "category": "1",
      "createdAt": "2023-02-28",
      "img": "assets/img/product7.jpg"
    },
    {
      "uuid": "e9d49607-7e07-490e-9d85-2ebbe57229a2",
      "name": "Processador",
      "description": "Processador",
      "price": 1.733,
      "qtd": 7,
      "category": "1",
      "img": "assets/img/product8.jpg",
      "createdAt": "2023-03-08",
    }
  ]
 
const productSection = document.querySelector(".product_section") as HTMLElement;



function postProduct(product: Product): void {
  
    products.push(product)
    console.log(products)
  
}


</script>

<style>
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