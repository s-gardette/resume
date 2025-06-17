<script setup>
import { ref } from 'vue'
import Layout from "./layouts/Layout.vue";
import jsonData from "./assets/datas/resume.json";
import Header from "./components/Header.vue";
import Portrait from "./components/Portrait.vue";
import Technical from "./components/Technical.vue";
import Block from "./components/Base/Block.vue";
import List from "./components/Base/List.vue";
import Experiences from "./components/Experiences.vue";
import PrintView from "./components/PrintView.vue";
import PrintResume from "./components/PrintResume.vue";

const resumeData = jsonData;
const showPrintView = ref(false);

const openPrintView = () => {
    showPrintView.value = true;
}

const closePrintView = () => {
    showPrintView.value = false;
}
</script>

<template>
    <!-- Normal view (hidden when printing) -->
    <div class="screen-only">
        <Layout @openPrint="openPrintView">
            <main
                id="main"
                class="flex flex-col screen:min-h-screen screen:max-w-screen-xl bg-white-200 dark:bg-black-700 font-body font-light dark:font-normal text-dark-700 dark:tracking-wide dark:text-white-100 subpixel-antialiased text-black-500 screen:lg:w-10/12 my-16 shadow-lg screen:py-20 screen:px-8 screen:lg:px-24"
            >
                <Header :data="resumeData"></Header>
                <section class="flex flex-wrap pt-14">
                    <div class="w-full lg:pr-16 lg:w-4/5">
                        <Block title="À propos">
                            {{ resumeData.resume.summary }}
                        </Block>
                    </div>
                    <div class="w-full lg:w-1/5">
                        <Portrait class="hidden lg:block" />
                    </div>
                </section>
                <section class="flex flex-wrap pt-4">
                    <Block title="Experiences Professionnelles" level="2">
                        <Experiences
                            :professionalExperiences="
                                resumeData.resume.professionalExperiences
                            "
                        />
                    </Block>
                </section>
                <section class="flex flex-wrap pt-4">
                    <div class="w-full lg:pr-16 lg:w-2/3">
                        <Technical
                            :skills="resumeData.resume.technicalSkills"
                            class="mt-6"
                        />
                    </div>
                    <div class="w-full lg:w-1/3">

                        <Block title="Langages">
                            <List :data="resumeData.resume.languages" />
                        </Block>
                        <Block title="Certifications">
                            <List :data="resumeData.resume.certifications" />
                        </Block>
                        <Block title="Loisirs">
                            <List :data="resumeData.resume.hobbies" />
                        </Block>
                    </div>
                </section>

            </main>
        </Layout>

        <!-- Print View Overlay (for manual preview) -->
        <PrintView 
            :visible="showPrintView" 
            :data="resumeData" 
            @close="closePrintView" 
        />
    </div>

    <!-- Print-only view (shown only when printing with Ctrl+P) -->
    <div class="print-only">
        <PrintResume :data="resumeData" />
    </div>
</template>

<style>
/* Hide print view on screen, show normal view */
@media screen {
    .print-only {
        display: none !important;
    }
    .screen-only {
        display: block !important;
    }
}

/* Hide normal view when printing, show print view */
@media print {
    .screen-only {
        display: none !important;
    }
    .print-only {
        display: block !important;
    }
}
</style>
