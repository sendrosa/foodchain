$('#results').hide();
$("#insTrans1").hide();
$("#insTrans2").hide();

window.addEventListener('load', function () {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }



})

var account = web3.eth.accounts[0];
var accountInterval = setInterval(function () {
    if (web3.eth.accounts[0] !== account) {
        account = web3.eth.accounts[0];
    }
}, 100);

window.ethereum.enable();


console.log(web3.eth.accounts[0]);



var FoodchainContract = web3.eth.contract([
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
		"name": "getgraph",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			},
			{
				"name": "",
				"type": "address[]"
			},
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
var Foodchain = FoodchainContract.at('0x94ab12684b94698e91e421260085405292e46349');
console.log(Foodchain);




$("#button").click(function () {
    Foodchain.setInstructor('0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', $("#foodwhere").val(), $("#quantity").val(), $("#foodtype").val(), $("#ph").val(), $("#sensor1").val(), { from: account }, function (err, result) {
        console.log(err, result)
    });
    $('#results').show();

});
//, { from: web3.eth.defaultAccount, gas: 300000 }    web3.eth.defaultAccount = web3.eth.accounts[0];

var instructorEvent = Foodchain.instructorInfo({}, 'latest');

instructorEvent.watch(function (err, result) {
    
    if (result) {
        if (result.blockHash != $("#instrans").html())
            $('#wait1').hide();
            $('#wait2').hide();
            $("#insTrans1").show();
            $("#insTrans2").show();
            
        $("#insTrans").html('Block hash: ' + result.blockHash);
        $("#insTrans2").html('\n Address:' + result.args.iaddress);
        $("#instructor").html(web3.toAscii(result.args.foodwhere) + ' ' + web3.toAscii(result.args.foodtype) + ' ' + result.args.quantity + ' ');
    }
});
