<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Ricardo Wojciechowski Blog
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <div class="q-pa-sm">
            <q-card flat bordered class="my-card">
              <q-video src="https://www.youtube.com/embed/_VONMkKkdf4?si=FfRQl7_TI4tqq4Vq" />
              <q-card-section>
                <div class="text-h6">Experience</div>
                <div class="text-subtitle2">by Ludovico Einaudi</div>
              </q-card-section>
            </q-card>
          </div>
        </q-item-label>
        <div class="q-pa-md q-gutter-md">
          <q-chip size="md" icon="bookmark">
            Menus Blog
          </q-chip>
        </div>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Posts',
    caption: 'My Posts',
    icon: 'mdi-blogger',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'My github',
    icon: 'mdi-github',
    link: 'https://github.com/ricardowoj?tab=repositories'
  },
  {
    title: 'E-mail',
    caption: 'Send a message',
    icon: 'email',
    route: { name: 'formEmail' }
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
