<template>
  <q-item
    exact
    clickable
    @click="redirectLink(link)"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: ''
    }
  },
  setup () {
    const router = useRouter()
    const redirectLink = (link) => {
      const containsRoute = router.getRoutes().filter((key) => key.name === link)
      if (containsRoute.length > 0) {
        router.push({ name: link })
      } else {
        window.open(link, '_blank', 'noreferrer')
      }
    }
    return {
      redirectLink
    }
  }
})
</script>
