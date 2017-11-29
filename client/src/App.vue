<template>
  <div id="app">
    <sidebar/>
    <div class="pusher">
      <div class="ui container">
            <div class="ui text menu">
              <a class="browse item">
                <i class="sidebar large icon inverted" @click="showSidebar"></i>
              </a>
            </div>
        <div class="ui grid stackable centered main">
          <div class="column center aligned">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './components/Sidebar'

export default {
  components: {
    sidebar
  },
  name: 'app',
  methods: {
    showSidebar () {
      // eslint-disable-next-line
      $('.ui.labeled.icon.sidebar')
        .sidebar('toggle')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #73EDD4;
    margin-top: 60px;
  }

  body, .pusher {
    background-color: #1d2d47 !important;
  }

  .ui.button.fluid {
    border-radius: 2px !important;
  }

  .ui.grid.main {
    margin-top: 4em;
  }

  .row.room {
    margin-top: 20px;
  }

  .ui.header img {
    width: 4em !important;
  }

  @media only screen and (max-width: 700px) {
    .ui.grid.main {
      margin-top: 2em;
    }

    .ui.container {
      margin-top: -4em !important;
    }

    .sidebar {
      margin-top: 2em;
    }
  }
</style>
