<template>
  <v-app class="mt-12">
    <v-container>
      <v-layout justify-center>
        <v-card-title class="font-weight-bold">
          <h1 data-aos="fade-up">Contact</h1>
        </v-card-title>
      </v-layout>
      <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation data-aos="fade-up">
        <v-text-field
          v-model="contactForm.name"
          :rules="contactFormValidation.nameRules"
          label="Name"
          required
          color="success"
        ></v-text-field>
        <v-text-field
          v-model="contactForm.email"
          :rules="contactFormValidation.emailRules"
          label="E-mail"
          required
          color="success"
        ></v-text-field>
        <v-textarea
          v-model="contactForm.contents"
          :rules="contactFormValidation.contentsRules"
          label="Contents"
          required
          color="success"
        ></v-textarea>
        <v-btn
          :loading="contactForm.loading"
          :disabled="!contactFormValidation.valid"
          @click="sendMail()"
          block
          large
          color="success"
          class="mt-4 font-weight-bold btn"
        >Send
        </v-btn>
      </v-form>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
      >
          {{snackBar.message}}
      </v-snackbar>      
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
                
  }
</script>

<style scoped>
.bnt{
  color: white;
}
</style>
