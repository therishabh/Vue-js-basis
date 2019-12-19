<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>{{myName}}</p>
    <p>User Age : {{age}}</p>
    <button @click="changeName">Change My Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :name="myName"
          :age="age"
          @nameWasReset="myName = $event"
          :resetNameFun="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageEdit="editAge($event)"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      myName: "Rishabh",
      age: 29
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.myName = "Shikha";
      this.age = 27;
    },
    resetName() {
      this.myName = "Rishabh";
    },
    editAge(event) {
      this.age = event;
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
