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
			var obj;
			var  g = {
      nodes: [],
      edges: []
    };
            $('#results').show();
						$("#insTrans").show();
						$('#graph').show();
						document.getElementById("container1").innerHTML = "";
            var radioValue = $("input[name='example']:checked").val();
			
            if (radioValue==1) {
			var value = Distributor.getdescendant($("#_address").val(), function (err, result) {
                console.log(err, result);
								var i,text=" ";
								
								var k=[];
								k[0] = $("#_address").val();
								g.nodes.push({
									id: $("#_address").val(),
									label: $("#_address").val(),
									x: -1,
									y: -1,
									size: 3,
									color: '#eb4034'
								});
								l=0;
								temp=0;
								var flag=[];
								for (i = 0; i < result[0].length-1; i++) {
								console.log(result[0][i]);
								}
								var x=find(k[0]);
								function find(r){
										for (i = 0; i < result[0].length-1; i++) {
											if(r==result[0][i] && result[0][i+1]!='0x9000000000000000000000000000000000000000'){
												l++;
												k[l]=result[0][i+1];
												g.nodes.push({
													id: result[0][i+1],
													label: result[0][i+1],
													x: temp-i,
													y: temp,
													size: 3,
													color: '#666'
												});
												g.edges.push({
													id: 'n'+ result[0][i+1],
													source: result[0][i+1],
													target:r,
													size: Math.random(),
													color: '#ccc'
												});
											}
										}
										for (i = 0; i < result[1].length-1; i++) {
											if(r==result[1][i] && result[1][i+1]!='0x9000000000000000000000000000000000000000'){
												l++;
												k[l]=result[1][i+1];
												g.nodes.push({
													id: result[1][i+1],
													label: result[1][i+1],
													x: temp-i-4,
													y: temp,
													size: 3,
													color: '#666'
												});
												g.edges.push({
													id: 'b'+ result[1][i+1],
													source: result[1][i+1],
													target:r,
													size: Math.random(),
													color: '#ccc'
												});
											}
										}
										temp++;										
								}
								while(k[temp]!=null) {
									var x=find(k[temp]);
								  }
						
								for (i = 0; i < k.length; i++) {
									text += k[i] + "<br>";
									var values = Distributor.getData(k[i], function (err, result) {
										
										var x=maps(web3.toUtf8(result[0]));
										
									});

								}


								s = new sigma({
									graph: g,
									container: 'container1'
								  });
							document.getElementById("insTrans").innerHTML=text;
						});
						
        }
      else if (radioValue==2) {
        	var value = Distributor.getparent($("#_address").val(), function (err, result) {
            console.log(err, result);
					var i,text=" " ;
					for (var j = result[1].length-1; j >= 0; j--) {
					console.log(result[1][j]);}

					for (i = result[0].length-1 ; i >= 0; i--) {
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
			g.nodes.push({
				id: 'n'+$("#_address").val(),
				label: $("#_address").val() ,
				x: result[0].length+2,
				y: result[0].length+2,
				size: 3,
				color: '#eb4034'
			});
			if (result[0][0]!=null){
			g.edges.push({
				id:  $("#_address").val(),
				source:'n'+$("#_address").val(),
				target:'n'+ result[0][0],
				size: Math.random(),
				color: '#ccc'
			});
			
		}
			s = new sigma({
				graph: g,
				container: 'container1'
			  });
			  text += $("#_address").val() + "<br>";

			document.getElementById("insTrans").innerHTML=text;
		});	
	 }
	 else{
		var text=" " ;
		var text1=" " ;

					var value = Distributor.getparent($("#_address").val(), function (err, result) {
						console.log(err, result);
								
							
								for (var i = result[0].length-1 ; i >= 0; i--) {
									text += result[0][i] + "<br>";
									console.log(result[0][i]);																		

								  var temp=-1;
									
												
									for (var j=result[1].length; j >=0 ; j-- ){
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
						
						if (result[0][0]!=null){
						g.edges.push({
							id:  $("#_address").val(),
							source:$("#_address").val(),
							target:'n'+ result[0][0],
							size: Math.random(),
							color: '#ccc'
						});
						
					}
						 
					});	
					var value2 = Distributor.getdescendant($("#_address").val(), function (err, result) {
						console.log(err, result);
										
				
										var k=[];
										k[0] = $("#_address").val();
										g.nodes.push({
											id: $("#_address").val(),
											label: $("#_address").val(),
											x: -1,
											y: -1,
											size: 3,
											color: '#eb4034'
										});
										l=0;
										temp=0;
										var flag=[];
										for (i = 0; i < result[0].length-1; i++) {
										console.log(result[0][i]);
										}
										var x=find(k[0]);
										function find(r){
												for (i = 0; i < result[0].length-1; i++) {
													if(r==result[0][i] && result[0][i+1]!='0x9000000000000000000000000000000000000000'){
														l++;
														k[l]=result[0][i+1];
														g.nodes.push({
															id: result[0][i+1],
															label: result[0][i+1],
															x: temp-i,
															y: temp,
															size: 3,
															color: '#666'
														});
														g.edges.push({
															id: 'n'+ result[0][i+1],
															source: result[0][i+1],
															target:r,
															size: Math.random(),
															color: '#ccc'
														});
													}
												}
												for (i = 0; i < result[1].length-1; i++) {
													if(r==result[1][i] && result[1][i+1]!='0x9000000000000000000000000000000000000000'){
														l++;
														k[l]=result[1][i+1];
														g.nodes.push({
															id: result[1][i+1],
															label: result[1][i+1],
															x: temp-i-4,
															y: temp,
															size: 3,
															color: '#666'
														});
														g.edges.push({
															id: 'b'+ result[1][i+1],
															source: result[1][i+1],
															target:r,
															size: Math.random(),
															color: '#ccc'
														});
													}
												}
												temp++;										
										}
										while(k[temp]!=null) {
											var x=find(k[temp]);
										  }
								
										for (i = 0; i < k.length; i++) {
											text1 += k[i] + "<br>";
		
										}
								s = new sigma({
									graph: g,
									container: 'container1'
								  });
								  var newtext=text+text1;
								  document.getElementById("insTrans").innerHTML= newtext;

								});


	}	 
});


