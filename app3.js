 (function (){

     const config = {
		 apiKey: "AIzaSyByiVZCx2lMwJerAGR6TkgLXhozKvEwrO8",
	    authDomain: "silent-relic-219002.firebaseapp.com",
    	databaseURL: "https://silent-relic-219002.firebaseio.com",
    	projectId: "silent-relic-219002",
   		storageBucket: "silent-relic-219002.appspot.com",
    	messagingSenderId: "515739637546"
  		};
  		firebase.initializeApp(config);

    //Get elements
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
	
    //Click login event listener
    btnLogin.addEventListener('click', e=> {
        firebase.auth().signInAnonymously();
        alert("You have logged in anonymously! Wait until 'Logout' option appears");
        //setTimeout('Redirect()', 3000);
        //function Redirect(){window.location = '3 tasks.html';}
        
    });

    //Click logout event listener
    btnLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
        alert("You have successfully logged out! Wait until 'Login Anonymously' option appears");
    });

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



