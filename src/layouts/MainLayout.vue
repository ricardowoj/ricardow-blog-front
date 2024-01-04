<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-secondary">
          <div class="row">
            <div class="q-mr-sm">Ricardo Wojciechowski</div>
            <img src="/src/assets/brasil-icon.png" class="no-margin" style="max-width: 30px;"/>
            <img src="/src/assets/poland-icon.png" class="no-margin" style="max-width: 30px;"/>
            <img src="/src/assets/european-icon.png" class="no-margin" style="max-width: 30px;"/>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :style="getCssDrawer">
      <q-list>
        <q-item-label header>
          <div class="row justify-center q-pa-sm">
            <img class="col-12 circular--square" src="/src/assets/ricardo.jpeg" />
            <div class="col-12 text-secondary justify-center q-mt-md">
              <h5 class="no-margin">Software Engineer</h5>
            </div>
            <div class="col-12 text-secondary">
              <div class="row">
                <p class="no-margin" style="margin-top: 2px !important;">Dev living in Cork/Ireland</p>
                <img src="/src/assets/ireland-icon.png" class="no-margin" style="max-width: 20px;"/>
              </div>
            </div>
          </div>
        </q-item-label>
        <div class="q-pa-md q-gutter-md">
          <q-chip outline icon="bookmark" color="secondary" text-color="secondary" class="q-ml-lg"
                  style="font-size: 16px;">
            Menus Blog
          </q-chip>
        </div>

        <EssentialLink v-for="link in essentialLinks" :key="link" v-bind="link" class="q-ml-md"/>
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
import { colors } from 'quasar'

const linksList = [
  {
    title: 'Posts',
    caption: 'My Posts',
    icon: 'mdi-blogger',
    link: 'home'
  },
  {
    title: 'Github',
    caption: 'My github',
    icon: 'mdi-github',
    link: 'https://github.com/ricardowoj?tab=repositories'
  },
  {
    title: 'linkedin',
    caption: 'My linkedin',
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/ricardo-wojciechowski'
  },
  {
    title: 'Message',
    caption: 'Send a message',
    icon: 'email',
    link: 'formEmail'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const { getPaletteColor } = colors
    const getCssDrawer = 'background-color:' + getPaletteColor('primary')

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      getCssDrawer
    }
  }
})
</script>
<style>
.circular--square {
  width: 160px;
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
</style>
