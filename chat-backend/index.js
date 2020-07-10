const WebSocketServer = require('websocket').server;
const http = require('http');

let clients = [];

const server = http.createServer(function(req, resp){
    console.log(`mensagem recebida de ${req.url} ás ${new Date()}`);
    resp.writeHead(404);
    resp.end();
});

server.listen(8090, () =>{
    console.log(`Ouvindo a porta 8090  - ${new Date()}`);

})

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

function orignIsAllowed(orign){
    
    console.log(` Allow -> origem: ${orign}`)
    return true;
}

wsServer.on(`request`,  function(request){
    
    if(!orignIsAllowed(request.origin))
    {
        console.log('Rejeitado');
        request.reject();
        return;
    }
    
    let  connection = request.accept('echo-protocol', request.origin);
    let index = clients.push(connection) -1;

    connection.on('message', function(message){
        if(message.type === 'utf8'){
            console.log(`mensagem recebida: ${message.utf8Data}`);  
            
            const responseMessage = {
                            id: message.Date,
                            sender: request.origin,
                            text: message.utf8Data                           
                        };
            
            console.log(`Mensagem a enviar ${responseMessage}`)

            clients.forEach(client => client.sendUTF(JSON.stringify(responseMessage)));
        }
        else {
            connection.sendUTF('Mensagem de tipo não Suportado');
        }
    });
    connection.on('close', function(reasonCode, description){
        console.log(`${connection.remoteAddress} desconectado as ${new Date()}`)
        clients.splice(index, 1);
    });
});