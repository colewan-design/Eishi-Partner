<script setup>
import { GLTFModel, OrbitControls } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <div class="landing-hero">
    <TresCanvas clear-color="#1c1c1c" window-size style="width: 100vw; height: 100vh;">

      <!-- Camera -->
      <TresPerspectiveCamera :position="[8, 6, 8]" :look-at="[0, 1, 0]" />

      <!-- Controls -->
      <OrbitControls :enablePan="false" :enableZoom="false" />

      <!-- Lights -->
      <TresAmbientLight :intensity="0.5" />
      <TresDirectionalLight :position="[10, 15, 10]" :intensity="1" />

      <!-- 3D House Model -->
      <Suspense>
        <GLTFModel 
          path="/models/home.glb" 
          :castShadow="true" 
          :receiveShadow="true" 
        />
      </Suspense>

    </TresCanvas>

    <!-- Landing page overlay content -->
    <div class="landing-content">
      <h1>Welcome to Dream Estates</h1>
      <p>Explore premium real estate in stunning 3D</p>
      <button>View Listings</button>
    </div>
  </div>
</template>

<style scoped>
.landing-hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #1c1c1c;
}

.landing-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  z-index: 10;
  max-width: 90%;
}

.landing-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.landing-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.landing-content button {
  padding: 1rem 2.5rem;
  font-size: 1rem;
  background-color: #ff6b35;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
}

.landing-content button:hover {
  background-color: #ff4a00;
  transform: scale(1.05);
}
</style>
