<template>
  <div v-if="appState.picture">
    <img :src="`${appState.picture.url}`" />
    {{ appState.picture.explanation }}
  </div>
</template>

<script>
import { computed } from "vue";
import { appState } from "../AppState";
export default {
  setup() {
    return {
      appState: computed(() => appState),
    };
  },
};
</script>