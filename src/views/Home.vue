<template>
    <main class="back_home">
        <div class="container_home">
            <Carousel />
            <h4 class="panel_title">Produtos mais vendidos</h4>
            <section class="product_section container-fluid"  >
                <figure v-for="(product, index) in products" :class="index > 3 ? 'highlights_panel disable_mobile': 'highlights_panel'">
                    <div class="product_img">
                        <a href="product.html"><img :src="getImg(product.img)" alt="Placa-Mãe" class="panel_img"></a>
                    </div>
                    <div class="product_content">
                        <figcaption class="figcaption">{{ product.name }}</figcaption>
                        <figcaption><i class="fa-solid fa-dollar-sign"></i>{{ product.price }}</figcaption>
                        <RouterLink to="/buyproduct" class="btn btn-lg button_panel">Comprar</RouterLink>
                
                    </div>
                </figure>
            </section>

        </div>
    </main>
</template>

<script lang="ts">
import type { Product } from "@/models/product";
import { defineComponent, onMounted, ref } from "vue";
import Carousel from "@/components/Carousel.vue";


export default defineComponent({
    name: "Home",
    components: {
        Carousel,

    },
    setup() {

        let products = ref<Product[]>([]);



        function listProduct(): void {
            fetch('http://localhost:3000/produtos')
                .then(response => response.json())
                .then(result => products.value = result);
        };

        function getImg(imgSrc: string): string {
            const imgUrl = new URL(imgSrc as string, import.meta.url)
            return imgUrl.toString();
        };

        onMounted(() => {
            listProduct();
        });

        return {
            products,
            getImg
        }
    },

});

</script>

<style scoped>
.back_home {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.panel_title {
    color: #8fa8ff;
    display: flex;
    justify-content: center;
    margin: 2rem;
    font-size: 1.2rem;
    font-family: var(--inter);
    font-weight: bold;
}

.product_section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.highlights_panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: #8fa8ff;
    border-style: solid;
    border-width: 0.2rem;
    border-radius: 5%;
    width: 20%;
    height: 23rem;
    margin: 1rem;
}

.panel_img {
    width: 90%;
    height: 90%;
    margin-top: 5%;
}

.product_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    font-family: var(--black);
}

.button_panel {
    border-radius: 5%;
    color: #ffffff;
    background-color: #8fa8ff;
}

.product_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.product_img {
    display: flex;
    justify-content: center;
}

@media (max-width: 767px) {
    .panel_title {
        margin: 0rem;
        margin-top: 2rem;
    }

    .product_section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .highlights_panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-color: #8fa8ff;
        border-style: solid;
        border-width: 0.2rem;
        border-radius: 5%;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .product_section {
        display: flex;
        justify-content: space-between;
    }

    .highlights_panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-color: #8fa8ff;
        border-style: solid;
        border-width: 0.2rem;
        border-radius: 5%;
        width: 30%;
        height: 23rem;
        margin: 0rem;
    }
}
</style>
