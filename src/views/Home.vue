<template>
  <transition name="fade">
    <div class="home">
      <div class="main-container">
        <div class="horizontal-flex landing">
          <div class="vertical-flex landing-copy">
            <h1 class="heading">Making sense of artificial intelligence</h1>
            <p>
              This A-Z guide offers a series of simple, bite-sized explainers to
              help anyone understand what AI is, how it works and how it’s
              changing the world around us.
            </p>
          </div>
          <div>
            <img
              class="background landing-copy"
              src="../assets/image/video-background.png"
              alt=""
            />
            <video class="landing-copy" autoplay loop muted>
              <source src="../assets/video/Masthead.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <a
          @mouseover="arrowHover()"
          @mouseout="arrowDehover()"
          href="#start"
          class="btn-container"
        >
          <span id="circle"></span>
          <span class="btn">
            <img
              class="arrow-icon"
              src="../assets/image/down-arrow.png"
              alt=""
            />
          </span>
        </a>

        <div class="content-container">
          <h2 id="start">Where do I get started?</h2>
          <p>Browse the A-Z or choose one of the categories below.</p>
          <div class="horizontal-flex">
            <button
              @click="select('all')"
              @mouseover="btnHover('all-hover')"
              @mouseout="btnDehover('all-hover')"
              id="all"
              class="category-btn"
            >
              <span id="all-hover" class="btn-hov"></span>
              ALL
            </button>
            <button
              @click="select('fundamentals')"
              @mouseover="btnHover('fundamentals-hover')"
              @mouseout="btnDehover('fundamentals-hover')"
              id="fundamentals"
              class="category-btn"
            >
              <span id="fundamentals-hover" class="btn-hov"></span>
              AI FUNDAMENTALS
            </button>
            <button
              @click="select('making')"
              @mouseover="btnHover('making-hover')"
              @mouseout="btnDehover('making-hover')"
              id="making"
              class="category-btn"
            >
              <span id="making-hover" class="btn-hov"></span>
              MAKING AI
            </button>
            <button
              @click="select('society')"
              @mouseover="btnHover('society-hover')"
              @mouseout="btnDehover('society-hover')"
              id="society"
              class="category-btn"
            >
              <span id="society-hover" class="btn-hov"></span>
              SOCIETY &amp; AI
            </button>
            <button
              @click="select('using')"
              @mouseover="btnHover('using-hover')"
              @mouseout="btnDehover('using-hover')"
              id="using"
              class="category-btn"
            >
              <span id="using-hover" class="btn-hov"></span>
              USING AI
            </button>
          </div>

          <div class="card-container">
            <!-- <div v-for="card in cardData" :key="card.title">
            <transition name="fade" mode="out-in">
              <letter-card v-if="selected == 'all' || selected == card.group" :letter="card.letter" :title="card.title" :blurb="card.blurb" :group="card.group" />
            </transition>
          </div> -->

            <transition-group name="fade" mode="out-in">
              <div v-for="card in cardData" :key="card.title">
                <letter-card
                  v-if="selected == 'all' || selected == card.group"
                  :letter="card.letter"
                  :title="card.title"
                  :blurb="card.blurb"
                  :group="card.group"
                />
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import LetterCard from "../components/LetterCard.vue";
import cards from "../assets/cards.json";

export default {
  components: { LetterCard },
  data() {
    return {
      selected: "all",
      cardData: cards,
    };
  },
  methods: {
    arrowHover() {
      document
        .getElementById("circle")
        .setAttribute("style", "transform: scale(1)");
    },
    arrowDehover() {
      document
        .getElementById("circle")
        .setAttribute("style", "transform: scale(0)");
    },
    btnHover(id) {
      document.getElementById(id).setAttribute("class", "btn-hov active-hov");
    },
    btnDehover(id) {
      document.getElementById(id).setAttribute("class", "btn-hov");
    },
    select(variable) {
      this.selected = variable;
    },
  },
  mounted() {
    let landing = document.getElementsByClassName("landing")[0];
    let rect = landing.getBoundingClientRect();
    let height = window.visualViewport.height;
    let margin = height - rect.bottom - 100;
    if (margin < 1) {
      margin = 25;
    }
    landing.setAttribute("style", `margin-bottom: ${Math.round(margin)}px`);
  },
};
</script>

<style scoped>
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-move {
  transition: transform 0.8s ease;
}

.horizontal-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-content: space-around;
  justify-content: center;
  align-items: center;
}

.vertical-flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.landing-copy {
  text-align: left;
  max-width: 400px;
}

.landing {
  margin-bottom: 100px;
}

.heading {
  font-size: 70px;
  max-width: 300px;
}

.background {
  position: absolute;
  z-index: -100;
}

p {
  font-size: 1.2em;
}

.btn-container {
  width: 50px;
  height: 50px;
  display: flex;
  margin: auto;
  border: none;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(209, 189, 170);
  border-radius: 100px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bolder;
  background-color: transparent;
  background-position: center;
  transition: background-color 0.3s;
}

.btn {
  margin-top: 3px;
}

#circle {
  position: absolute;
  height: 52px;
  width: 52px;
  border-radius: 100px;
  background-color: rgb(209, 189, 170);
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  z-index: -1;
}

.arrow-icon {
  width: 1.2em;
}

.content-container {
  margin: auto;
  margin-top: 100px;
  text-align: center;
}

.category-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(209, 189, 170);
  background-color: rgb(237, 223, 209);
  padding: 10px 20px;
  border-radius: 100px;
  margin: 5px;
  transition: color 0.3s, background-color 0.3s, border 0.3s;
}

.btn-hov {
  width: 10em;
  height: 2.8em;
  position: absolute;
  justify-self: center;
  align-self: center;
  z-index: -1;
  border-radius: 100px;
  opacity: 0;
  transform: scaleX(0.5);
  transition: transform 0.3s, opacity 0.3s;
}

.active-hov {
  opacity: 1;
  transform: scaleX(1);
}

#all-hover {
  width: 5em;
  background-color: rgb(44, 45, 72);
}

#fundamentals-hover {
  width: 12.5em;
  background-color: rgb(53, 131, 87);
}

#making-hover {
  width: 8.5em;
  background-color: rgb(86, 120, 153);
}

#society-hover {
  width: 10em;
  background-color: rgb(189, 123, 0);
}

#using-hover {
  width: 7.5em;
  background-color: rgb(197, 83, 52);
}

.category-btn:hover {
  color: white;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1335px;
  justify-content: center;
  align-items: center;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .fade-leave-to,
  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-move {
    transition: transform 0.8s ease;
  }

  .horizontal-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-content: space-around;
    justify-content: center;
    align-items: center;
  }

  .vertical-flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .landing-copy {
    text-align: left;
    max-width: 90vw;
  }

  .landing {
    margin-bottom: 100px;
  }

  .heading {
    font-size: 36px;
    max-width: 80vw;
  }

  .background {
    position: absolute;
    z-index: -100;
  }

  p {
    font-size: 16px;
  }

  .btn-container {
    width: 50px;
    height: 50px;
    display: flex;
    margin: auto;
    border: none;
    justify-content: center;
    align-items: center;
    border: 2px solid rgb(209, 189, 170);
    border-radius: 100px;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bolder;
    background-color: transparent;
    background-position: center;
    transition: background-color 0.3s;
  }

  .btn {
    margin-top: 3px;
  }

  #circle {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 100px;
    background-color: rgb(209, 189, 170);
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    z-index: -1;
  }

  .arrow-icon {
    width: 1.2em;
  }

  .content-container {
    margin: auto;
    margin-top: 100px;
    text-align: center;
  }

  .category-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(209, 189, 170);
    background-color: rgb(237, 223, 209);
    padding: 10px 20px;
    border-radius: 100px;
    margin: 5px;
    transition: color 0.3s, background-color 0.3s, border 0.3s;
  }

  .btn-hov {
    width: 10em;
    height: 2.8em;
    position: absolute;
    justify-self: center;
    align-self: center;
    z-index: -1;
    border-radius: 100px;
    opacity: 0;
    transform: scaleX(0.5);
    transition: transform 0.3s, opacity 0.3s;
  }

  .active-hov {
    opacity: 1;
    transform: scaleX(1);
  }

  #all-hover {
    width: 5em;
    background-color: rgb(44, 45, 72);
  }

  #fundamentals-hover {
    width: 12.5em;
    background-color: rgb(53, 131, 87);
  }

  #making-hover {
    width: 8.5em;
    background-color: rgb(86, 120, 153);
  }

  #society-hover {
    width: 10em;
    background-color: rgb(189, 123, 0);
  }

  #using-hover {
    width: 7.5em;
    background-color: rgb(197, 83, 52);
  }

  .category-btn:hover {
    color: white;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100vw;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
}
</style>
