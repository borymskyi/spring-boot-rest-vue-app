<template>
  <v-card class="my-2">
    <v-card-text class="text--primary">
      <i>({{ message.id }})</i>
      {{ message.text }}
    </v-card-text>
    <media v-if="message.link" :message="message"></media>
    <v-card-actions>
      <v-btn value="Edit" @click="edit" small elevation="2" rounded>Edit</v-btn>
      <v-btn @click="del" small elevation="2" rounded>
        <v-icon>delete_outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<<script>
import { mapActions } from 'vuex'
import Media from 'components/media/Media.vue'
export default {
  props: ['message', 'editMessage'],
  components: { Media },
  methods: {
    ...mapActions(['removeMessageAction']),
    edit() {
      this.editMessage(this.message)
    },
    del() {
      this.removeMessageAction(this.message)
    }
  }
}
</script>

<style>
</style>


<!--
<template>
    <v-card class="my-2">
      <v-card-text class="text--primary">
        <i>({{ message.id }})</i> {{ message.text }}
      </v-card-text>
        <v-card-actions>
          <v-btn value="Edit" @click="edit" small elevation="2" rounded>Edit</v-btn>
          <v-btn @click="del" small elevation="2" rounded>
            <v-icon>delete_outline</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
</template>

-->
