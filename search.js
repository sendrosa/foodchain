$('#results').hide();
$('#graph').hide();

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
	
	
	
var Distributor = DistributorContract.at('0x94ab12684b94698e91e421260085405292e46349');
console.log(Distributor);


        $("#button").click(function() {
			var obj;
			var  g = {
      nodes: [],
      edges: []
    };
            $('#results').show();
						$("#insTrans").show();
						$('#graph').show();

            var radioValue = $("input[name='example']:checked").val();

            if (radioValue==1) {
			var value = Distributor.getdescendant($("#_address").val(), function (err, result) {
                console.log(err, result);
								var i,text=" ";
								

								for (var i = 0; j < result[i].length; j++) {
									console.log(result[0][i])
									;}


									for (i = 0; i < result[0].length; i++) {
										text += result[0][i] + "<br>";
										var temp=-1;
										
																						console.log(result[0][i])

										for (var j=0; j< result[1].length; j++ ){
											if (result[0][i]==result[1][j]){
												temp=j;
												break;
											}							
										}
										
										if(temp!=-1){
											for (var j=temp+1; j< result[1].length; j++ ){
												if (i+1<result[0].length || result[1][j]=='0x9000000000000000000000000000000000000000'){
														break;
												}
												text +=  "&nbsp &nbsp &nbsp" + result[1][j] + "<br>";
												g.nodes.push({
													id: 'b' +result[1][j],
													label: result[1][j],
													x: result[1].length-j,
													y: result[0].length-i,
													size: 3,
													color: '#666'
												});	
												if (i>=1) {	
													g.edges.push({
													id: result[1][j],
													source: 'n'+result[0][i-1],
													target:  'b'+result[1][j],
													size: Math.random(),
													color: '#ccc'
												});
												}													
											}
										}
				
										g.nodes.push({
											id: 'n'+result[0][i],
											label: result[0][i],
											x: result[0].length-i,
											y: result[0].length-i,
											size: 3,
											color: '#666'
										});
										if (i>=1) {	
											g.edges.push({
											id:  result[0][i],
											source:'n'+result[0][i-1],
											target:'n'+ result[0][i],
											size: Math.random(),
											color: '#ccc'
										});
										}
							} 
							s = new sigma({
								graph: g,
								container: 'container1'
								});
							document.getElementById("insTrans").innerHTML=text;
						});
						
        }
      else {
        	var value = Distributor.gettree($("#_address").val(), function (err, result) {
            console.log(err, result);
					var i,text=" " ;
					for (var j = 0; j < result[1].length; j++) {
					console.log(result[1][j]);}
					for (i = 0; i < result[0].length; i++) {
						text += result[0][i] + "<br>";
			  		var temp=-1;
						
									
						for (var j=0; j< result[1].length; j++ ){
							if (result[0][i]==result[1][j]){
								temp=j;
								break;
							}							
						}
						
						if(temp!=-1){
							for (var j=temp+1; j< result[1].length; j++ ){
								if (i+1<result[0].length && result[1][j]=='0x9000000000000000000000000000000000000000'){
										break;
								}
								text +=  "&nbsp &nbsp &nbsp" + result[1][j] + "<br>";
								g.nodes.push({
									id: 'b' +result[1][j],
									label: result[1][j],
									x: result[1].length-j,
									y: result[0].length-i,
									size: 3,
									color: '#666'
								});	
								if (j>=1) {	
									g.edges.push({
									id: result[1][j],
									source: 'n'+result[0][i+1],
									target:  'b'+result[1][j],
									size: Math.random(),
									color: '#ccc'
								});
								}													
							}
						}

						g.nodes.push({
							id: 'n'+result[0][i],
							label: result[0][i],
							x: result[0].length-i,
							y: result[0].length-i,
							size: 3,
							color: '#666'
						});
						if (i>=1) {	
							g.edges.push({
							id:  result[0][i],
							source:'n'+result[0][i-1],
							target:'n'+ result[0][i],
							size: Math.random(),
							color: '#ccc'
						});
						}
			} 
			s = new sigma({
				graph: g,
				container: 'container1'
			  });
			document.getElementById("insTrans").innerHTML=text;
		});
		
   }
});
