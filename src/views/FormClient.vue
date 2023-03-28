<template>
    <div class="container container_client">
        <div class="product w-75">
            <h1 class="title">Dados do cadastro</h1>
            <h4 class="title_data">Dados pessoais</h4>
            <form id="form_client" @submit.prevent="saveClient">
                <div class="register">
                    <div>
                        <label for="client_name">Nome Completo:</label>
                        <input type="text" class="form-control" id="client_name" name="client_name" data-tipo="client_name"
                            minlength="2" required v-model="client.name" @blur="validateClientName">
                        <span class="message_error">Digite seu nome completo.</span>
                    </div>
                    <div>
                        <label for="client_cpf">CPF:</label>
                        <input type="text" class="form-control" id="client_cpf" name="client_cpf" data-tipo="client_cpf"
                            required v-model="client.cpf" @blur="validateClientCPF">
                        <span class="message_error">Cadastre um CPF válido</span>
                    </div>
                    <div>
                        <label for="client_birth_date">Nascimento:</label>
                        <input type="date" class="form-control" id="client_birth_date" name="client_birth_date"
                            data-tipo="client_birth_date" v-model="client.birth">
                        <span class="message_error">Digite uma data de nascimento válida</span>
                    </div>
                    <div>
                        <label for="client_email">E-mail:</label>
                        <input type="email" class="form-control" id="client_email" name="client_email"
                            data-tipo="client_email" required v-model="client.email" @blur="validateClientEmail">
                        <span class="message_error">Digite um e-mail válido</span>
                    </div>
                    <div>
                        <label for="client_contact">Contato:</label>
                        <input type="tel" class="form-control" placeholder="(00) 0000-0000" id="client_contact"
                            name="client_contact" data-tipo="client_contact" v-model="client.contact" @keyup="contactMask">
                        <span class="message_error">Digite um telefone válido</span>
                    </div>

                </div>


                <h4 class="title_address">Endereço</h4>
                <div class="address">
                    <label for="client_cep">CEP:</label>
                    <div>
                        <input type="text" class="form-control" id="client_cep" name="client_cep" placeholder="00000-000"
                            data-tipo="client_cep" required v-model="client.address.cep" @keyup="runCepMask">
                        <button class="btn btn_color " type="button" id="btn_cep"
                            @click="validateClientCEP">Pesquisar</button>
                        <span class="message_error">CEP não encontrado.</span>
                        <div id="erro"></div>
                    </div>
                    <div>
                        <label for="client_address">Endereço:</label>
                        <input type="text" class="form-control" id="client_address" name="client_address"
                            data-tipo="client_address" required v-model="client.address.address">
                        <span class="message_error">Endereço não encontrado.</span>
                    </div>
                    <div>
                        <label for="client_number">Número:</label>
                        <input type="text" class="form-control" id="client_number" name="client_number"
                            data-tipo="client_number" v-model="client.address.number">
                        <span class="message_error">Digite um número válido.</span>
                    </div>
                    <div>
                        <label for="client_complement">Complemento:</label>
                        <input type="text" class="form-control" id="client_complement" name="client_complement"
                            data-tipo="client_complement" v-model="client.address.complement">
                        <span class="message_error">Digite um complemento.</span>
                    </div>
                    <div>
                        <label for="client_district">Bairro:</label>
                        <input type="text" class="form-control" id="client_district" name="client_district"
                            data-tipo="client_district" required v-model="client.address.district">
                        <span class="message_error">Bairro não encontrado.</span>
                    </div>
                    <div>
                        <label for="client_city">Cidade:</label>
                        <input type="text" class="form-control" id="client_city" name="client_city" data-tipo="client_city"
                            required v-model="client.address.city">
                        <span class="message_error">Cidade não encontrada.</span>
                    </div>
                    <div>
                        <label for="client_state">UF:</label>
                        <input type="text" class="form-control" id="client_state" name="client_state"
                            data-tipo="client_state" required v-model="client.address.state">
                        <span class="message_error">UF não encotrado.</span>
                    </div>
                </div>
                <div class="input_btn">
                    <button type="submit" class="btn form_btn">Salvar</button>

                </div>
            </form>


        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Client } from '@/models/client';
import { createClient } from '@/models/client';


export default defineComponent({
    name: 'FormClient',

    setup() {
        let client = ref<Client>(createClient('', '', new Date(), '', ''));

        function saveClient(): void {
            fetch('http://localhost:3000/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client.value)
            })
                .then(resposta => {
                    client.value = createClient('', '', new Date(), '', '');
                    alert(`Cliente ${client.value.name} cadastrado com sucesso.`);

                })
        }

        function validateClientName(event: Event) {
            let input = event.target as HTMLInputElement;
            let value = client.value.name;
            if (!value) {
                setInputError(input, "Digite seu nome completo.");
                return;
            }
            if (value.length < 2) {
                setInputError(input, "O nome digitado deve ter pelo menos 2 caracteres.");
                return;

            }
            setInputError(input, "");
        }

        function setInputError(input: HTMLInputElement, error: string) {
            let parent = input.parentElement as HTMLElement;
            (parent.querySelector('.message_error') as HTMLElement).innerHTML = error;

            if (!error) {
                parent.classList.remove('input_container_invalid');
            } else {
                parent.classList.add('input_container_invalid');
            }

        }

        function validateClientCPF(event: Event) {
            let input = event.target as HTMLInputElement;
            let value = client.value.cpf;
            if (!value) {
                setInputError(input, "O campo de CPF não pode estar vazio.");
                return;
            }
            const formatCPF = input.value.replace(/\D/g, '')
            if (formatCPF.length < 11) {
                setInputError(input, "O cpf digitado deve ter 11 caracteres.");
                return;
            }

            let msg = validateCPF(input);
            setInputError(input, msg);
        }

        function validateCPF(input: HTMLInputElement): string {
            const formatCPF = input.value.replace(/\D/g, '');
            let msg = '';
            if (repeatedNumber(formatCPF) || !checkCpf(formatCPF)) {
                msg = 'O CPF digitado não é válido'
            }
            return msg;
        }

        function repeatedNumber(cpf: String): boolean {
            let arrayCPF = cpf.split('');
            let val = '';
            let lastVal = '';
            for (let index = 0; index < arrayCPF.length; index++) {
                if (lastVal === '') {
                    lastVal = arrayCPF[index];
                }
                val = arrayCPF[index];

                if (lastVal != val) {
                    return false;
                }
                lastVal = val;

            }
            return true;

        }

        function checkCpf(cpf: string) {
            const multiplier = 10;

            return digitCheck(cpf, multiplier);
        }

        function digitCheck(cpf: string, multiplier: number): boolean {
            if (multiplier >= 12) {
                return true;
            }
            let initialMultiplier = multiplier;
            let sum = 0;
            const cpfNoDigits = cpf.substr(0, multiplier - 1).split('') as String[];
            const verifyingDigit: number = +cpf.charAt(multiplier - 1);

            for (let count = 0; initialMultiplier > 1; initialMultiplier--) {
                let digit: number = +cpfNoDigits[count];
                sum = sum + digit * initialMultiplier;
                count++;
            }

            if (verifyingDigit == confirmDigit(sum)) {
                return digitCheck(cpf, multiplier + 1);
            }

            return false;
        }

        function confirmDigit(sum: number): number {
            let rest = sum % 11;
            if (rest >= 2) {
                return 11 - rest;
            }
            else {
                return 0;
            }
        }

        function validateClientEmail(event: Event) {
            let msg = '';
            let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let input = event.target as HTMLInputElement;
            let value = input.value;
            if (!value) {
                setInputError(input, "O campo de email não pode estar vazio.");
                return;
            }

            if (!input.value || !re.test(input.value)) {
                msg = 'O email digitado não é válido';
            }
            setInputError(input, msg);
        }

        function validateClientCEP(event: Event) {
            let input = event.target as HTMLInputElement;
            let value = client.value.address.cep;
            if (!value) {
                setInputError(input, "O campo de CEP não pode estar vazio.");
                return;
            }
            if (value.length < 8) {
                setInputError(input, "O CEP precisa ter ao menos 8 caracteres.");
                return;
            }
            setInputError(input, '');
            searchAddress();

        }

        async function searchAddress() {
            let cep = client.value.address.cep;
            let errorMessage = document.getElementById('erro') as HTMLElement;
            errorMessage.innerHTML = "";
            try {
                let queryCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                let queryCepJson = await queryCep.json();
                if (queryCepJson.erro) {
                    throw Error('CEP inexistente!');
                }
                client.value.address.address = queryCepJson.logradouro;
                client.value.address.district = queryCepJson.bairro;
                client.value.address.city = queryCepJson.localidade;
                client.value.address.state = queryCepJson.uf;

            } catch (erro) {
                errorMessage.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
            }
        }

        function cepMask(value: string): string {
            if (!value) return "";
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            value = value.replace(/(-\d{3})\d+?$/, '$1');
            return value;
        }

        function runCepMask(event: KeyboardEvent): void {
            let input = event.target as HTMLInputElement;
            input.value = cepMask(input.value);
        }

        function contactMask(event: KeyboardEvent): void {
            let input = event.target as HTMLInputElement;
            input.value = phoneMask(input.value);
        }


        function phoneMask(value: string): string {
            if (!value) return "";
            value = value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, "($1) $2");
            value = value.replace(/(\d)(\d{4})$/, "$1-$2");
            return value;

        }



        return {
            client,
            saveClient,
            validateClientName,
            validateClientCPF,
            validateClientCEP,
            validateClientEmail,
            runCepMask,
            contactMask

        }
    }

})



</script>

<style scoped>
.address_cep {
    display: flex;
}


.container_client {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: #8FA8FF;
    font-family: var(--inter);
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

.address {
    position: relative;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
}

.container_client {
    display: flex;
    justify-content: center;
}

.title_data {
    margin-bottom: 2rem;
}

.title_address {
    margin-bottom: 2rem;
    margin-top: 2rem;
}

.btn_color {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #6383f7;
    border-color: #6383f7;
    border-radius: 5px;
    font-family: var(--inter);
    color: azure;
    width: 100%;

}

.message_error {
    display: none;
}

.input_container_invalid .message_error {

    display: block;

}
</style>