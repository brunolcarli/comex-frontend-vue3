<template>
    
    <main>
       <div class="product container">
           <figure class="panel">
               <img src="../assets/img/product1.jpg" alt="Placa mãe" class="img_sell">
               <figcaption class="text_title">Placa Mãe Asus TUF GAMING B550M-PLUS AMD AM4 DDR4 mATX</figcaption>
           </figure>
           <div class="star">
               <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                   class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
               <p class="mx-2">764 avaliações de cliente</p>
           </div>
       </div>
   
      
       <div class="information">
           <div class="content">
               <p class="line"></p>
               <div class="price">
                   <i class="fa-sharp fa-solid fa-tag">1.500</i>
                   <button type="button" class="btn btn-primary btn-lg btn_color">Comprar</button>
               </div>
               <div class="input-group cep_container ">
                   <input type="text" class="form-control input_style  " placeholder="Digite o seu CEP"
                       aria-label="Recipient's username" aria-describedby="button-addon2">
                   <div class="input-group-append">
                       <button class="btn btn-outline-primary freight btn-sm " type="button"
                           id="button-addon2">Calcular
                           frete</button>
                   </div>
               </div>
               <p class="line"></p>
           </div>
       </div>
       
       <div class="about_item">
           <div class="item">
               <p>Sobre este item</p>
           </div>
           <ul class="list-group list-group-flush">
               <li class="list-group-item">Placa-mãe gaming micro ATX AMD B550 (Ryzen AM4) com PCIe 4.0, M.2 duplo, 10
                   fases de alimentação com
                   DrMOS, Rede de 2,5 Gb, HDMI, DisplayPort, SATA 6 Gbps, USB 3.2 Gen 2 Tipo-A e Tipo-C e suporte a
                   iluminação RGB Aura Sync</li>
               <li class="list-group-item">Soquete AMD AM4: pronto para processadores AMD Ryzen de 3ª geração - Solução
                   de energia aprimorada:
                   8+2 fases de alimentação, conector ProCool, componentes TUF de nível militar e VRM Digi+ para máxima
                   durabilidade</li>
               <li class="list-group-item">Refrigeração ampla: dissipadores de calor no VRM, dissipador de calor
                   sem ventoinha no PCH,
                   dissipador de calor M.2, header de ventoinha híbridos e utilitário Fan Xpert 2+ - Conectividade de
                   última geração: suporte para PCIe 4.0 M.2, USB 3.2 Gen 2 Tipo-A e Tipo-C</li>
               <li class="list-group-item">Feita para jogos on-line: tecnologia de Rede de 2,5 Gb, TUF LANGuard e
                   TurboLAN - Codec Realtek
                   S1200A: qualidade de áudio cristalina sem precedentes, com taxa de sinal-ruído de 108 dB para saída
                   estéreo e SNR de 103 dB para entrada</li>
               <li class="list-group-item">Microfone com cancelamento de ruído por AI: fornece comunicação de voz
                   cristalina no jogo</li>
           </ul>
       </div>
   
   </main>
   

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'BuyProduct',
  components: {
    NavBar,
    Footer,
   
  }
});

</script>

<style>

.line {
    border-bottom: 1px solid  #8FA8FF;
    padding-bottom: 1.5rem;

}

.btn_color {
    background-color: #6383f7;
    border-color: #6383f7;
    border-radius: 5px;
    font-family: var(--inter);


}

.panel {
    display: flex;
    flex-direction: column; 
    align-items: center;
    border-color: #8FA8FF;
    border-style: solid;    
    border-width: 0.2rem;
    border-radius: 5px;
    width: 90%; 
    height: 10%; 
    margin: 0.5rem;
    font-family: var(--inter);

}

.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.img_sell {
    width: 100%;
    height: 100%;
}

.text_title {
    margin-left: 1rem;
    margin-right: 1rem; 
    text-align: center;
    margin-bottom: 1rem;
    font-family: var(--inter);

}

.star {
    color: #b8860b;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-family: var(--tight)

}

.information {
    display: flex;
    justify-content: center;

}

.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.price {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1.5rem;

}

.cep_container {
    margin-top: 2rem;

}

.input_style {
    border-color: #8FA8FF;
    border-radius: 5px;
    border-style: solid;    
    border-width: 0.2rem;
    height: 2rem;

}

.freight {

    background-color: #8FA8FF;
    border-color: #8FA8FF;
    border-radius: 5px;
    border-style: solid;    
    border-width: 0.2rem;
    height: 2rem;
    color: #FFFFFF;
    font-family: var(--inter);
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%;

}


.item {
    background-color: #8FA8FF;

    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    font-family: var(--black)


}

.list-group-item {
    font-family: var(--inter);
}

.about_item {
    margin-top: 2rem;
    border-color: #8FA8FF;
    border-style: solid;    
    border-width: 0.2rem;
    border-radius: 5px;

    margin-left: 2rem;
    margin-right: 2rem; 
    text-align: justify;
    line-height: 125%


}
</style>