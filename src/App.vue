<script setup>
import Layout from "./layouts/Layout.vue";
import jsonData from "./assets/datas/resume.json";
import Header from "./components/Header.vue";
import Portrait from "./components/Portrait.vue";
import Technical from "./components/Technical.vue";
import Block from "./components/Base/Block.vue";
import List from "./components/Base/List.vue";
import Experiences from "./components/Experiences.vue";
const resumeData = jsonData;
</script>

<template>
    <Layout>
        <main
            class="flex flex-col min-h-screen max-w-screen-xl bg-white-200 dark:bg-black-700 font-body font-light dark:font-normal text-dark-700 dark:tracking-wide dark:text-white-100 subpixel-antialiased text-black-500 lg:w-10/12 my-16 shadow-lg py-20 px-8 lg:px-24"
        >
            <Header :data="resumeData"></Header>

            <section class="flex flex-wrap pt-14">
                <div class="w-full lg:pr-16 lg:w-2/3">
                    <Block title="À propos">
                        {{ resumeData.resume.summary }}
                    </Block>
                    <Technical
                        :skills="resumeData.resume.technicalSkills"
                        class="mt-6"
                    />
                </div>
                <div class="w-full lg:w-1/3">
                    <Portrait class="hidden lg:block" />
                    <Block title="Langages">
                        <List :data="resumeData.resume.languages" />
                    </Block>
                    <Block title="Certifications">
                        <List :data="resumeData.resume.certifications" />
                    </Block>
                    <Block title="Loisirs">
                        <List :data="resumeData.resume.hobbies" />
                    </Block>
                    <Block title="Formations">
                        <List :data="resumeData.resume.education" />
                    </Block>
                </div>
            </section>
            <section>
                <Block title="Experiences Professionnelles" level="2">
                    <Experiences
                        :professionalExperiences="
                            resumeData.resume.professionalExperiences
                        "
                    />
                </Block>
            </section>
        </main>
    </Layout>
</template>

<style media="print">
@page {
    size: auto; /* auto is the initial value */
    margin: 0; /* this affects the margin in the printer settings */
}
</style>
