<template>
  <q-page>
    <div class="q-pa-xl row items-start q-gutter-md">
      <q-card flat class="my-card cursor-pointer hover-color card-background">
        <q-card-section>
          <div class="row">
            <div class="col-10">
              <div class="text-h6">
                Our Changing Planet
              </div>
              <q-chip outline square color="primary" text-color="primary" icon="calendar_month" size="12px"
                      class="no-margin">
                2019-08-31 07:05:19
              </q-chip>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </div>
            <div class="col-2 relative-position">
              <div class="vertical-top">
                <q-chip square color="accent" text-color="negative" icon="computer" size="14px"
                        class="no-margin shadow-post">
                  Tecnology
                </q-chip>
              </div>
              <div class="absolute-bottom">
                <q-chip square color="accent" size="12px" class="no-margin">
                  <q-avatar color="info" text-color="white">27</q-avatar>
                  <q-icon name="thumb_up" color="primary" size="xs"/>
                  <q-tooltip transition-show="rotate" transition-hide="rotate" class="bg-amber text-black shadow-4"
                             :offset="[10, 10]">LIKE
                  </q-tooltip>
                </q-chip>
                <q-chip square color="accent" size="12px">
                  <q-avatar  color="positive" text-color="white">50</q-avatar>
                  <q-icon name="draw" color="primary" size="xs"/>
                  <q-tooltip transition-show="rotate" transition-hide="rotate" class="bg-amber text-black shadow-4"
                             :offset="[10, 10]">COMMENT
                  </q-tooltip>
                </q-chip>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-separator color="accent" style="width: 100%"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
})
</script>

<style scoped>
  .shadow-post{
    box-shadow:none;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .shadow-post:after{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .shadow-post:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .card-background:hover{
    background-color: var(--q-secondary);
    -webkit-transition: background-color 1000ms linear;
    -ms-transition: background-color 1000ms linear;
    transition: background-color 1000ms linear;
  }
</style>
