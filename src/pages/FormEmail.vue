<template>
  <q-page padding>
    <q-form
      @submit="onSubmit">
      <q-input
        lazy-rules
        label="Title"
        v-model="form.title"
        class="col-md-12"
        :rules="[val => val && val.length > 0 || 'Required field']" />
      <q-field ref="fieldRef" v-model="form.body" label-slot borderless
        :rules="[val => (!!val && val !== '<br>') || 'Field is required']" >
        <template #control>
          <q-editor v-model="form.body" min-height="25rem" class="full-width"
            :style="fieldRef && fieldRef.hasError ? 'border-color: var(--q-negative)' : ''"/>
        </template>
      </q-field>
    </q-form>
    <div class="col-12 q-gutter-md q-mt-md">
      <q-btn
        label="Send now"
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
    const fieldRef = ref(null)
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
          await router.push({ name: 'home' })
        } catch (error) {
          notifyError(error?.message)
        }
      })
    }
    return {
      form,
      onSubmit,
      fieldRef
    }
  }
})
</script>
