
<template>
  <body>
    <NavBar />

    <FormCategory />
    <!-- <ProductForm /> -->

    <!-- <Home /> -->
    <Footer />
  </body>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import FormCategory from './views/FormCategory.vue'
// import Home from './views/ProductForm.vue'
// import ProductForm from './views/ProductForm.vue'
import Home from './views/Home.vue'
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Footer,
    FormCategory,
    // ProductForm,
    Home
  }
});

</script>


