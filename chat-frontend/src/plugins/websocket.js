// const W3CWebSocket = require('websocket').w3cwebsocket;

// let client;

// const urlConnection = 'ws://localhost:8090/';
// const protocol = 'echo-protocol';


// client.onopen =   () => console.log('Cliente Conectado');

// client.onerror =  err => console.log(`ERRO: ${err.toString()}`);

// client.onclose =  () => console.log('Conexão encerrada');

// client.onmessage = message => message.type === 'utf8'? console.log(message.utf8Data): null;


// export default{
//     connect(){
//         client = new(urlConnection, protocol);
//         return client;
//     }
// }