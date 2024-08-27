<script setup lang="ts">
import { ref, watchEffect } from "vue"
import type { Ref } from "vue"
import Globe from "./icons/Globe.vue"

interface Task {
    text: string
    techs: [{
        name: string
        link: string
    }]
}

interface Company {
    name: string
    link: string
    text: string
    tasks: Task[]
}

const companies: Ref<Company[]> = ref([])

watchEffect(async () => {
    companies.value = await (await fetch('data/work.json')).json()
});
</script>

<template>
    <div class="container">
        Working as a developer...full of goodies:
        <div v-for="company in  companies ">
            <h2>{{ company.name }} <a :href="company.link">
                    <Globe />
                </a></h2>
            <p v-html="company.text"></p>
            <ul class="tasks">
                <li v-for=" task  in  company.tasks ">
                    <p>{{ task.text }}</p>
                    <ul class="techs">
                        <li v-for=" tech  in  task.techs ">
                            <a :href="tech.link">{{ tech.name }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
