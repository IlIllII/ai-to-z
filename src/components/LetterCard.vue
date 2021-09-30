<template>
  <div
    @click="direct(letter)"
    @mouseover="hover()"
    @mouseout="dehover()"
    class="card"
    :style="'background-color: ' + currentColor + ';'"
  >
    <div class="letter-image">
      <h1 :style="'opacity: ' + opac + '; color: #2c3e50'">
        {{ letter }}
      </h1>
      <img class="letter-icon" :src="getImgUrl(letter)" alt="" />
      <img class="letter-bg" src="../assets/image/letters/bg.webp" alt="" />
    </div>

    <h3>{{ title }}</h3>

    <p>{{ blurb }}</p>

    <svg
      :fill="fill"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
      />
    </svg>
  </div>
</template>

<script>
let mapping = {
  all: "rgb(44, 45, 72)",
  fundamentals: "rgb(53, 131, 87)",
  making: "rgb(86, 120, 153)",
  society: "rgb(189, 123, 0)",
  using: "rgb(197, 83, 52)",
};

const stdFill = "rgb(209, 189, 170)";

export default {
  props: ["letter", "title", "blurb", "group"],
  data() {
    return {
      backgroundColor: mapping[this.group],
      currentColor: "rgb(237, 223, 209)",
      fill: stdFill,
      opac: 1,
      path: "../assets/image/letters/" + this.letter + ".webp",
    };
  },
  methods: {
    hover() {
      this.currentColor = this.backgroundColor;
      this.fill = "white";
      this.opac = 0.5;
    },
    dehover() {
      this.currentColor = "rgb(237, 223, 209)";
      this.fill = stdFill;
      this.opac = 1;
    },
    getImgUrl(L) {
      return require(`../assets/image/letters/${L}.webp`);
    },
    direct(suffix) {
      this.$router.push(suffix);
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 601px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
    border: 1px solid rgb(209, 189, 170);
    max-width: 250px;
    min-width: 250px;
    margin: 10px;
    padding: 10px;
    width: 25vw;
    max-height: 600px;
    min-height: 320px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s,
      box-shadow 0.3s;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.03);
    color: white;
    box-shadow: 15px 15px 0px -5px rgb(237, 223, 209);
  }

  .letter-image {
    position: relative;
    padding: 0 25px;
    margin: 0 0 0 120px;
    width: 125px;
  }

  h1 {
    position: relative;
    font-size: 6em;
    line-height: 0em;
    z-index: 2;
    transition: opacity 0.3s;
    text-align: left;
  }

  h3 {
    font-size: 2em;
    line-height: 1em;
    text-align: left;
    padding: 0 5px;
    margin: 0;
    margin-top: auto;
  }

  p {
    font-size: 1.2em;
    top: 90%;
    padding: 0 5px;
    text-align: left;
  }

  svg {
    transition: fill 0.3s;
    margin: 5px;
    margin-top: 0;
  }

  .letter-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 125px;
    z-index: 3;
  }

  .letter-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 125px;
    z-index: 1;
  }
}

@media screen and (max-width: 600px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(209, 189, 170);
    flex-wrap: wrap;
    border-radius: 10px;
    width: 90vw;
    margin: 2px auto;
    padding: 10px 0;
    height: 100px;
    transition: background-color 0.3s, color 0.3s, transform 0.3s,
      box-shadow 0.3s;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.03);
    color: white;
    box-shadow: 15px 15px 0px -5px rgb(237, 223, 209);
  }

  .letter-image {
    position: relative;
    padding: 0 10px;
    margin: 5px;
    width: 65px;
    height: 80px;
  }

  h1 {
    position: relative;
    font-size: 80px;
    line-height: 0em;
    z-index: 2;
    transition: opacity 0.3s;
    text-align: left;
    margin: 42px auto auto 5px;
  }

  h3 {
    font-size: 16px;
    line-height: 1em;
    text-align: left;
    padding: 0;
    margin: 5px auto 0 0;
  }

  p {
    font-size: 14px;
    line-height: 14px;
    width: 160px;
    text-align: left;
    margin: 5px auto 0 0;
  }

  svg {
    transition: fill 0.3s;
    margin: 0;
    margin-top: 5px;
  }

  .letter-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    z-index: 3;
  }

  .letter-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    z-index: 1;
  }
}
</style>
