const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send('hello world!');
})

// app.listen() 함수를 사용해서 서를 실행해준다.
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있다.
app.listen(port, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port}`)
})