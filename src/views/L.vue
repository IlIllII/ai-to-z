<template>
  <div class="main-container" id="bg">
    <div class="inner-container">
      <div id="landing" class="flex-horizontal topper">
        <!-- Heading text -->
        <div class="copy-container">
          <div class="flex-vertical copy">
            <transition
              name="vertical-wipe"
              appear
              style="animation-delay: 0.4s"
            >
              <h1 class="title">Learning</h1>
            </transition>
            <transition
              name="vertical-wipe"
              appear
              style="animation-delay: 0.5s"
            >
              <p class="blurb">The different methods used to teach AI.</p>
            </transition>
            <transition
              name="vertical-wipe"
              appear
              style="animation-delay: 0.6s"
            >
              <div class="flex-horizontal">
                <img
                  class="icon"
                  src="../assets/image/icons/facebook.png"
                  alt=""
                  height="24"
                />
                <img
                  class="icon"
                  src="../assets/image/icons/twitter.png"
                  alt=""
                  height="24"
                />
                <img
                  class="icon"
                  src="../assets/image/icons/mail.png"
                  alt=""
                  height="24"
                />
                <img
                  class="icon"
                  src="../assets/image/icons/hyperlink.png"
                  alt=""
                  height="24"
                />
              </div>
            </transition>
          </div>
        </div>

        <!-- Heading Image -->
        <transition name="slide-right" appear style="transition-delay: 0.8s">
          <div class="letter-image">
            <h1 class="letter-big">L</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="letter-icon"
              src="../assets/image/letter-pages/L-video.webm"
            ></video>
            <div class="letter-bg"></div>
          </div>
        </transition>
      </div>

      <!-- Circle arrow -->
      <transition name="vertical-wipe" appear style="animation-delay: 1s">
        <a
          @mouseover="arrowHover()"
          @mouseout="arrowDehover()"
          href="#banner-copy"
          class="btn-container"
        >
          <span id="circle"></span>
          <span class="btn">
            <img
              id="arrow"
              class="arrow-icon"
              src="../assets/image/down-arrow-white.png"
              alt=""
            />
          </span>
        </a>
      </transition>

      <h1 id="banner-copy">
        Two of the most common techniques that AI design teams use to train
        machine learning systems are supervised and unsupervised learning.
      </h1>

      <p class="inner-p">
        In supervised learning, a system is given reference data, which it can
        use to look for similar patterns in new data. It learns through a
        process of iteration: trial and error.
      </p>

      <img
        class="inner-img"
        src="../assets/image/letter-pages/L-pineapples.webp"
        alt=""
      />

      <p class="inner-p">
        Imagine someone wanted to teach a system to recognize different fruits.
        You might start by showing the system photos labeled as pineapples. Next
        time it comes across a spiky, knobbly ball in a fruit bowl, it should be
        able to identify it.
      </p>

      <p class="inner-p">
        In unsupervised learning, a system is closely watched by its developers
        but can be taught to look for relationships in data by itself. You could
        show a system images of a range of fruits —without telling it which were
        which — and ask it to find similarities and differences between them. It
        might group together all the spiky, knobbly balls and suggest they are
        in fact the same thing, but it wouldn’t know they were pineapples unless
        it was told.
      </p>

      <h2 style="color: rgb(86, 120, 153)">
        Unsurprisingly, the way we teach AI affects the way it learns.
      </h2>

      <p class="inner-p">
        Supervised learning methods are able to categorize and label data
        according to what humans already know, while unsupervised methods can be
        used for spotting patterns that people may not necessarily know to look
        for.
      </p>

      <div class="black-icons">
        <img
          class="icon"
          src="../assets/image/icons/facebook-black.png"
          alt=""
          height="24"
        />
        <img
          class="icon"
          src="../assets/image/icons/twitter-black.png"
          alt=""
          height="24"
        />
        <img
          class="icon"
          src="../assets/image/icons/mail-black.png"
          alt=""
          height="24"
        />
        <img
          class="icon"
          src="../assets/image/icons/hyperlink-black.png"
          alt=""
          height="24"
        />
      </div>
    </div>

    <div class="footer-nav">
      <router-link to="/K" class="left">
        <div class="footer-pane">
          <div class="footer-image">
            <h1 class="footer-letter" style="color: rgb(63, 97, 131)">K</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="footer-video"
              src="../assets/image/letter-pages/K-video.webm"
            ></video>
            <div
              class="footer-video-bg"
              style="background-color: rgb(63, 97, 131)"
            ></div>
          </div>
          <h3 class="footer-content">Knowledge</h3>
          <p class="footer-content">
            AI systems build knowledge different than humans.
          </p>
          <img
            class="footer-content"
            src="../assets/image/left-arrow-white.png"
            alt=""
          />
        </div>
      </router-link>

      <router-link to="/M" class="right">
        <div class="footer-pane">
          <div class="footer-image">
            <h1 class="footer-letter" style="color: rgb(25, 104, 60)">M</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="footer-video"
              src="../assets/image/letter-pages/M-video.webm"
            ></video>
            <div
              class="footer-video-bg"
              style="background-color: rgb(25, 104, 60)"
            ></div>
          </div>
          <h3 class="footer-content">Machine Learning</h3>
          <p class="footer-content">When AI learns for itself through data.</p>
          <img
            class="footer-content"
            src="../assets/image/right-arrow-white.png"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    arrowHover() {
      document
        .getElementById("circle")
        .setAttribute("style", "transform: scale(1)");
      document
        .getElementById("arrow")
        .setAttribute("src", require("../assets/image/down-arrow.png"));
    },
    arrowDehover() {
      document
        .getElementById("circle")
        .setAttribute("style", "transform: scale(0)");
      document
        .getElementById("arrow")
        .setAttribute("src", require("../assets/image/down-arrow-white.png"));
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let y = window.scrollY || window.pageYOffset;
      y = y < 1 ? 1 : y;
      let rect = document.getElementById("banner-copy").getBoundingClientRect();
      if (y > rect.bottom) {
        document
          .getElementById("bg")
          .setAttribute(
            "style",
            "background-color: transparent; color: #2c3e50"
          );
      } else {
        document
          .getElementById("bg")
          .setAttribute(
            "style",
            "background-color: rgb(86, 120, 153); color: white"
          );
      }
    });
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    let landing = document.getElementById("landing");
    let rect = landing.getBoundingClientRect();
    let height = window.visualViewport.height;
    let margin = height - rect.bottom - 100;
    if (margin < 1) {
      margin = 25;
    }
    document
      .getElementsByClassName("btn-container")[0]
      .setAttribute(
        "style",
        `margin-top: ${Math.round(margin)}px; animation-delay: 1s`
      );
    // landing.setAttribute("style", `margin-bottom: ${Math.round(margin)}px`)
  },
};
</script>

<style scoped>
@media screen and (min-width: 1076px) {
  .main-container {
    background-color: rgb(86, 120, 153);
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }

  .inner-container {
    max-width: 1200px;
    margin: auto;
  }

  .flex-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
  }

  .copy {
    width: 590px;
  }

  .title {
    font-size: 5em;
    text-align: left;
    margin: 0;
  }

  .blurb {
    text-align: right;
    font-size: 1.5em;
  }

  .icon {
    margin: 5px;
  }

  .letter-image {
    position: relative;
    padding: 0;
    width: 590px;
  }

  .letter-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    z-index: 3;
  }

  .letter-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    height: 590px;
    z-index: 1;
    background-color: rgb(63, 97, 131);
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .letter-big {
    color: rgb(63, 97, 131);
    position: relative;
    z-index: 2;
    font-size: 600px;
    line-height: 0;
    margin: 295px 0;
  }

  .btn-container {
    width: 50px;
    height: 50px;
    display: flex;
    margin: auto;
    border: none;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 100px;
    background-color: transparent;
    z-index: 2;
    margin: 150px auto;
  }

  .btn {
    margin-top: 3px;
    z-index: 3;
  }

  #circle {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 100px;
    background-color: white;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    z-index: 1;
  }

  .arrow-icon {
    width: 1.2em;
    z-index: 3;
  }

  #banner-copy {
    font-size: 4em;
    margin: 110px auto;
  }

  .inner-p {
    max-width: 700px;
    font-size: 1.3em;
    text-align: left;
    margin: 50px auto;
  }

  h2 {
    font-size: 2.8em;
    max-width: 700px;
    text-align: left;
    margin: auto;
  }

  .black-icons {
    margin: auto;
    margin-bottom: 120px;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  .footer-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .footer-pane {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin: 100px;
  }

  .footer-image {
    position: relative;
    width: 300px;
  }

  .footer-letter {
    position: relative;
    z-index: 2;
    font-size: 300px;
    line-height: 0;
    margin: 150px 0;
  }

  .footer-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    z-index: 3;
  }

  .footer-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    z-index: 1;
    background-color: aqua;
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: flex-end;
    align-content: center;
    transition: transform 0.3s ease;
  }

  .right {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: flex-start;
    align-content: center;
  }

  .left::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(86, 120, 153);
    transform: translateY(20%) scaleY(1.4);
    z-index: -10;
  }

  .right::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(53, 131, 87);
    transform: translateY(20%) scaleY(1.4);
    z-index: -10;
  }

  .left:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  }

  .right:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(-2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  }

  @keyframes wipe-in-up {
    from {
      clip-path: inset(100% 0 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .vertical-wipe-enter-active {
    animation: wipe-in-up 0.2s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  @keyframes wipe-in-right {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .wipe-right-enter-active {
    animation: wipe-in-right 0.5s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }

  .slide-right-enter-active {
    transition: opacity 0.3s, transform 0.3s cubic-bezier(0.25, 1, 0.3, 1);
  }
}

@media screen and (max-width: 650px) {
  .main-container {
    background-color: rgb(86, 120, 153);
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }

  .inner-container {
    max-width: 90vw;
    margin: auto;
  }

  .flex-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
  }

  .copy {
    text-align: left;
  }

  .copy-container {
    margin: auto;
    width: fit-content;
  }

  .title {
    font-size: 40px;
    text-align: left;
    margin: 0;
  }

  .blurb {
    text-align: left;
    font-size: 18px;
  }

  .icon {
    margin: 5px;
  }

  .letter-image {
    position: relative;
    padding: 0;
    width: 250px;
  }

  .letter-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    z-index: 3;
  }

  .letter-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 250px;
    z-index: 1;
    background-color: rgb(63, 97, 131);
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .letter-big {
    color: rgb(63, 97, 131);
    position: relative;
    z-index: 2;
    font-size: 250px;
    line-height: 0;
    margin: 125px 0;
  }

  .btn-container {
    width: 50px;
    height: 50px;
    display: flex;
    margin: auto;
    border: none;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 100px;
    background-color: transparent;
    z-index: 2;
    margin: 150px auto;
  }

  .btn {
    margin-top: 3px;
    z-index: 3;
  }

  #circle {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 100px;
    background-color: white;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    z-index: 1;
  }

  .arrow-icon {
    width: 1.2em;
    z-index: 3;
  }

  #banner-copy {
    font-size: 26px;
    margin: 110px auto;
  }

  .inner-p {
    max-width: 90vw;
    font-size: 18px;
    text-align: left;
    margin: 50px auto;
  }

  h2 {
    font-size: 24px;
    max-width: 700px;
    text-align: left;
    margin: auto;
  }

  .inner-img {
    width: 90vw;
  }

  .black-icons {
    margin: auto;
    margin-bottom: 120px;
    max-width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  .footer-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
  }

  .footer-pane {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
    width: 90vw;
  }

  .footer-image {
    position: relative;
    width: 300px;
  }

  .footer-letter {
    position: relative;
    z-index: 2;
    font-size: 300px;
    line-height: 0;
    margin: 150px 0;
  }

  .footer-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    z-index: 3;
  }

  .footer-content {
    text-align: left;
    margin-left: 10px;
  }

  .footer-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    z-index: 1;
    background-color: aqua;
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: center;
    align-content: center;
    transition: transform 0.3s ease;
  }

  .right {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: center;
    align-content: center;
  }

  .left::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(86, 120, 153);
    transform: translateY(20%) scaleY(1.4);
    z-index: -10;
  }

  .right::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(53, 131, 87);
    transform: translateY(10%) scaleY(1.2);
    z-index: -10;
  }

  /* .left:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  }

  .right:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(-2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  } */

  /* .footer-content {
    text-align: left;
    margin: auto;
  } */

  @keyframes wipe-in-up {
    from {
      clip-path: inset(100% 0 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .vertical-wipe-enter-active {
    animation: wipe-in-up 0.2s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  @keyframes wipe-in-right {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .wipe-right-enter-active {
    animation: wipe-in-right 0.5s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }

  .slide-right-enter-active {
    transition: opacity 0.3s, transform 0.3s cubic-bezier(0.25, 1, 0.3, 1);
  }
}

@media screen and (min-width: 651px) and (max-width: 1075px) {
  .main-container {
    background-color: rgb(86, 120, 153);
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }

  .inner-container {
    max-width: 1200px;
    margin: auto;
  }

  .flex-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }

  .flex-vertical {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
  }

  .copy {
    width: 590px;
  }

  .title {
    font-size: 5em;
    text-align: left;
    margin: 0;
  }

  .blurb {
    text-align: right;
    font-size: 1.5em;
  }

  .icon {
    margin: 5px;
  }

  .letter-image {
    position: relative;
    padding: 0;
    width: 590px;
  }

  .letter-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    z-index: 3;
  }

  .letter-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 590px;
    height: 590px;
    z-index: 1;
    background-color: rgb(63, 97, 131);
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .letter-big {
    color: rgb(63, 97, 131);
    position: relative;
    z-index: 2;
    font-size: 600px;
    line-height: 0;
    margin: 295px 0;
  }

  .btn-container {
    width: 50px;
    height: 50px;
    display: flex;
    margin: auto;
    border: none;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 100px;
    background-color: transparent;
    z-index: 2;
    margin: 150px auto;
  }

  .btn {
    margin-top: 3px;
    z-index: 3;
  }

  #circle {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 100px;
    background-color: white;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    z-index: 1;
  }

  .arrow-icon {
    width: 1.2em;
    z-index: 3;
  }

  #banner-copy {
    font-size: 4em;
    margin: 110px auto;
  }

  .inner-p {
    max-width: 700px;
    font-size: 1.3em;
    text-align: left;
    margin: 50px auto;
  }

  h2 {
    font-size: 2.8em;
    max-width: 700px;
    text-align: left;
    margin: auto;
  }

  .black-icons {
    margin: auto;
    margin-bottom: 120px;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  .footer-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .footer-pane {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin: 100px;
  }

  .footer-image {
    position: relative;
    width: 300px;
  }

  .footer-letter {
    position: relative;
    z-index: 2;
    font-size: 300px;
    line-height: 0;
    margin: 150px 0;
  }

  .footer-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    z-index: 3;
  }

  .footer-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    z-index: 1;
    background-color: aqua;
    mask: url(../assets/image/big-bg.webp) center/contain;
  }

  .left {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: flex-end;
    align-content: center;
    transition: transform 0.3s ease;
  }

  .right {
    position: relative;
    display: flex;
    flex-direction: row;
    flex: 50%;
    justify-content: flex-start;
    align-content: center;
  }

  .left::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(86, 120, 153);
    transform: translateY(10%) scaleY(1.2);
    z-index: -10;
  }

  .right::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(53, 131, 87);
    transform: translateY(10%) scaleY(1.2);
    z-index: -10;
  }

  /* .left:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  }

  .right:hover::before {
    z-index: -9;
    transform: scaleX(1.05) translate(-2.25%, 20%) scaleY(1.4);
    transition: transform 0.3s;
  } */

  @keyframes wipe-in-up {
    from {
      clip-path: inset(100% 0 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .vertical-wipe-enter-active {
    animation: wipe-in-up 0.2s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  @keyframes wipe-in-right {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  .wipe-right-enter-active {
    animation: wipe-in-right 0.5s cubic-bezier(0.25, 1, 0.3, 1);
    animation-fill-mode: backwards;
  }

  .slide-right-enter-from {
    opacity: 0;
    transform: translateX(-100px);
  }

  .slide-right-enter-active {
    transition: opacity 0.3s, transform 0.3s cubic-bezier(0.25, 1, 0.3, 1);
  }
}
</style>
