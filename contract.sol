pragma solidity ^0.4.18;


contract Onecontract  {
    
    struct Node {
        address p_address;
        address lb_address;
        address rb_address;
        address descendant;
        
    }
    
       
     struct Instructor{
       bytes16 foodwhere;
       uint quantity;
       bytes16 foodtype;
       uint ph;
       uint sensor1;
    }
    
   
   
       mapping (address => Instructor) instructors;
       mapping (address => Node) nodes;

       address[] public instructorAccts;
       address[]public  parentnew;
       address[]public  descendantnew;


    event instructorInfo(
       bytes16 foodwhere,
       bytes16 foodtype,
       uint quantity,
       address iaddress
    );
    
   function setInstructor(address p_address, address lb_address, bytes16 _foodwhere, uint _quantity, bytes16 _foodtype, uint _ph, uint _sensor1) public {


        bytes20 b = bytes20(keccak256(_foodwhere,_quantity));
        uint addr = 0;
        for (uint index = b.length-1; index+1 > 0; index--) {
            addr += uint(b[index]) * ( 16 ** ((b.length - index - 1) * 2));
        }

    address _address= address(addr);

     var instructor = instructors[_address];

        instructor.foodwhere = _foodwhere;
        instructor.foodtype = _foodtype;
        instructor.ph = _ph;
        instructor.sensor1 = _sensor1;
        instructor.quantity = _quantity;
        instructorAccts.push(_address) -1;

     var  node=nodes[_address];
       node.p_address=p_address;
       node.descendant=0x0000000000000000000000000000000000000000;
       node.rb_address=0x0000000000000000000000000000000000000000;
       node.lb_address=lb_address;


    if (nodes[p_address].descendant == 0x0000000000000000000000000000000000000000){
            nodes[p_address].descendant=_address;
       }
       else{
           nodes[lb_address].rb_address= _address;
       }
        instructorInfo(_foodwhere, _foodtype, _quantity, _address);
   }
   
    function getInstructors() view public returns(address[]) {
        return instructorAccts;
    }    

   function getInstructor(address _address) public  {
       address parent = nodes[_address].p_address;
       uint i=0;

       while(parent != 0x0000000000000000000000000000000000000000){
        parentnew.push(parent) -1;
        i++;
        parent = nodes[parent].p_address;
        } 
   }
    
     function gettree(address _address)  view public returns(address[]) {
        getInstructor(_address);
        return parentnew;
    }
    
       function getInstructors(address _address) public  {
       address descendant = nodes[_address].descendant;
       uint i=0;

       while(descendant != 0x0000000000000000000000000000000000000000){
        descendantnew.push(descendant) -1;
        i++;
        descendant = nodes[descendant].descendant;
        } 
   }
    
   function getdescendant(address _address)  view public returns(address[]) {
        getInstructors(_address);
        return descendantnew;
    }
}
    