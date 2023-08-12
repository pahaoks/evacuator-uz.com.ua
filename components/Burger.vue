<template>
  <div class="burger-container burger-nav-container" @click="onClick(!props.modelValue)">
      <input class="burger-checkbox" type="checkbox" name="name" :checked="props.modelValue" />
      <div class="burger-lines">
          <span class="burger-line line1"></span>
          <span class="burger-line line2"></span>
          <span class="burger-line line3"></span>
      </div>
  </div>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const onClick = (val) => {
  emit('update:modelValue', val)
}
</script>

<style lang="sass" scoped>
.burger-container
  width: 80px
  height: 80px
  float: left

.burger-nav-container .burger-checkbox 
  display: flex
  height: 32px
  width: 32px
  left: 20px
  z-index: 15
  opacity: 0
  cursor: pointer
  margin-top: 13px

.burger-nav-container .burger-lines 
  display: block
  height: 26px
  width: 32px
  position: absolute
  top: 25px
  left: 20px
  z-index: 2
  display: flex
  flex-direction: column
  justify-content: space-between

.burger-lines .burger-line 
  display: block
  height: 4px
  width: 100%
  border-radius: 10px
  background: #0e2431

.burger-lines .line1
  transform-origin: 0% 0%
  transition: transform 0.4s ease-in-out

.burger-lines .line2
  transition: transform 0.2s ease-in-out

.burger-lines .line3
  transform-origin: 0% 100%
  transition: transform 0.4s ease-in-out

input[type="checkbox"]:checked ~ .burger-lines .line1
  transform: rotate(45deg)

input[type="checkbox"]:checked ~ .burger-lines .line2
  transform: scaleY(0)

input[type="checkbox"]:checked ~ .burger-lines .line3
  transform: rotate(-45deg)


</style>