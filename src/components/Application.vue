<template>
	<div>
		<div v-if="auth === false">
			<Login @authorization="setAuth($event)"/>
		</div>
		<!-- <div>
			<SignUp/>
		</div> -->
		<div v-else>
			<Twitter/>
		</div>
	</div>
</template>

<script>
import Twitter from './Twitter.vue'
import Login from './Login.vue'
// import SignUp from './SignUp.vue'
export default {
	name: 'Application',
	components: {
		Twitter,
		Login,
		// SignUp
	},
	data(){
        return{
			auth: false,
        }
	},
	methods:{
		setAuth(auth){
			console.log("This got executed!!!!!!!!!!")
			this.auth = auth;
			console.log(this.auth)
		}
	},

}
</script>

