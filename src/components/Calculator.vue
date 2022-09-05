<template>
  <div class="calculator">
    <div class="display">{{ current }}</div>
    <CalButton label="C" @click="clear"></CalButton>
    <CalButton label="+/-" @click="sign"></CalButton>
    <CalButton label="%" @click="percent"></CalButton>
    <CalButton label="/" operation="true" @click="divide"></CalButton>
    <CalButton label="7" @click="append('7')"></CalButton>
    <CalButton label="8" @click="append('8')"></CalButton>
    <CalButton label="9" @click="append('9')"></CalButton>
    <CalButton label="x" operation="true" @click="multiply">x</CalButton>
    <CalButton label="4" @click="append('4')"></CalButton>
    <CalButton label="5" @click="append('5')"></CalButton>
    <CalButton label="6" @click="append('6')"></CalButton>
    <CalButton label="-" operation="true" @click="minus">-</CalButton>
    <CalButton label="1" @click="append('1')"></CalButton>
    <CalButton label="2" @click="append('2')"></CalButton>
    <CalButton label="3" @click="append('3')"></CalButton>
    <CalButton label="+" operation="true" @click="plus"></CalButton>
    <CalButton label="0" @click="append('0')"></CalButton>
    <CalButton label="." @click="dot"></CalButton>
    <CalButton label="=" @click="equal"></CalButton>
    <CalButton label="M" @click="$emit('page', 'memory')"></CalButton>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useMemoryStore } from "@/store/memory";

import CalButton from "./CalButton.vue";

export default {
  name: "CalculatorComponent",

  components: {
    CalButton,
  },

  data() {
    return {
      current: "12345",
      previous: null,
      operation: null,
      operationClicked: false,
    };
  },

  methods: {
    clear() {
      this.current = "0";
    },
    sign() {
      if (this.current.charAt(0) == "-") {
        this.current = this.current.slice(1);
      } else {
        this.current = "-" + this.current;
      }
    },
    percent() {
      this.current = (parseFloat(this.current) / 100).toString();
    },
    append(number) {
      if (this.operationClicked == true) {
        this.current = "";
        this.operationClicked = false;
      }

      this.current = this.current + number;
    },
    dot() {
      if (this.current.indexOf(".") == -1) {
        this.current = this.current + ".";
      }
    },
    divide() {
      this.operationClicked = true;
      this.operation = (num1, num2) => num1 / num2;
      this.previous = this.current;
    },
    multiply() {
      this.operationClicked = true;
      this.operation = (num1, num2) => num1 * num2;
      this.previous = this.current;
    },
    minus() {
      this.operationClicked = true;
      this.operation = (num1, num2) => num1 - num2;
      this.previous = this.current;
    },
    plus() {
      this.operationClicked = true;
      this.operation = (num1, num2) => num1 + num2;
      this.previous = this.current;
    },
    equal() {
      if (
        this.operation == null ||
        this.previous == null ||
        this.current == null ||
        this.current == "0"
      ) {
        return;
      }

      this.current = this.operation(
        parseFloat(this.previous),
        parseFloat(this.current)
      ).toString();

      this.operation = null;

      this.addItem(this.current);
    },

    ...mapActions(useMemoryStore, ["addItem"]),
  },
};
</script>

<style scoped>
.calculator {
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  display: grid;
  width: 400px;
  margin: 0 auto;
  font-size: 40px;
}

.display {
  grid-column: 1/5;
  background-color: #333333;
  color: white;
}
</style>
