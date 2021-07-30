<template>
    <div  class="flex container h-screen w-full">
      <!--- Side Nav --->
      <div class="lg:w-1/5 border-r border-lighter lg:px-6 py-2 flex flex-col">
        <!-- Create a button -->
        <button class="h-12 w-12 hover:bg-lightblue text=3xl rounded-full text-blue">
          <i class="fab fa-twitter"></i>
        </button>
        <div>
          <button v-for="tab in tabs" @click="id = tab.id" v-bind:key="tab" :class="`flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
          <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
          <p @click="page=tab.id" class="text-lg font-semibold hidden lg:block">{{tab.title}}</p>
          </button>
        </div>
        <button class="text-white hover:bg-darkblue bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3"> 
          <p class="hidden lg:block">Tweet</p>
          <i class="fas fa-plus lg:hidden"></i>
        </button>

        <div class="w-full relative p-3">
          <button class="flex items-center w-full hover:bg-lightblue rounded-full p-2">
            <i class="fas fa-user"></i>
            <div class="hidden lg:block ml-4">
              <p class="text-sm font-bold"> Arnob </p>
              <p class="text-sm">@arc_arnob </p>
            </div>
            <i class="hidden lg:block fas fa-caret-down ml-auto" @click="dropDownActive = !dropDownActive"></i>
          </button>
          
          <div v-if="dropDownActive === true" class="absolute bottom-0 left-0 bg-light w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
              <button @click="dropDownActive = false" class="flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
              <i class="fas fa-user"></i>
              <div class="ml-4">
                <p class="text-sm font-bold"> Arnob </p>
                <p class="text-sm">@arc_arnob </p>
              </div>
              <i class="fas fa-check ml-auto test-blue"></i>
              </button>
            <button @click="dropDownActive = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
            Add an existing account
            </button>
			<router-link router-link :to="{ path: '/' }">
			<button @click="dropDownActive = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm">
				Logout @arc_arnob
			</button>
			</router-link>

          </div>
        </div>

      </div>

      
      <!-- Tweets -->
      <!-- Tweet Page -->
        <div v-if="page === `home`" class="w-full md:w-1/2 h-screen overflow-y-scroll">
          <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
            <h1 class="text-xl font-bold">Home</h1>
            <i class="far fa-star text-xl text-blue"></i>
          </div>
          <div class="px-5 py-3 border-b-8 border-lighter flex">
            <div class="flex-none">
              <i  class="text-xl fas fa-user p-3 flex-none w-12 h-12 rounded-full"></i>
            </div>
            <form v-on:submit.prevent="postNewTweet" class="w-full px=4 relative">
              <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
              <div class="flex-centre">
                <i class="text-lg text-blue mr-4 far fa-image"></i>
                <i class="text-lg text-blue mr-4 fas fa-film"></i>
                <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
                <i class="text-lg text-blue mr-4 far fa-smile"></i>
              </div>
              <button type="submit" class=" ml-auto justify-between text-sm text-blue h-9 px-4 rounded-full border-2 border-blue absolute bottom-0 right-0">
                    Tweet
              </button>          
            </form>  
          </div>


          <!--- MY TWEETS -->
          <div v-for="tweet in tweets" v-bind:key="tweet" class=" hover:bg-lightest w-full flex p-4 border-b border-lighter">
              <!-- Profile Picture -->
              <div class="flex-none">
                <i  class="text-xl fas fa-user p-3 flex-none w-12 h-12 rounded-full"></i>
              </div>
              <div class="w-full">
                <div class="flex items-center w-full">
                  <p class="font-semibold">Arnob</p>
                  <p class="text-sm text-dark ml-2">arc_arnob</p>
                  <p class="text-sm text-dark ml-2">0 sec</p>
                  <i class="fas fa-angle-down text-lg text-dark ml-auto"></i>
                </div>
                <p class="py-2">
                  {{ tweet.content }}
                </p>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center text-sm text-dark">
                    <i class="far fa-comment mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-retweet mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-heart mr-3"></i>
                    <p> 1 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-share-square mr-3"></i>
                  </div>
              </div>
              </div>
          </div>


          <!--Tweets from people -->
          <div v-for="follow in following" v-bind:key="follow" class=" hover:bg-lightest w-full flex p-4 border-b border-lighter">
              <!-- Profile Picture -->
              <div class="flex-none">
                <i  class="text-xl fas fa-user p-3 flex-none w-12 h-12 rounded-full"></i>
              </div>
              <div class="w-full">
                <div class="flex items-center w-full">
                  <p class="font-semibold">{{follow.name}}</p>
                  <p class="text-sm text-dark ml-2">{{follow.handle}}</p>
                  <p class="text-sm text-dark ml-2">{{follow.time}}</p>
                  <i class="fas fa-angle-down text-lg text-dark ml-auto"></i>
                </div>
                <p class="py-2">
                  {{ follow.tweet }}
                </p>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center text-sm text-dark">
                    <i class="far fa-comment mr-3"></i>
                    <p> {{ follow.comments }} </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-retweet mr-3"></i>
                    <p> {{ follow.retweets }} </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-heart mr-3"></i>
                    <p> {{ follow.like }} </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-share-square mr-3"></i>
                  </div>
              </div>
              </div>
          </div>

        </div>


      <!-- Profile Page -->
      <div v-else class="w-full md:w-1/2 h-screen overflow-y-scroll">
          <div class="px-5 py-3 border-b border-lighter flex items-center">
            <i class="fas fa-arrow-left text-xl text-blue p-2"></i>
            <div class="ml-2">
              <h1 class="text-xl font-bold">Arnob</h1>
              <h1 class="text-sm">{{tweets.length}}</h1>
            </div>
          </div>
          <div class="px-5 py-3 border-b-8 border-lighter flex">
            <!-- <div class="flex-none">
              <i  class="text-xl fas fa-user p-3 flex-none w-12 h-12 rounded-full"></i>
            </div> -->
            <div class="w-full relative">
              <img src="..\..\public\tweeimg.jpg" class="mt-3 pb-3 w-full focus:outline-none"/>
              <div>
                <p class="text-lg font-bold">Arnob</p>
                <p class="text-sm text-dark">@arc_arnob</p>
                <p class="text-lg  mt-5">Why?</p>
              </div>
              <button type="submit" class=" ml-auto justify-between text-sm text-blue h-9 px-4 rounded-full border-2 border-blue absolute bottom-0 right-0">
                    Edit Profile
              </button>
              <div class="flex-centre">
                <div v-for="tab in profileTabs" v-bind:key="tab">
                  <i :class="`${ tab.icon } text-lg text-dark mr-2 float-left ml-2`"></i>
                  <p class="text-dm text-dark hidden lg:block float-left">{{tab.title}}</p>
                </div>
              </div>
              <br>
              <div class="flex w-full">
                <div>
                  <p class="text-lg font-bold mr-2 ml-2 float-left">89</p>
                  <p class="text-lg text-dark hidden lg:block float-left">Following</p>
                  <p class="text-lg font-bold mr-2 float-left ml-2">37</p>
                  <p class="text-lg text-dark hidden lg:block float-left">Followers</p>
                </div>
              </div>                  
            </div>
          </div>

          <!-- Links -->
          <div class="mt-2 flex justify-center flex-row">
            <button @click="tabPressed = '0'" :class="`${tabPressed === '0' ? 'text-blue' : ''} hover:bg-lightblue rounded-full text-lg font-bold text-dark align-middle p-5`">Tweets</button>
            <button @click="tabPressed = '1'" :class="`${tabPressed === '1' ? 'text-blue' : ''} hover:bg-lightblue rounded-full text-lg font-bold text-dark align-middle p-5`">Tweets & Replies</button>
            <button @click="tabPressed = '2'" :class="`${tabPressed === '2' ? 'text-blue' : ''} hover:bg-lightblue rounded-full text-lg font-bold text-dark align-middle p-5`">Media</button>
            <button @click="tabPressed = '3'" :class="`${tabPressed === '3' ? 'text-blue' : ''} hover:bg-lightblue rounded-full text-lg font-bold text-dark align-middle p-5`">Likes</button>
          </div>
                 


          <!--- MY TWEETS -->
          <div class="mt-1">
          <div v-for="tweet in tweets" v-bind:key="tweet" class="relative hover:bg-lightest w-full flex p-4 border-b border-lighter">
              <!-- Profile Picture -->
              <div class="flex-none">
                <i  class="text-xl fas fa-user p-3 flex-none w-12 h-12 rounded-full"></i>
              </div>
              <div class="w-full">
                <div class="flex items-center w-full">
                  <p class="font-semibold">Arnob</p>
                  <p class="text-sm text-dark ml-2">arc_arnob</p>
                  <p class="text-sm text-dark ml-2">0 sec</p>
                  <i class="fas fa-angle-down text-lg text-dark ml-auto"></i>
                </div>
                <p class="py-2">
                  {{ tweet.content }}
                </p>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center text-sm text-dark">
                    <i class="far fa-comment mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-retweet mr-3"></i>
                    <p> 0 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-heart mr-3"></i>
                    <p> 1 </p>
                  </div>
                  <div class="flex items-center text-sm text-dark">
                    <i class="fas fa-share-square mr-3"></i>
                  </div>
              </div>
              </div>
          </div>
          </div>
         </div>





      <!-- Trend -->
      <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative"> 
        <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm" placeholder="Search" /> 
        <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
        <div class="w-full rounded-lg bg-lightest">
            <div class="mt-2 flex items-center justify-between p-3">
              <p class="text-lg font-bold">Trends for You</p>
              <i class="fas fa-cog text-lg text-blue"></i>
            </div>
            <button v-for="trend in trending" v-bind:key="trend" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter" >
              <div>
                <p class="text-xs text-left text-dark">{{trend.top}}</p>
                <p class="font-semibold text-sm text-left"> {{ trend.title}} </p>
                <p class="text-left text-sm text-dark"> {{ trend.bottom}} </p>
              </div>
              <i class="fas fa-angle-down text-lg text-dark"></i> 
            </button>
            <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
              Show More
            </button>
          </div> 

          <!-- Who to follow -->
        
          <div class="w-full rounded-lg bg-lightest">
            <div class="mt-2 flex items-center justify-between p-3">
            <p class="text-lg font-bold">Who to follow</p>
            </div>
            <button v-for="peeps in people" v-bind:key="peeps" class="w-full flex hover:bg-lighter p-3 border-t border-lighter" >
                <i class="fas fa-user"></i>
                <div class="ml-4">
                  <p class="text-sm font-bold">{{peeps.name}}</p>
                  <p class="text-sm">{{peeps.handle}}</p>
                </div>
                <button @click="followUnfollowAUser(peeps.handle)" :class="`hover:bg-lightest ml-auto py-2 px-4 rounded-full border-2 border-blue`">
                    <p v-if="peeps.subs === false" class="text-sm text-blue">Follow</p>
                    <p v-else class="text-sm text-blue">Following</p>
                </button>
            </button>
          </div> 
      </div>
    </div>

</template>

<script>

export default {
  name: 'Twitter',
  components: {
  },
  data(){
    return {
      tabs:[
        {icon: 'fas fa-home', title: 'Home', id:'home'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id: 'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      profileTabs :[
        {icon: 'fas fa-map-marker-alt', title: 'India', id:'location'},
        {icon: 'text-lg fas fa-birthday-cake', title: '03-09-1999', id:'day'},
        {icon: 'text-lg fas fa-calendar-week', title: '20-Feb-2018', id:'joined'}
      ],
      linkTags:[
        {text: "Tweets", id:"0"},
        {text: "Tweets & Replies", id:"1"},
        {text: "Media", id:"2"},
        {text: "Likes", id:"3"}
      ],
      trending: [
        {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
        {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
        {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
        {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
      ],
      people: [
        {name: 'John Doe', handle: '@DoeisCool',time: '20 min', tweet: 'Monday pump up beats', comments: '10', retweets: '550', like: '1,012', subs:false},
        {name: 'Hart Smith', handle: '@stealyoheart', time: '20 min', tweet: 'Kickoff the plan', comments: '1,000', retweets: '550', like: '23123', subs:false},
        {name: 'Dwayne Johnson', handle: '@TheRock',time: '20 min', tweet: 'if you snmell, what the rock is cooking?', comments: '1,000', retweets: '550', like: '1,000,003', subs:false}
      ],
      following: [
        {name: 'Selina Gomez', handle: '@singerTop', time: '20 min', tweet: 'Should I just stop singing??', comments: '1,000', retweets: '550', like: '1,000,003', subs:true},
        {name: 'Chris Patt', handle: '@avenger', time: '55 min', tweet: 'Should I do more movies with marvel????', comments: '2,030', retweets: '50', like: '20,003',subs:true},
        {name: 'Chris Brown', handle: '@UhueePutitdown', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003', subs:true},
        {name: 'Pitbull Mr. Worldwide', handle: '@worldwide', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103', subs:true}
      ],
      id: 'home',
      dropDownActive: false,
      tweets: [
        
      ],
      tweet: {content: ''},
      page: 'home',
      tabId:'Tweets',


    }
  },
  methods: {
    postNewTweet(){
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push(newTweet);
      this.tweets.reverse();
    },

    followUnfollowAUser(event){
      for(let i = 0; i < this.people.length; i++){
        if(this.people[i].handle === event){
          this.people[i].subs = !this.people[i].subs;
          if(this.people[i].subs === true){
            this.following.push(this.people[i]);
          }
          else{
            this.following.splice(this.following.indexOf(this.people[i]), 1);
          }
          this.following.reverse();
        }
      }   
    },
    
  },
}  

</script>

<style src="..\assets\css\tailwind.css"/>