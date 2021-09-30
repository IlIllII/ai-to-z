<template>
  <div>
    <div id="nav">
      <router-link to="/">
        <span class="big-letters nav-title">AI</span>
        <span class="small-letters nav-title">to</span>
        <span class="big-letters nav-title">Z</span>
      </router-link>
      <router-link class="about" to="/">ABOUT</router-link>
    </div>

    <router-view v-slot="{ Component, route }" style="position: relative">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer>
      <hr />
      <div class="horizontal-flex">
        <div class="horizontal-flex">
          <a class="footer-element" href="/">Privacy Policy</a>
          <a class="footer-element" href="/">Terms of Use</a>
          <a class="footer-element" href="/">English (UnitedStates)</a>
        </div>
        <div class="horizontal-flex">
          <a class="footer-element" href="/">
            <div class="vertical-flex">
              <span>OXFORD</span>
              <span><strong>INTERNET</strong></span>
              <span><strong>INSITUTE</strong></span>
            </div>
          </a>
          <a class="footer-element" href="/"><img src="./assets/image/google-logo.png" alt=""></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-to,
.fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

html {
  scroll-behavior: smooth;
  position: relative;
}

html::before {
  background-color: #f6ece3;
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  z-index: -200;
}

#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app::before {
  content: "";
  background-image: url("./assets/image/noise.jpg");
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.05;
  z-index: -200;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

p {
  line-height: 1.5em;
  font-weight: 400;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}

#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

hr {
  margin: 100px 50px 0px 50px;
  border: 1px solid rgba(100, 100, 100, 0.2);
}

.horizontal-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}

.vertical-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}

.footer-element {
  margin: auto;
  padding: 10px;
  text-decoration: none;
  color: #2c3e50;
}

.nav-title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 900;
  margin: 2px;
}

.small-letters {
  font-size: 1.2em;
}

.big-letters {
  font-size: 2em;
}

a {
  text-decoration: none;
}

.about {
  font-size: 1em;
  font-weight: 700;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.about:hover {
  opacity: 0.5;
}
</style>
