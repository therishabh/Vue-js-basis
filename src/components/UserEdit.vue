<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age : {{userAge}}</p>
    <button @click="editAge">Change Age</button>
    <button @click="changeAge">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from "./../main";
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      this.userAge = 30;
      this.$emit("ageEdit", this.userAge);
    },
    changeAge() {
      this.userAge = 40;
      eventBus.$emit("updateAge", this.userAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
