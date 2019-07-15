$('#results').hide();

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
				"name": "getInstructor",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
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
				"constant": false,
				"inputs": [
					{
						"name": "_address",
						"type": "address"
					}
				],
				"name": "getInstructors",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
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
				"name": "instructorAccts",
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
				"constant": true,
				"inputs": [
					{
						"name": "_address",
						"type": "address"
					}
				],
				"name": "gettree",
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
	
	
	
var Distributor = DistributorContract.at('0x5838272e2fd45be433c0e9fd552c0c20cb6820e7');
console.log(Distributor);


        $("#button").click(function() {

            $('#results').show();
            $("#insTrans").show();
            var radioValue = $("input[name='example']:checked").val();

            if (radioValue==1) {
			var value = Distributor.getdescendant($("#_address").val(), function (err, result) {
                console.log(err, result);
                var i,text=" ";
                for (i = 0; i < result.length; i++) {			
                text += result[i] + "<br>";
		    } 
            document.getElementById("insTrans").innerHTML=text});
        }
        else {
            var value = Distributor.gettree($("#_address").val(), function (err, result) {
            console.log(err, result);
            var i,text=" ";
            for (i = 0; i < result.length; i++) {			
            text += result[i] + "<br>";
            } 
            document.getElementById("insTrans").innerHTML=text});
        }
});
