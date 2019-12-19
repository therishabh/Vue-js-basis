<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name : {{switchName()}}</p>
    <p>User Age : {{age}}</p>
    <p>User Course : {{course}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetNameFun">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "./../main";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: Number,
    course: {
      type: String,
      default: "Development"
    },
    resetNameFun: Function
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Rishabh";
      this.$emit("nameWasReset", this.name);
      // debugger;
    }
  },
  created() {
    eventBus.$on("updateAge", newAge => {
      this.age = newAge;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
