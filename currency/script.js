const API_key = "25441347de5071e964d155375ac6b72e";
//var baseURL = 'http://data.fixer.io/api/latest?access_key=25441347de5071e964d155375ac6b72e&symbols=USD,AUD,CAD,PLN,MXN&format=1';
//console.log(baseURL);


var getData = async (arg) => {

  const baseURL = await
  fetch(`http://data.fixer.io/api/latest?access_key=${API_key}&symbols=USD,AUD,CAD,PLN,MXN&format=1`);
  const data = await baseURL.json();

  var rates = data.rates;
		console.log(rates);
		
  for (var key in rates) {
		var elem = document.getElementById(key.toLowerCase()+'-value');  // currency value
		
	  if(elem){
		  var currencyElem = document.querySelector('#'+key.toLowerCase()+'-row .noId'); // No Yes button
		  var localValue = localStorage.getItem(key.toLowerCase());
		  
		  if(arg == 'sync' || !localValue){
			  elem.innerHTML = rates[key];
			  localStorage.removeItem(key.toLowerCase());
			  currencyElem.innerText = "No";
		  }else{
			  elem.innerHTML = localValue;					  
			  currencyElem.innerText = "Yes";
			}
			console.log(localValue);
	  }
  }
}
getData();


function openEditor(currency){
	var element = document.getElementById('current-currency');  // modal span element
	element.innerHTML = currency.toUpperCase();	
	$('#currency-editor').modal('show');
}


function getValue(){
  let inputElem = document.getElementById("currency-value");  // modal input 
  let currency = document.getElementById("current-currency").innerHTML.toLowerCase();  // span element
  
  let currencyElem = document.querySelector('#'+currency+'-row .noId');  // No Yes button
  let currencyValueElem =  document.getElementById(currency+'-value');  // currency value
  
  

  currencyValueElem.innerHTML = inputElem.value;
 
  if (!(inputElem.value >= '0' && inputElem.value <= '9')) {
    currencyValueElem.innerHTML = "Write numbers!!!";
  } else {
    currencyElem.innerText = "Yes";
	  localStorage.setItem(currency, inputElem.value);	
  }
}
