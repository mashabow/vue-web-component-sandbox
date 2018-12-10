<template>
  <div>{{label}}: {{count}}
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { mapMutations, mapState } from 'vuex';
import store from '../store';

export default {
  store,
  props: ['label'],
  computed: mapState(['count']),
  methods: mapMutations(['increment']),
};
</script>
