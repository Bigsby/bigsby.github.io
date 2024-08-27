<script setup lang="ts">
import ContentSection from "./components/ContentSection.vue"
import Work from "./components/Work.vue"
</script>

<template>
    <div class="app-container">
        <header>
            <h1>Bigsby</h1>
            <h4>... a software developer ...</h4>
        </header>

        <main>
            <section>
                <blockquote>IT-wise, there is virtually nothing I would mind doing. Give me new, to me, new and old.
                </blockquote>

                <ContentSection title="Hello!">
                    My name is Bruno. I'm a developer. I'm a portuguese living in Dublin, Republic of Ireland. IT-wise, I
                    try
                    everything I get my hands on, at least once, and, if I see purpose in it, I stick with it.
                </ContentSection>

                <ContentSection title="Bio">
                    I've been working as a developer since 2007. Before that, I worked as an accountant and, before that, I
                    worked in a call-centre while studying music "in the form of Jazz". When working as an accountant, that,
                    although very respectful trade, is clearly not for me, I started the journey of becoming a developer.
                    After
                    a little under a year of self-studying nights, I figured I was good enough to make a living as a
                    developer
                    and have been having (mostly) loads of fun ever since.
                </ContentSection>

                <ContentSection title="Work">
                    <Work />
                </ContentSection>


            </section>
        </main>
        <footer>footer</footer>
    </div>
</template>

<style scoped>
div.app-container {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
}

header {
    line-height: 1.5;
    flex-grow: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background-mute);
}

footer {
    flex-shrink: 0;
}

main {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

@media (min-width: 1024px) {}
</style>
