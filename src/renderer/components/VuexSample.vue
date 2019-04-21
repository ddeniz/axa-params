<template>
	<div>
		<h1>{{count}}</h1>
		<v-btn @click="increment" color="primary" class="mx-3">Add 1</v-btn>
    <v-btn @click="decrement" color="primary" class="mx-3">Add 2</v-btn>

	</div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
 created: function () {
      console.log('burda');
 },
 computed: mapState(["count"]),
 methods: mapActions(["increment", "decrement"])
}
</script>
