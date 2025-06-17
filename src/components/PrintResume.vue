<template>
  <div class="print-resume bg-white text-black font-sans max-w-none mx-auto p-6">
    <!-- Header Section -->
    <header class="text-center mb-3">
      <h1 class="text-2xl font-bold mb-0.5">{{ data.infos.firstName }} {{ data.infos.lastName }}</h1>
      <h2 class="text-base text-gray-700 mb-2">{{ data.infos.job }}</h2>
      <div class="flex justify-center items-center text-xs space-x-3 flex-wrap">
        <span><a :href="`tel:${data.infos.phone}`">{{ data.infos.phone }}</a></span>
        <span><a :href="`mailto:${data.infos.email}`">{{ data.infos.email }}</a></span>
        <span><a :href="data.infos.links.linkedin" target="_blank">{{ data.infos.links.linkedin }}</a></span>
        <span><a :href="data.infos.links.github" target="_blank">{{ data.infos.links.github }}</a></span>
      </div>
    </header>

    <!-- About Section -->
    <section class="mb-3">
      <h3 class="text-base font-semibold mb-1 border-b border-gray-300 pb-0.5">À propos</h3>
      <p class="text-xs leading-relaxed text-justify">{{ data.resume.summary }}</p>
    </section>

    <!-- Professional Experience -->
    <section class="mb-3">
      <h3 class="text-base font-semibold mb-2 border-b border-gray-300 pb-0.5">Expériences Professionnelles</h3>
      <div class="space-y-2">
        <div v-for="exp in data.resume.professionalExperiences" :key="exp.company" class="break-inside-avoid">
          <div class="flex justify-between items-start mb-0.5">
            <div>
              <h4 class="font-semibold text-sm">{{ exp.company }}</h4>
              <p class="text-xs text-gray-700">{{ exp.position }}</p>
            </div>
            <span class="text-xs font-medium">{{ exp.start_date }} - {{ exp.end_date }}</span>
          </div>
          <ul class="text-xs list-disc list-inside space-y-0 ml-2">
            <li v-for="resp in exp.responsibilities" :key="resp">{{ resp }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="mb-3">
      <h3 class="text-base font-semibold mb-2 border-b border-gray-300 pb-0.5">Compétences Techniques</h3>
      <div class="grid grid-cols-4 md:grid-cols-4 gap-3">
        <div v-for="(skillGroup, category) in data.resume.technicalSkills" :key="category" class="break-inside-avoid">
          <h4 class="font-semibold text-xs mb-1">{{ category }}</h4>
          <div class="space-y-0">
            <div v-for="(level, skill) in skillGroup" :key="skill" class="text-xs">
              <span>{{ skill }}: {{ level }}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages, Certifications, Formation -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
      <!-- Languages -->
      <section>
        <h3 class="text-base font-semibold mb-1 border-b border-gray-300 pb-0.5">Langues</h3>
        <div class="space-y-1">
          <div v-for="(desc, lang) in data.resume.languages" :key="lang">
            <h4 class="font-semibold text-xs">{{ lang }}</h4>
            <p class="text-xs text-gray-700 leading-tight">{{ desc }}</p>
          </div>
        </div>
      </section>

      <!-- Certifications -->
      <section>
        <h3 class="text-base font-semibold mb-1 border-b border-gray-300 pb-0.5">Certifications</h3>
        <div class="space-y-0">
          <div v-for="(cert, year) in data.resume.certifications" :key="year" class="text-xs">
            <span class="font-semibold">{{ year }}:</span> {{ cert }}
          </div>
        </div>
      </section>

      <!-- Formation -->
      <section>
        <h3 class="text-base font-semibold mb-1 border-b border-gray-300 pb-0.5">Formation</h3>
        <div class="space-y-0">
          <div v-for="(edu, year) in data.resume.education" :key="year" class="text-xs">
            <span class="font-semibold">{{ year }}:</span> {{ edu }}
          </div>
        </div>
      </section>
    </div>

    <!-- Hobbies -->
    <section class="mt-3">
      <h3 class="text-base font-semibold mb-1 border-b border-gray-300 pb-0.5">Loisirs</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-for="(desc, hobby) in data.resume.hobbies" :key="hobby">
          <h4 class="font-semibold text-xs">{{ hobby }}</h4>
          <p class="text-xs text-gray-700 leading-tight">{{ desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
@media print {
  .print-resume {
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0.3cm !important;
    font-size: 11pt !important;
    line-height: 1.2 !important;
  }
  
  @page {
    margin: 0.8cm;
  }
  
  .break-inside-avoid {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  
  section {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
    line-height: 1.1 !important;
  }
  
  p, li {
    line-height: 1.2 !important;
  }
}

@media screen {
  .print-resume {
    max-width: 210mm;
    min-height: 297mm;
    margin: 2rem auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
  }
}
</style> 