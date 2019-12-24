import Vue from 'vue';
import App from './App.vue';
import Home from './Home.vue';

Vue.component('app-servers', Home);

Vue.directive('highlight', {
	bind(el, binding, vnode){
		var delay = 0;
		if(binding.modifiers['delay']){
			delay = 3000;
		}
		setTimeout(() => {
			el.style.backgroundColor = binding.value;
		}, delay)
		// el.style.backgroundColor = "green";
	}
})

export const eventBus = new Vue();

new Vue({
	el: '#app',
	render: h => h(App)
})
