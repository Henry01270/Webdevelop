const express = require('express') // 익스프레스 라이브러리 불러오기
const app = express();

// 8080 포트로 들어왔을때 실행
app.listen(8080, function(){
    console.log('listening on 8080')
});

//누군가가 /pet으로 방문을 하면 pet 관련된 안내문을 띄워주기
app.get('/pet', function(request, response){
    response.send('펫 용품 페이지입니다.')
});

//주소를 /하나만 하면 홈페이지라는 뜻
app.get('/', function(request, response){ 
    response.sendFile(__dirname + '/index.html')
});