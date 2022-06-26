// JavaScript Sample

// 引数を用いた背景色の変更 
function MyFunction05( col ){ 
  var obj = document.body; 
  obj.style.backgroundColor = col; 
}

//ランダムな16進6桁のカラーコードを生成（汎用性のある関数） 
function randomColor(){  
    var col = Math.floor( Math.random() * 0xFFFFFF ).toString(16); 
    for( var i = col.length; i<6; i++ ) { col = '0' + col; } 
    return '#' + col; 
} 
// 背景色の変更 
function MyFunction06( ){   
  var obj = document.body; 
  obj.style.backgroundColor = randomColor(); 
} 