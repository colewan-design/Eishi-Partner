<!-- Model.vue -->
<script setup>
import { ref } from 'vue'
import { useGLTF, TresObject3D, useLoop } from '@tresjs/cientos'

const modelRef = ref(null)
const scene = ref(null)

// Load GLB asynchronously
useGLTF('/models/home.glb').then((gltf) => {
  scene.value = gltf.scene

  // Optional: adjust scale/position if model is too big/small
  scene.value.scale.set(0.5, 0.5, 0.5)
  scene.value.position.set(0, 0, 0)
})

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (modelRef.value) {
    modelRef.value.rotation.y = elapsed * 0.4
  }
})
</script>

<template>
  <TresObject3D v-if="scene" :object="scene" ref="modelRef" />
</template>
