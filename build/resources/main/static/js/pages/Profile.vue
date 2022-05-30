<template>
  <v-main class="pt-5">
    <v-layout justify-space-around>
      <v-flex :xs4="!$vuetify.breakpoint.xsOnly">
        <div class="title mb-3">User profile</div>
        <v-layout row justify-space-between>
          <v-flex class="px-1">
            <v-img :src="profile.userpic"></v-img>
          </v-flex>
          <v-flex class="px-1">
            <v-layout column>
              <v-flex>{{profile.name}}</v-flex>
              <v-flex>{{profile.locale}}</v-flex>
              <v-flex>{{profile.gender}}</v-flex>
              <v-flex>{{profile.email}}</v-flex>
              <v-flex>{{profile.lastVisit}}</v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  computed: mapState(['profile'])
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>