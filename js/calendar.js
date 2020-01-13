"use strict"

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }


var myInit = { method: 'GET',
			   headers: {
			   	'Content-Type': 'application/json'
			   },
			   mode: 'cors',
			   cache: 'default'};

let myRequest = new Request("./jogo.json", myInit);

fetch(myRequest)
			.then(function(resp) {
				return resp.json();
			})
			.then(function(data){
				console.log(data);
			});
				
				
				

				