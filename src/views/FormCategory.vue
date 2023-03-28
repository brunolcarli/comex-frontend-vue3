<template>
    <div class="container">
        <form id="formCategory" @submit.prevent="save">
            <div class="category">
                <h1 class="title">Nova categoria</h1>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" id="input_category" v-model="categoryName"
                        placeholder="Informe o nome da nova categoria com pelo menos 2 letras...">
                    <button class="btn btn_color" type="submit" id="btn_save">Salvar</button>
                </div>
            </div>
        </form>

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

import type { Category } from '@/models/category';
import { createCategory } from '@/models/category';
import { defineComponent, onMounted } from 'vue';

import { ref } from 'vue';

export default defineComponent({
    name: 'FormCategory',
    
    setup() {

        const categoryName = ref("")
        let categories = ref<Category[]>([]);


        function save(): void {
            const category = createCategory(categoryName.value);
            fetch('http://localhost:3000/categorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            })
                .then(resposta => listCategories())

            categoryName.value = ''

        };

        function removeCategory(index: number): void {
            let category = categories.value[index];
            fetch(`http://localhost:3000/categorias/${category.id}`, {
                method: 'DELETE'
            })
                .then(resposta => listCategories());

        };

        function listCategories(): void {
            fetch('http://localhost:3000/categorias')
                .then(response => response.json())
                .then(result => categories.value = result);
        };

        onMounted(() => {
            listCategories();
        });

        return {
            categoryName,
            categories,
            save,
            removeCategory
        };

    },
});

</script>

<style scoped>
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