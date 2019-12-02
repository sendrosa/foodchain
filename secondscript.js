$('#other').hide();
$('#results').hide();
$("#insTrans1").hide();
$("#insTrans2").hide();


var flag;


$("#switch1").change(function(){
if($(this).prop("checked") == true){
$('#other').show();
flag=0;
}else{
$('#other').hide();
flag=1;

}});


    // This sample uses the Autocomplete widget to help the user select a
    // place, then it retrieves the address components associated with that
    // place, and then it populates the form fields with those details.
    // This sample requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script
    // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
    
    var placeSearch, autocomplete;
    
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };
    
    function initAutocomplete() {
      // Create the autocomplete object, restricting the search predictions to
      // geographical location types.
      autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'), {types: ['geocode']});
    
      // Avoid paying for data that you don't need by restricting the set of
      // place fields that are returned to just the address components.
      autocomplete.setFields(['address_component']);
    
      // When the user selects an address from the drop-down, populate the
      // address fields in the form.
      autocomplete.addListener('place_changed', fillInAddress);
    }
    
    function fillInAddress() {
      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();
    
      
	}
	
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var accountInterval = setInterval(function() {
// Check if account has changed
if (web3.eth.accounts[0] !== web3.eth.defaultAccount) {
web3.eth.defaultAccount = web3.eth.accounts[0];
// Call some function to update the UI with the new account
updateInterface();
}
}, 100);

window.ethereum.enable();


var DistributorContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"name": "",
				"type": "bytes16"
			},
			{
				"name": "",
				"type": "bytes16"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "parents",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dbrother",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "maps_quantity",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "maps_city",
		"outputs": [
			{
				"name": "",
				"type": "bytes16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInstructors",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "descendant",
				"type": "address"
			}
		],
		"name": "search",
		"outputs": [
			{
				"name": "flag",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getmaps_descedants",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "bytes16[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "brother",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "maps",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "descendantnew",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getdescendant",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getmaps",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "bytes16[]"
			},
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "descendants",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "parentnew",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pop",
		"outputs": [
			{
				"name": "data",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "propertiesAccts",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getparent",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "parent",
				"type": "address"
			}
		],
		"name": "findbrother",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "p_address",
				"type": "address"
			},
			{
				"name": "lb_address",
				"type": "address"
			},
			{
				"name": "_foodwhere",
				"type": "bytes16"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_foodtype",
				"type": "bytes16"
			},
			{
				"name": "_ph",
				"type": "uint256"
			},
			{
				"name": "_sensor1",
				"type": "uint256"
			}
		],
		"name": "setInstructor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "foodwhere",
				"type": "bytes16"
			},
			{
				"indexed": false,
				"name": "foodtype",
				"type": "bytes16"
			},
			{
				"indexed": false,
				"name": "quantity",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "iaddress",
				"type": "address"
			}
		],
		"name": "instructorInfo",
		"type": "event"
	}
]);
var Distributor = DistributorContract.at('0x9204dBD64f1deFa358207433b0Dd728Adb64CcB1');
console.log(Distributor);



$("#button").click(function() {

	Distributor.findbrother($("#_address").val(),function (err, result) {
		console.log(err, result);
			Distributor.setInstructor($("#_address").val(),result, $("#autocomplete").val(), $("#distributorquantity").val(), '','','',function (err, result) {
				console.log(err, result1);});
		
});


$('#results').show();
});
// { from: web3.eth.defaultAccount, gas: 300000 });

var hubinstructorEvent = Distributor.instructorInfo({},'latest');
		
hubinstructorEvent.watch(function (err, result) {
if (!err) {
if (result.blockHash != $("#instrans").html()) 
$('#wait1').hide();
$('#wait2').hide();
$("#insTrans1").show();
$("#insTrans2").show();
$("#insTrans1").html('Block hash: ' +result.blockHash);
$("#insTrans2").html('\n Address:' +result.args.iaddress );

$("#instructor").html(web3.toAscii(result.args.foodwhere) + ' ' + result.args.quantity+ ' '  );
} 
});
