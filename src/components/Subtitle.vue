<template>
  <v-layout justify-center pt-8>
    <h2 data-aos="fade-up" style="color: grey">{{ skillCategory }}</h2>
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

