<template>
    <footer class="footer">
    <div class="footer_midia">
        <img src="../assets/logo-1d225b61.svg" class="logo-white" alt="Logo" >
        <div>
          <a class="btn logo-white" href="#!" role="button"><i class="fab fa-twitter"></i></a>
          <a class="btn logo-white" href="#!" role="button"><i class="fab fa-instagram"></i></a>
          <a class="btn logo-white" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="footer_text"><a href="" class="footer_left">Promoções</a><a href="" class="footer_right">Contato</a>
        </div>
        <div class="footer_text"><a href="categorias.html" class="footer_left">Categorias</a><a href="" class="footer_right">Carrinho</a>
        </div>
        <div class="footer_text"><a href="" class="footer_left">Buscar</a><a href="" class="footer_right">Entrar</a></div>

      <section class="contact">
        <p class="contact_description">Um pouco mais sobre a Comex</p>
        <address class="contact_address">
           Rua Arlindo Nogueira, 00 <!--</br> -->
          Centro, Teresina
          <article class="contato_comex">
            <p>
              <a href="tel: +554100000000" class="tel">(41) 0000-0000</a> ou
              <a href="mailto: contato@apeperia.com" class="email">contato@apeperia.com
              </a>
            </p>
          </article>
        </address>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
})
</script>

<style scoped>

.footer_midia {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8FA8FF;
    padding-inline: 10%;
    padding-block: 5%;
    margin-top: 2rem;


}


.footer_text {
    color: #ffffff;
    display: flex;
    width: 100%;
    font-family: var(--inter);

}

.footer_left {
    display: flex;
    justify-content: end;
    width: 50%;
    margin-right: 0.5rem;
    text-decoration: none;
    color: #ffffff;
}

.footer_right {
    text-decoration: none;
    display: flex;
    justify-content: start;
    width: 50%;
    margin-left: 0.5rem;
    color: #ffffff;
}

.footer_inf {
    font-size: 0.8rem;
    color: #ffffff;
    width: 100%;
    margin-top: 1rem;
    margin-left: 0.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.contact {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-family: var(--inter);

}

.contact_description {
    margin: 1rem;
}

.contato_comex {

    margin-top: 1rem;

}

.tel {
    text-decoration: none;
    color: #ffffff;
}

.email {
    text-decoration: none;
    color: #ffffff;
}

@media(max-width: 768px) {
    .footer_midia {
        padding-block: 15%;


    }

    .footer_text {
        color: #ffffff;
        display: flex;
        width: 100%;

    }

    .footer_left {
        display: flex;
        justify-content: end;
        width: 50%;
        margin-right: 0.5rem;
    }

    .footer_right {
        display: flex;
        justify-content: start;
        width: 50%;
        margin-left: 0.5rem;
    }

    .footer_inf {
        font-size: 0.8rem;
        color: #ffffff;
        width: 100%;
        margin-top: 1rem;
        margin-left: 0.5rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}

</style>