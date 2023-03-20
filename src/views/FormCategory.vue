<template>
    <div class="container">
        <div class="category">
            <h1 class="title">Nova categoria</h1>

            <div class="input-group mb-3">
                <input type="text" class="form-control" id="input_category"
                    placeholder="Informe o nome da nova categoria com pelo menos 2 letras...">
                <button class="btn btn_color" type="button" id="btn_save" @click="save">Salvar</button>
            </div>

        </div>

        <div class="table_category" id="table_category">
            <table class="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Status</th>
                        <th scope="col">Data de criação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="tableBody">
                    <tr v-for="(category, index) in categories" :key="category.uuid">
                        <th scope="row">{{ category.name }}</th>
                        <td>{{ category.status }}</td>
                        <td>{{ category.createdAt }}</td>
                        <td>
                            <i class="fa-solid fa-trash" title="Excluir" @click="removeCategory(index)"></i>
                            <i class="fa-solid fa-pen-to-square" title="Alterar"></i>
                            <i class="fa-solid fa-xmark" title="Desativar"></i>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">

import { Category } from '@/models/category';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormCategory',
    data() {
        return {
            categories: [] as Category[]
        }
    },
    methods: {
        save() {
            const input_category = document.getElementById("input_category") as HTMLInputElement;
            const category = new Category(input_category.value);
            this.categories.push(category)
            console.log(this.categories)
            input_category.value = ''

           
        },
        removeCategory(index: number): void {
            console.log(this.categories)
            this.categories.splice(index, 1)
            console.log(this.categories)

        }
    }
})



</script>

<style>
.container_category {
    flex-direction: column;

}

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: var(--inter);

}

.btn_color {
    background-color: #6383f7;
    border-color: #6383f7;
    border-radius: 5px;
    font-family: var(--inter);
    color: azure;

}

.title {
    margin-bottom: 3rem;
    margin-top: 2rem;
}
</style>