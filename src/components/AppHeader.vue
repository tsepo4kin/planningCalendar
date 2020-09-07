<template>
  <div>
    <v-toolbar
      class="green darken-3"
      dark
    >
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <router-link to='/' tag='span' style="cursor: pointer">
        <v-toolbar-title>Title(app Name)</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text v-for="item in menuItems" :key='item.title' :to='item.path'>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      dialog: false //logout dialog
    }),
    computed: {
      menuItems() {
        if(this.isAuth) {
          return [
            {
              title: 'Calendar',
              path: '/calendar',
              icon: 'mdi-calendar-month'
            },
            {
              title: 'Day plan',
              path: '/dayPlan',
              icon: 'mdi-format-list-checks'
            },
            {
              title: 'Goal list',
              path: '/goalList',
              icon: 'mdi-clipboard-text-outline'
            },
            {
              title: 'Cash record',
              path: '/cashRecord',
              icon: 'mdi-cash-multiple'
            },
            {
              title: 'Projects',
              path: '/projects',
              icon: 'mdi-notebook-outline'
            },
            {
              title: 'Habits',
              path: '/habits',
              icon: 'mdi-bell-alert-outline'
            },
            {
              title: 'Profile',
              path: '/profile',
              icon: 'mdi-account-box'
            }            
          ]
        } else {
          return [
            {
              title: 'SignIn',
              path: '/signIn',
              icon: 'mdi-account-arrow-right'
            },
            {
              title: 'SignUp',
              path: '/signUp',
              icon: 'mdi-account-check'
            }
          ]
        }
      },
      isAuth() {
        return this.$store.getters.isAuth;
      }
    }
};
</script>