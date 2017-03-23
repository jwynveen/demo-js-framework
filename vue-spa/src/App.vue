<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png">
            Vue - SPA
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link active-class="active" tag="li" to="/todo"><a>Home</a></router-link>
            <router-link active-class="active" tag="li" to="/about"><a>About</a></router-link>
            <router-link active-class="active" tag="li" to="/contact"><a>Contact</a></router-link>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  </div>
</template>


<style lang="scss">
  body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
  }

  a {
    color: #00B7FF;
  }

  .navbar-brand img {
    max-height: 1em;
    display: inline-block;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
