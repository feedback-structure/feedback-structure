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
    </v-content>
  </v-app>
</template>

<script>
import Button from './components/feedback/Button'

export default {
  name: 'App',
  components: {
    Button
  },
  data () {
    return {
      //
    }
  }
}
</script>
