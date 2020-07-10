<template>
    <div class="layout">
        <div>    
            <header-message/>
        </div>
        <div class="body">
            <div v-for="message in this.receviedMesages" :key =message.id>
                <single-message  :message="message" />
            </div>        
        </div>
        <div>
            <new-message @messageSend="onMessageSend"/>
        </div>
    </div>
</template>
<script>

import NewMessage from '../components/NewMessage'
import SingleMessage from '../components/SingleMessage'
import HeaderMessage from '../components/HeaderMessage'

const W3CWebSocket = require('websocket').w3cwebsocket;
const urlConnection = 'ws://localhost:8090/';
const protocol = 'echo-protocol';
let client;

export default {
    name:'Messages',
    data() {
        
        return{
            receviedMesages: []
            }
    },
    components:{
        'new-message':NewMessage,
        'single-message':SingleMessage,
        'header-message': HeaderMessage
    },
    methods:{
        onMessageSend(newMessage){
             if(client.readyState === client.OPEN){
                const messageToBeSent = newMessage;                
                client.send(messageToBeSent);                 
            }
        }
    },
    created(){
        client = new W3CWebSocket(urlConnection, protocol);
        client.onopen =   () => console.log('Cliente Conectado');
        client.onerror =  err => console.log(`ERRO: ${err.toString()}`);
        client.onmessage = message => this.receviedMesages.push(JSON.parse(message.data))
    }

}
</script>
<style scoped>
.body{
   width:100%;
   height: 100%;
   overflow-y:auto;
}
</style>