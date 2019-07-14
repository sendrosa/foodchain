$('#other').hide();
$('#results').hide();
$("#insTrans1").hide();
$("#insTrans2").hide();

$("#switch1").change(function(){
if($(this).prop("checked") == true){
$('#other').show();
_lbaddress='0x0000000000000000000000000000000000000000';
}else{
$('#other').hide();
}});

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
var Distributor = DistributorContract.at('0x99f2ab49be51c8821ad851ffd51382eec83e4e32');
console.log(Distributor);




$("#button").click(function() {
    Distributor.setInstructor($("#_address").val(),$("#_lbaddress").val(), $("#distributorwhere").val(), $("#distributorquantity").val(), '','','',function (err, result) {
console.log(err, result);});
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
