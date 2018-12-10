<template>
  <div>[B] {{label}}: {{count}}
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex';
import store from '../store';

export default {
  store,
  props: ['label'],
  computed: mapState(['count']),
  methods: mapMutations(['decrement']),
};
</script>
