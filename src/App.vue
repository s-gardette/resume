<script setup>
// Layout imports
import Layout from "./layouts/Layout.vue";

// Component imports
import Header from "./components/Header.vue";
import Technical from "./components/Technical.vue";
import Experiences from "./components/Experiences.vue";
import Block from "./components/Base/Block.vue";
import List from "./components/Base/List.vue";
import About from "./components/About.vue";

// Data imports
import resumeData from "./content/seo/resume-FR-fr.json";
</script>

<template>
  <Layout>
    <main
      id="main"
      class="text-dark-700 my-8 md:my-12 lg:my-16 flex flex-col bg-white-200 font-body font-light text-black-500 subpixel-antialiased shadow-lg dark:bg-black-700 dark:font-normal dark:tracking-wide dark:text-white-100 screen:min-h-screen screen:max-w-screen-xl screen:px-4 screen:sm:px-6 screen:md:px-8 screen:py-10 screen:lg:py-16 screen:lg:w-10/12 screen:lg:px-16 screen:xl:px-20 print:shadow-none print:my-4 print:px-8 print:py-2 print:max-w-none print:w-full print:bg-white"
    >
      <Header
        :data="{
          name: resumeData.name,
          title: resumeData.title,
          contact: resumeData.contact,
        }"
      />

      <section class="pt-8 md:pt-10 lg:pt-12 print:pt-2">
        <About :summary="resumeData.summary" />
        <Block title="Experiences Professionnelles" level="2" class="mb-8 md:mb-10 lg:mb-12 print:mb-2">
          <Experiences :professionalExperiences="resumeData.experiences" />
        </Block>

        <Block title="Compétences" level="2" class="mb-8 md:mb-10 lg:mb-12 print:mb-2">
          <Technical :skills="resumeData.skills" />
        </Block>

        <div class="gap-4 md:gap-6 md:grid md:grid-cols-3 print:grid print:grid-cols-2 print:gap-2">
          <Block title="Langages" level="2" class="mb-6 md:mb-8 w-full print:mb-0">
            <List :data="resumeData.langages" />
          </Block>

          <Block title="Certifications" level="2" class="mb-6 md:mb-8 w-full print:mb-0">
            <List :data="resumeData.certifications" />
          </Block>

          <Block title="Loisirs" level="2" class="mb-6 md:mb-8 w-full print:mb-0 print:col-span-2">
            <List :data="resumeData.loisirs" print-compact />
          </Block>
        </div>
      </section>
    </main>
  </Layout>
</template>

<style media="print">
@page {
  size: A4;
  margin: 0.3cm;
}

body {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
</style>
