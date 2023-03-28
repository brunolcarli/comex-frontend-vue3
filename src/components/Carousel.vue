<template>
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
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Carousel"
})

</script>

<style scoped>
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
</style>