<template>
  <div class="btn" :class="{ 'operation': operation == 'true' }" @click="$emit('click')">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: ["label", "operation"],
};
</script>

<style scoped>
.btn {
  background-color: #f2f2f2;
  border: 1px solid #999999;
  cursor: pointer;
}

.operation {
  background-color: orange;
}
</style>