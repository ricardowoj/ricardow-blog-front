<template>
  <q-page padding>
    <q-form
      @submit="onSubmit">
      <q-input
        filled
        lazy-rules
        label="Title"
        v-model="form.title"
        class="col-md-12"
        :rules="[val => val && val.length > 0 || 'Required field']" />
      <q-editor
        v-model="form.body"
        class="col-md-12"
        :definitions="{
          bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' }
        }" />
    </q-form>
    <div class="col-12 q-gutter-md q-mt-md">
      <q-btn
        label="Enviar"
        color="primary"
        class="float-right"
        icon="send"
        @click="onSubmit"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useNotify from 'src/composables/UseNotify'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'formEmail',
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const { notifySucess, notifyError } = useNotify()
    const form = ref({
      title: '',
      body: ''
    })
    const onSubmit = () => {
      $q.dialog({
        title: 'Send email',
        message: 'Do you confirm sending the email?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        try {
          notifySucess('Email successfully sent')
          router.push({ name: 'home' })
        } catch (error) {
          notifyError(error?.message)
        }
      })
    }
    return {
      form,
      onSubmit
    }
  }
})
</script>
