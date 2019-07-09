<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Feedback Structure</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Button type="100100" />
      <br>
      <Feedback value="123456" width="1000" />
      <Feedback value="123456" width="300" />
      <Feedback value="123456" />
    </v-content>
  </v-app>
</template>

<script>
import Button from './components/feedback/Button'
import Feedback from './components/feedback/Feedback'

export default {
  name: 'App',
  components: {
    Button,
    Feedback
  },
  data () {
    return {
      //
    }
  }
}
</script>
