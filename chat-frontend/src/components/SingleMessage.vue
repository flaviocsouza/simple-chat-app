<template>
    <div class="row">
    <div class="col s12 m6">
      <div class="card cyan lighten-4 z-depth-2 left-align">
        <div class="card-content">
          <p class="card-title">{{message.sender}} diz:</p>
          <p>{{message.text}}</p>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['message']
    
}
</script>
<style scoped>

</style>