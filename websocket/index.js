const ws = require ('ws');
console.log(ws.Server)
const webSocketServer = new ws.Server({port:3000}) //创建了一个端口为3000的服务器
const sockets=[];
function tellOther (data,type,ignore){
    sockets.forEach(item=>{
        if(item!==ignore){
            item.send(JSON.stringify({data,type}))
        }
    })
}
webSocketServer.on('connection',(socket)=>{
    sockets.push(socket);
    tellOther('有一个人加入了','msg')
    tellOther(sockets.length,'num')
    socket.on('message',(data)=>{
        tellOther(data,'chat',socket)
    })
    socket.on('close',()=>{
        let index = sockets.findIndex(item=>item===socket)
        if(index>0){
            sockets.splice(index,1)
        }
        tellOther('有一个人退出了','msg')
        tellOther(sockets.length,'num')
    })
})