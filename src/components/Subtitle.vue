<template>
  <v-layout justify-center pt-8>
      <v-card-subtitle
        data-aos="fade-up"
        style="color: grey"
        >
        <h1>{{ skillCategory }}</h1>
      </v-card-subtitle>
  </v-layout>
  

</template>

<script>
export default {
  props: ['skillCategory'],
  data: () => ({
    //
  }),
};
</script>

