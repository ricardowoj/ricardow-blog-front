<template>
  <q-page>
    <div class="q-pa-xl row items-start q-gutter-md">
      <q-card flat class="my-card cursor-pointer hover-color">
        <q-card-section>
          <div class="row">
            <div class="col-10">
              <div class="text-h6">
                Our Changing Planet
              </div>
              <q-chip outline square color="primary" text-color="primary" icon="calendar_month" size="12px" class="no-margin">
                2019-08-31 07:05:19
              </q-chip>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </div>
            <div class="col-2">
              <q-chip square color="accent" text-color="negative" icon="computer" size="14px" class="no-margin">
                Tecnology
              </q-chip>
            </div>
          </div>
        </q-card-section>
      </q-card>
      <q-separator color="accent" style="width: 100%"/>
      <q-card flat class="my-card cursor-pointer hover-color">
        <q-card-section>
          <div class="row">
            <div class="col-10">
              <div class="text-h6">
                Our Changing Planet
              </div>
              <q-chip outline square color="primary" text-color="primary" icon="calendar_month" size="12px" class="no-margin">
                2019-08-31 07:05:19
              </q-chip>
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </div>
            <div class="col-2">
              <q-chip square color="accent" text-color="negative" icon="computer" size="14px" class="no-margin">
                Tecnology
              </q-chip>
            </div>
          </div>
        </q-card-section>
      </q-card>
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
