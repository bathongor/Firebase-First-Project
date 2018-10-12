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

    //Get elements
    var btnLogin = document.getElementById('btnLogin');
    var btnLogout = document.getElementById('btnLogout');
	var btnRedirect = document.getElementById('btnRedirect');
	
    //Click login event listener
    btnLogin.addEventListener('click', e=> {
        firebase.auth().signInAnonymously();
        alert("You have logged in anonymously!");
		window.location = '3 tasks.html';
    });

    //Click logout event listener
    btnLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
        alert("You have successfully logged out!");
    });
	
	//Click redirect event listener
   // btnRedirect.addEventListener('click', e=>{
     //   window.location = '3 tasks.html';
    //});

    //Auth listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
        if(firebaseUser){
            btnLogout.classList.remove('hidden');
            btnLogin.classList.add('hidden');
        }else{
            btnLogout.classList.add('hidden');
            btnLogin.classList.remove('hidden');
        }
    });
	
 }());



