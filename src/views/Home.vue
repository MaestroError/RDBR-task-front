<template>
  <div class="home">
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="@/assets/logo.png" alt="Workflow" />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div class="mt-8">
          <p v-if="errorMsg" class="text-red-400">{{errorMsg}}</p>
          <div v-if="signIn" class="login">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="relative">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" v-model="loginInfo.email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                <p v-if="errors.email" class="text-red-400 absolute top-2 right-4">{{errors.email[0]}}</p>
              </div>
              <div class="relative">
                <label for="password" class="sr-only">Password</label>
                <input id="password" v-model="loginInfo.password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
                <p v-if="errors.password" class="text-red-400 absolute top-2 right-4">{{errors.password[0]}}</p>
              </div>
            </div>
            
            <div class="text-sm text-right mt-2">
              <a href="#" @click="changeAction" class="font-medium pt-2 text-green-600 hover:text-green-500">
                not yet registered? sign up
              </a>
            </div>

            <div class="mt-4">
              <button @click="userLogin" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Sign in
              </button>
            </div>
          </div>

          <div v-if="signUp" class="register">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="relative">
                <label for="name" class="sr-only">Name</label>
                <input id="name" name="name" v-model="registerInfo.name" type="name" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" />
                <p v-if="errors.name" class="text-red-400 absolute top-2 right-4">{{errors.name[0]}}</p>
              </div>
              <div class="relative">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" v-model="registerInfo.email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                <p v-if="errors.email" class="text-red-400 absolute top-2 right-4">{{errors.email[0]}}</p>
              </div>
              <div class="relative">
                <label for="password" class="sr-only">Password</label>
                <input id="password" v-model="registerInfo.password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
                <p v-if="errors.password" class="text-red-400 absolute top-2 right-4">{{errors.password[0]}}</p>
              </div>
              <div class="relative">
                <label for="password_confirmation" class="sr-only">Confirm Password</label>
                <input id="password_confirmation" v-model="registerInfo.password_confirmation" name="password_confirmation" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Repeat Password" />
                <p v-if="errors.password_confirmation" class="text-red-400 absolute top-2 right-4">{{errors.password_confirmation[0]}}</p>
              </div>
            </div>

            <div class="text-sm text-right mt-2">
              <a href="#" @click="changeAction" class="font-medium text-green-600 hover:text-green-500">
                Already have account? sign in
              </a>
            </div>

            <div class="mt-4">
              <button @click="userRegister" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Sign Up
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data: function () {
    return {
      signIn: true,
      signUp: false,
      loginInfo: {
        email: "",
        password: "",
      },
      registerInfo: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errorMsg: null,
      errors: {}
    }
  },
  methods: {
    changeAction() {
      this.signIn = this.signIn ? false : true
      this.signUp = this.signUp ? false : true
    },
    userLogin() {
      this.axios.post(this.$store.state.apiUrl + "login", this.loginInfo)
      .then((response) => {
        if(response.status == 200) {
          // set token and user info
          this.$store.commit('setToken', response.data.token)
          this.$store.commit('setUser', response.data.user)
          this.checkLogin()
        }
      })
      .catch(error => {
          let d = error.response.data
          // handle errors to show
          this.errorMsg = d.msg ? d.msg : d.message
          this.errors = d.errors ? d.errors : {}
      });
    },
    userRegister() {
      this.axios.post(this.$store.state.apiUrl + "register", this.registerInfo)
      .then((response) => {
        if(response.status == 201) {
          // set token and user info
          this.$store.commit('setToken', response.data.token)
          this.$store.commit('setUser', response.data.user)
          this.checkLogin()
        }
      })
      .catch(error => {
          let d = error.response.data
          // handle errors to show
          this.errorMsg = d.msg ? d.msg : d.message
          this.errors = d.errors ? d.errors : {}
      });
    },
    checkLogin() {
      if(this.$store.state.token) {
        this.axios.defaults.headers.common['Authorization'] = "Bearer "+this.$store.state.token;
        localStorage.setItem('token', this.$store.state.token)
        this.$router.push('covid-statistics')
      }
    }
  },
  mounted() {
    this.checkLogin();
  }
}
</script>
