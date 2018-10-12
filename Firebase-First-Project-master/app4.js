(function (){

	 var config = {
		 apiKey: "AIzaSyByiVZCx2lMwJerAGR6TkgLXhozKvEwrO8",
	    authDomain: "silent-relic-219002.firebaseapp.com",
    	databaseURL: "https://silent-relic-219002.firebaseio.com",
    	projectId: "silent-relic-219002",
   		storageBucket: "silent-relic-219002.appspot.com",
    	messagingSenderId: "515739637546"
  		};
  		firebase.initializeApp(config);

	
	//Auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
        if(firebaseUser){
            
			document.getElementById('eventClick').onclick= function(){	
			document.getElementById('ClickMe').innerHTML++; 
		}
			
        }else{
            alert("You are not logged in! Access denied!");
        }
    });

	
	
 }());