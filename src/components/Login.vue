<template>

	<div class="flex items-center justify-center h-screen flex-col">
		<div class="h-12 w-12">
			<img src="../../public/twitterlogo.png"/> 
		</div>
		<form v-on:submit.prevent="compare" class="mt-6 content-center bg-white shadow-md rounded px-12 pt-8 pb-10 flex flex-col">
			<div class="mb-4">
			<label class="block text-grey-darker text-sm font-bold mb-2" for="username">
				Username
			</label>
			<input v-model="user.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" value="arc_arnob" placeholder="Username">
			</div>
			<div class="mb-6">
			<label class="block text-grey-darker text-sm font-bold mb-2" for="password">
				Password
			</label>
			<input v-model="user.password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" value="qwerty">
			<p class="text-red text-xs italic">Please choose a password.</p>
			</div>
			<div class="flex items-center justify-between">
			
			<button @click='passEvent' type="submit" class="hover:bg-lighter justify-between text-sm text-blue h-9 px-4 rounded-full border-2 border-blue border-outline">
                    Sign In
            </button> 
			
			<a class="inline-block align-baseline text-dark text-sm hover:text-blue-darker" href="#">
				Forgot Password?
			</a>
			</div>
		</form>
	</div>
  
</template>

<script>
export default {
	name:"Login",
	data(){
		return{
			users:[
				{'username': 'arc_arnob', password:'qwerty'},
			],
			user:{username:'',
				password:'',}
		}
	},
	methods:{
		setAuth(){
			this.auth = true;
		},
		// compare username and password
		compare(){
			var user = this.user;
			console.log(user);
			for (var i = 0; i < this.users.length; i++) {
				if(user.username == this.users[i].username && user.password == this.users[i].password){
					this.setAuth();
					this.$router.push({
						path: '/application',
					});
					
				}
			}
		},
		passEvent(){
			console.log('passEvent');
			this.$emit('authorization', this.auth)
		}

	}
}
</script>

<style src="..\assets\css\tailwind.css"/>