<template>
  <table>
    <thead>
      <tr>
        <th>
          Memory
          <button @click="$emit('close')">X</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item }}</td>
      </tr>
      <tr v-if="items.length == 0" class="no-memory">
        No memory!
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "pinia";
import { useMemoryStore } from "@/store/memory";

export default {
  name: "MemoryComponent",

  computed: {
    ...mapState(useMemoryStore, ["items"]),
  },

  // data() {
  //   return {
  //     items: ["1000", "2000", "3000"],
  //   };
  // },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #cccccc;
  width: 400px;
  margin: 0 auto;
}

th {
  background-color: orange;
  font-size: 40px;
}

td {
  background-color: #f2f2f2;
  font-size: 40px;
}

.no-memory {
  font-size: 40px;
  color: red;
}
</style>