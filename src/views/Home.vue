<template>
    <main class="back_home">
        <div class="container_home">
            <div class="input_container disable_desktop">
                <div class="input-group w-75">
                    <input type="text" class="form-control input_mobile" placeholder="Pesquisar..."
                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary btn_glass" type="button" id="button-addon2">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div class="carousel_box">
                <div id="carousel" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/carousel-54c2edb1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-content">
                                <h1>Confira as Promoções</h1>
                                <h5>E monte seu Setup</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/carousel-54c2edb1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-content">
                                <h1>Confira as Promoções</h1>
                                <h5>E monte seu Setup</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/carousel-54c2edb1.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-content">
                                <h1>Confira as Promoções</h1>
                                <h5>E monte seu Setup</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <h4 class="panel_title">Produtos mais vendidos</h4>
            <section class="product_section container-fluid"></section>
        </div>
    </main>
</template>

<script lang="ts">
import type { Product } from "@/models/product";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    methods: {
    },
    mounted() {
        listProduct();
    },
});

let products = new Array<Product>();
products = [
    {
        uuid: "2e7d4832-9a43-4c98-ac15-520f101db0f8",
        name: "Placa-Mãe",
        description: "Placa-Mãe",
        price: 1.5,
        qtd: 11,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product1.jpg",
    },
    {
        uuid: "ea91b025-688f-4911-93fa-f2bbca0dcebd",
        name: "Controle Nintendo",
        description: "Controle Super Nintendo",
        price: 1.9,
        qtd: 14,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product2.jpg",
    },
    {
        uuid: "d27a7772-3abe-45be-91dd-536e4e5cb032",
        name: "Memória RAM",
        description: "Memória RAM",
        price: 1.0,
        qtd: 1,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product3.jpg",
    },
    {
        uuid: "c4905bdb-f89e-429d-83ec-45474b5bec8b",
        name: "Fone Bluetooth",
        description: "Fone Bluetooth",
        price: 90.0,
        qtd: 11,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product4.jpg",
    },
    {
        uuid: "e0c4b058-9c33-4b3d-b470-6e5b236c9195",
        name: "Controle PS (blue)",
        description: "Controle PS (blue)",
        price: 400,
        qtd: 2,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product5.jpg",
    },
    {
        uuid: "345a28b2-f0cc-4a57-a86a-d6da4f6de4e8",
        name: "Controle PS (black)",
        description: "Controle PS (black)",
        price: 1.9,
        qtd: 5,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product6.jpg",
    },
    {
        uuid: "05d833f8-2ed7-4d52-a88d-0c4ae3bf9d20",
        name: "Controle X-Box",
        description: "Controle X-Box",
        price: 1.9,
        qtd: 9,
        category: "1",
        createdAt: "2023-02-28",
        img: "../assets/img/product7.jpg",
    },
    {
        uuid: "e9d49607-7e07-490e-9d85-2ebbe57229a2",
        name: "Processador",
        description: "Processador",
        price: 1.733,
        qtd: 7,
        category: "1",
        img: "../assets/img/product8.jpg",
        createdAt: "2023-03-08",
    },
];

function listProduct(): void {
    const productSection = document.querySelector(
        ".product_section"
    ) as HTMLElement;
    let index = 0;
    let addCards = products
        .map((product: Product) => {
            index++;
            if (index > 8) {
                return "";
            }
            return addProduct(product, index);
        })
        .join("");
    productSection.innerHTML = addCards;
}

function addProduct(product: Product, index: Number): string {
    let classPanel = "highlights_panel";

    if (index > 3) {
        classPanel = classPanel + " disable_mobile";
    }

    const imgUrl = new URL(product.img as string, import.meta.url)
    let htmlCard = `<figure class="${classPanel}">
                <div class="product_img">
                <a href="product.html"><img src="${imgUrl}" alt="Controle" class="panel_img"></a>
                </div>
                <div class="product_content">
                <figcaption class="figcaption">${product.name}</figcaption>
                <figcaption><i class="fa-solid fa-dollar-sign"></i>${product.price}</figcaption>
                <a href="product.html" class="btn btn-lg button_panel">Comprar</a>
                </div>
            </figure>`;

    return htmlCard;
}
</script>

<style>
@media (max-width: 768px) {
    .carousel_box {
        display: flex;
        justify-content: center;
        margin-top: 1%;
    }

    .carousel-content {
        position: absolute;
        bottom: 40%;
        left: 25%;
        z-index: 20;
        color: white;
    }

    .carousel-content>h1 {
        font-size: 1.5rem;
        color: #8fa8ff;
        text-align: center;
    }

    .carousel-content>h5 {
        font-size: 1rem;
        text-align: center;
    }
}

@media (min-width: 768px) {
    .carousel_box {
        display: flex;
        justify-content: center;
        margin-top: 1%;
    }

    .carousel-content {
        position: absolute;
        bottom: 40%;
        left: 30%;
        z-index: 20;
        color: white;
    }

    .carousel-content>h1 {
        font-size: 4rem;
        color: #8fa8ff;
        text-align: center;
    }

    .carousel-content>h5 {
        font-size: 2rem;
        text-align: center;
    }
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

.product_img>a {
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
