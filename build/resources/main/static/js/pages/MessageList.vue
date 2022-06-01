<template>
  <v-main class="pt-5">
    <v-layout align-content-space-around column mx-15 px-15>
      <message-form :messageAttr="message" />
      <message-row v-for="message in sortedMessages"
                   :key="message.id"
                   :message="message"
                   :editMessage="editMessage" />
    </v-layout>
  </v-main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MessageRow from 'components/messages/MessageRow.vue'
  import MessageForm from 'components/messages/MessageForm.vue'

export default {
  components: {
    MessageRow,
    MessageForm
  },
  data() {
    return {
      message: null
    }
  },
  computed: mapGetters(['sortedMessages']),
  methods: {
    editMessage(message) {
      this.message = message
    }
  }
}
</script>

<style>
</style>