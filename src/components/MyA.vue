<template>
  <div>{{label}}: {{count}}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex';

export default {
  props: ['label'],
  computed: mapState(['count']),
  methods: mapMutations(['increment']),
};
</script>
