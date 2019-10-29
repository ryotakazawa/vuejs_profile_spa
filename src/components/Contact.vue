<template>
  <v-app class="pt-10">
    <v-container>
      <v-layout justify-center class="mb-8">
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
          class="mt-4 font-weight-bold"
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
  import { functions } from '@/plugins/firebase'

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
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .finally(() => {
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
</script>