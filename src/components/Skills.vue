<template>
  <v-app class="pt-10 mb-10" style="background-color: #F2F2F2;">
    <v-container>
      <v-layout justify-center>
        <v-card-title class="font-weight-bold">
          <h1 data-aos="fade-up">Skills</h1>
        </v-card-title>
      </v-layout>

      <Subtitle skill-category="Language" />
      <v-layout
        justify-center
        data-aos="fade-up"
        data-aos-delay="150"
        row wrap>

        <v-progress-circular
          v-for="(language, i) in languages"
          :key="i"
          rotate="-90"
          size="130"
          width="13"
          :value="language.value"
          color="success"
        >
          {{ language.name }}
        </v-progress-circular>
      </v-layout>

      <Subtitle skill-category="Framework" />
      <v-layout
        justify-center
        data-aos="fade-up"
        data-aos-delay="150"
        row wrap>

        <v-progress-circular
          v-for="(framework, i) in frameworks"
          :key="i"
          rotate="-90"
          size="130"
          width="13"
          :value="framework.value"
          color="success"
        >
          {{ framework.name }}
        </v-progress-circular>
      </v-layout>

      <Subtitle skill-category="Cloud service" />
      <v-layout
        justify-center
        data-aos="fade-up"
        data-aos-delay="150"
        row wrap>

        <v-progress-circular
          v-for="(cloud, i) in clouds"
          :key="i"
          rotate="-90"
          size="130"
          width="13"
          :value="cloud.value"
          color="success"
        >
          {{ cloud.name }}
        </v-progress-circular>
      </v-layout>

      <Subtitle skill-category="Other" />
      <v-layout
        justify-center
        data-aos="fade-up"
        data-aos-delay="150"
        row wrap>

        <v-progress-circular
          v-for="(other, i) in others"
          :key="i"
          rotate="-90"
          size="130"
          width="13"
          :value="other.value"
          color="success"
        >
          {{ other.name }}
        </v-progress-circular>
      </v-layout>

    </v-container>
  </v-app>
</template>

<script>
import Subtitle from './Subtitle';

export default {
  components: {
    Subtitle
  },
  data: () => ({
    languages: [
        {
          name: 'HTML&CSS',
          start: '0',
          value: '75'
        },
        {
          name: 'JavaScript',
          start: '0',
          value: '60'
        },
        {
          name: 'Ruby',
          start: '0',
          value: '75'
        },
        {
          name: 'PHP',
          start: '0',
          value: '40'
        },
        {
          name: 'PYTHON',
          start: '0',
          value: '25'
        },                              
      ],
    frameworks: [
      {
        name: 'Ruby on rails',
        start: '0',
        value: '75'
      },
      {
        name: 'Vue.js',
        start: '0',
        value: '50'
      }
    ],
    clouds: [
      {
        name: 'AWS',
        start: '0',
        value: '70'
      },
      {
        name: 'GCP',
        start: '0',
        value: '25'
      },
    ],
    others: [
      {
        name: 'English',
        start: '0',
        value: '88'
      },
      {
        name: 'Photoshop',
        start: '0',
        value: '88'
      }
    ]
  }),
};
</script>

<style scoped>
  .v-progress-circular{
    margin: 1rem
  }
</style>
