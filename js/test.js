let users = [
	{
	  id: "123456789",
	  createdDate: "2021-01-06T00:00:00.000Z",
	  status: "En validation",
	  firstName: "Mohamed",
	  lastName: "Taha",
	  userName: "mtaha",
	  registrationNumber: "2584",
	},
	 {
	  id: "987654321",
	  createdDate: "2021-07-25T00:00:00.000Z",
	  status: "Validé",
	  firstName: "Hamid",
	  lastName: "Orrich",
	  userName: "horrich",
	  registrationNumber: "1594",
	},
	   {
	  id: "852963741",
	  createdDate: "2021-09-15T00:00:00.000Z",
	  status: "Rejeté",
	  firstName: "Rachid",
	  lastName: "Mahidi",
	  userName: "rmahidi",
	  registrationNumber: "3576",
	}
  ];

  function fetch()
  {
    var  tbody="";
    for(var  i in users)
    {
        
      var statut="";
      if(users[i]['status']=="En validation")
      {
        statut=`<span class='chip on-validation'>${users[i]['status']}</span>`;
      }
      else if(users[i]['status']=="Validé")
      {
        statut=`<span class='chip valide '>${users[i]['status']}</span>`;

      }
      else 
      {
        statut=`<span class='chip rejected '>${users[i]['status']}</span>`;

      }
     
      tbody+=`<tr class="${i==users.length-1?'border-tr':''}" >
      <td>${users[i]['id']}</td>
      <td>${moment(users[i]['createdDate']).utc().format('MM/DD/YYYY') }</td>
      <td >${statut}</td>
      <td>${users[i]['firstName']}</td>
      <td>${users[i]['lastName']}</td>
      <td>${users[i]['userName']}</td>
      <td class="matricule">${users[i]['registrationNumber']}</td>
      <td class="center-th"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></i></td>
      </tr>`;

    }
    document.getElementById('tst').innerHTML=tbody;
    


    
  }
  function add_user() {
 
      
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var etat = document.getElementById("etat").value;
    var  nom_user= document.getElementById("nom_user").value;
    var date_creation = document.getElementById("date_creation").value;
    var matricule = document.getElementById("matricule").value;
    var nombre=users.length-1;
    if(nom=="" || prenom=="" || etat=="" || nom_user=="" || date_creation=="" || matricule=="" )
    {
      alert("Tous les champs sont  obligatoire");
    }
    else
    {
    if (isDate(date_creation)) {
      if(etat=="En validation" ||etat=="Validé" || etat=="Rejeté" ) 
      {
        var id=Number(users[nombre]['id'])+1;

        values = [id, date_creation, etat, nom,prenom,nom_user,matricule];
       
        var keys = ['id','createdDate', 'status', 'firstName','lastName','userName','registrationNumber'];
     
    var object = {};
    
    for(i = 0 ; i < keys.length && i < values.length ; i++){
       object[keys[i]] = values[i];
       
    }
    
    users.push(object);
    document.getElementById("myform").reset()
     fetch();
      }
      else
      {
        alert("Erreur :le champ état n'accepte pas sauf trois valeurs : En validation, Validé, Rejeté")
      }
      
  } 
  else { 
      alert('Invalid date format! veuillez vérifier votre sisie'); 
  } 
}
   
    
  }
  fetch();
  document.getElementById("add_user").onclick = function() {add_user()}
  function isDate(ExpiryDate) { 
    var objDate,  // date object initialized from the ExpiryDate string 
        mSeconds, // ExpiryDate in milliseconds 
        day,      // day 
        month,    // month 
        year;     // year 
    // date length should be 10 characters (no more no less) 
    if (ExpiryDate.length !== 10) { 
        return false; 
    } 
    // third and sixth character should be '/' 
    if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') { 
        return false; 
    } 
    // extract month, day and year from the ExpiryDate (expected format is mm/dd/yyyy) 
    // subtraction will cast variables to integer implicitly (needed 
    // for !== comparing) 
    month = ExpiryDate.substring(0, 2) - 1; // because months in JS start from 0 
    day = ExpiryDate.substring(3, 5) - 0; 
    year = ExpiryDate.substring(6, 10) - 0; 
    // test year range 
    if (year < 1000 || year > 3000) { 
        return false; 
    } 
    // convert ExpiryDate to milliseconds 
    mSeconds = (new Date(year, month, day)).getTime(); 
    // initialize Date() object from calculated milliseconds 
    objDate = new Date(); 
    objDate.setTime(mSeconds); 
    // compare input date and parts from Date() object 
    // if difference exists then date isn't valid 
    if (objDate.getFullYear() !== year || 
        objDate.getMonth() !== month || 
        objDate.getDate() !== day) { 
        return false; 
    } 
    // otherwise return true 
    return true; 
}




 
 


 
