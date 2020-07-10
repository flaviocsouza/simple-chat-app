<template>
    <div class="row footer mb0">
        <div class="input-field col s10">
         <input v-model="newMessage" id="msg" type="text" >
          <label for="msg">Your Message</label>
        </div> 
        <div  class="col s2">
            <button 
                @click="sendMessage"
                class="waves-effect waves-light cyan lighten-2 btn-large">
                Send
            </button>
        </div>
      </div>
</template>
<script>
import M from 'materialize-css'

export default {
    name:'NewMessage',
    data() {
        return{
            newMessage: ''
        }
    },
    methods:{
        sendMessage(){
            if(this.newMessage.length > 0){
                this.$emit('messageSend', this.newMessage);
                this.newMessage = '';
            }
            else{
                M.toast({html:'Write a message to send.', displayLength: 1000})    
            }            
        }
    },
    mounted () {
        M.AutoInit()
    }
        
}
</script>
<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
  background-color: #FFFFFF;
}
</style>