<template>
    <head>
    <title>COMEX</title>

    </head>
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <img src="../assets/logo-1d225b61.svg" class="logo-white" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="fa fa-navicon" style="color:#fff; font-size:30px"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/home" class="nav-link text-light">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/category" class="nav-link text-light">Categorias</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/product" class="nav-link text-light">Produtos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/formclient" class="nav-link text-light">Clientes</RouterLink>
          </li>
        </ul>
        <form class="search-group disable_mobile">
          <input class=" input-search" type="search" placeholder="Pesquisar..." aria-label="Search" />
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
})
</script>

<style scoped>

.navbar {
    background-color: #8FA8FF;
    margin-bottom: 1rem;
    width: 100%;
}


.navbar-expand-lg {
    display: flex;
}


.nav-link {
    color: #ffffff; 
    
}

.fa-cart-shopping, .fa-user {
    color: #ffffff;
}

.search-group {
    display: flex;
    align-items: center;
}

.input-search {
    background-color: #8FA8FF;
    border-color: #ffffff;
    border-width: 0.2rem;
    border-style: solid;
    border-radius: 5%;  
    height: 2rem;
}


.input_container {
    display: flex;
    justify-content: center;
}

.nav-item {
    margin-right: 5%;
    
}

.logo-white {
    filter: invert(100%) sepia(100%) saturate(15%) hue-rotate(307deg) brightness(106%) contrast(103%);
}

@media(max-width: 768px) {
    
    
    .input_mobile {
        border-color: #8FA8FF;
        border-style: solid;   
        border-right: 0px;
        border-width: 0.2rem;
        width: 80%;
        margin: auto;  
        
    }
    
}
</style>