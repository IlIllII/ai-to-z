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
              style="animation-delay: 0.3s"
            >
              <h1 class="title">Image</h1>
            </transition>
            <transition
              name="vertical-wipe"
              appear
              style="animation-delay: 0.4s"
            >
              <h1 class="title">Recognition</h1>
            </transition>
            <transition
              name="vertical-wipe"
              appear
              style="animation-delay: 0.5s"
            >
              <p class="blurb">
                How AI systems learn to 'see' the world around them.
              </p>
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
            <h1 class="letter-big">I</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="letter-icon"
              src="../assets/image/letter-pages/I-video.webm"
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
        Image recognition is the technology that enables AI to recognize and
        categorize objects in the world around us.
      </h1>

      <p class="inner-p">
        Sometimes known as "computer vision," image recognition systems can be
        taught to recognize anything from individuals to famous landmarks, or
        even pets, simply by studying a range of reference images provided for
        them.
      </p>

      <p class="inner-p">
        The systems can then help with everyday tasks, like organizing
        smartphone photos; for example, automatically suggesting a new album for
        vacation photos after a trip.
      </p>

      <h2 style="color: rgb(86, 120, 153)">
        Each image is like a fingerprint.
      </h2>

      <p class="inner-p">
        AI systems are trained to spot identifying features — such as colors and
        shapes — and cross-reference them with thousands of other images in
        order to recognize and label them accurately.
      </p>

      <img
        class="inner-img"
        src="../assets/image/letter-pages/I-maps.webp"
        alt=""
      />

      <p class="inner-p">
        The same technology that can recognize landmarks and group vacation
        photos is also being put to more profound use elsewhere, helping to
        translate warning signs in foreign languages or protect children from
        explicit content online.
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
      <router-link to="/H" class="left">
        <div class="footer-pane">
          <div class="footer-image">
            <h1 class="footer-letter" style="color: rgb(63, 97, 131)">H</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="footer-video"
              src="../assets/image/letter-pages/H-video.webm"
            ></video>
            <div
              class="footer-video-bg"
              style="background-color: rgb(63, 97, 131)"
            ></div>
          </div>
          <h3 class="footer-content">Human-in-the-loop</h3>
          <p class="footer-content">
            A human being who guides an AI system as it learns.
          </p>
          <img
            class="footer-content"
            src="../assets/image/left-arrow-white.png"
            alt=""
          />
        </div>
      </router-link>

      <router-link to="/J" class="right">
        <div class="footer-pane">
          <div class="footer-image">
            <h1 class="footer-letter" style="color: rgb(143, 93, 0)">J</h1>
            <video
              loop
              muted
              playsinline
              preload="auto"
              autoplay
              class="footer-video"
              src="../assets/image/letter-pages/J-video.webm"
            ></video>
            <div
              class="footer-video-bg"
              style="background-color: rgb(143, 93, 0)"
            ></div>
          </div>
          <h3 class="footer-content">Journalism</h3>
          <p class="footer-content">
            Journalists are using AI to transform the news industry.
          </p>
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
    background-color: rgb(189, 123, 0);
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
    background-color: rgb(189, 123, 0);
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
    background-color: rgb(189, 123, 0);
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
