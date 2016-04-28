var onStart = function() {
  console.log('Start!');  
};

var onProgress = function(number) {
  console.log('Your progress', number );  
};

var onEnd = function() {
  console.log('You\'re done');  
};


function start(){
	onStart();
	for(var i = 1; i <= 100; i++){
		if( i % 10 === 0){
			onProgress(i);
		}
	}
	
	onEnd();
	
}

start();