
<template>

  <header>
    <NavBar />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <Footer />
  </footer>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Footer,
   
  }
});

</script>


