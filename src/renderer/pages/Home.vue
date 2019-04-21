<template>
   <v-app>
      <v-content>
          <hello-world></hello-world>
      </v-content>
    </v-app>
</template>

<script>
import HelloWorld from './../components/HelloWorld';
export default {
  name: 'home',
  components: { HelloWorld },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
  },
};
</script>

<style>
 
</style>
