$('#maptitle').hide();


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
                "inputs": [],
                "name": "getInstructors1",
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
                "constant": false,
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
                        "name": "data",
                        "type": "address"
                    }
                ],
                "name": "npush",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
	
	
	
var Distributor = DistributorContract.at('0xcb13fb732Ec355e57e461Dbb8ee6b267EF748ADa');
console.log(Distributor);


        $("#button").click(function() {

        	var value = Distributor.getmaps($("#_address").val(), function (err, result) {
                console.log($("#_address").val());
            //console.log(err, result);
            var flag1;


if($($("#switch1")).prop("checked") == true){
flag=1;
}else{
flag=0;
} 


                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 5,
                    center: {lat: 39.0742, lng: 21.8243},
                    mapTypeId: 'hybrid'

                });
            
            var poly = new google.maps.Polyline({
                strokeColor: '#000000',
                strokeOpacity: 1.0,
                strokeWeight: 3
              });
              poly.setMap(map);
              var path = poly.getPath();

            
            

              

      
            var geocoder = new google.maps.Geocoder();
            function maps(result,quantity){
                
                var address = result;
                    geocoder.geocode({'address': address}, function(results, status) {
                    if (status === 'OK') {
                        map.setCenter(results[0].geometry.location);
                        
                        
                        if (flag==1){
                            
                            heat.push({location: results[0].geometry.location, weight: quantity});
                        }
                        else{var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            weight: 5
                            });
                            path.push(results[0].geometry.location);}
                        

                        
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                    });
            }
					for (var i =0 ; i <result[0].length; i++) {
                        console.log(web3.toDecimal(result[2][i]));

                    maps(web3.toUtf8(result[1][i]),web3.toDecimal(result[2][i]));
                }
                var heatmap = new google.maps.visualization.HeatmapLayer;
                // ({data: heat});
              heatmap.setMap(map);
              var heat= heatmap.getData();

  
                


		});	
	 });