<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<h1> Build-in Directive </h1>
				<p v-text="'Some Text'"></p>
				<p v-html="'<strong>Some strong Text</strong>'"></p>
				<br>
				<br>
				<h1>Custom Directive</h1>
				<p v-highlight:background.delay="'red'">Color Apply</p>
				<hr>
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
