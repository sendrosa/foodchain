pragma solidity ^0.4.18;


contract Onecontract  {
    
    uint i=0;
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
       address[]public  brother;
       address[]public  dbrother;



    event instructorInfo(
       bytes16 foodwhere,
       bytes16 foodtype,
       uint quantity,
       address iaddress
    );
    
   function setInstructor(address p_address, address lb_address, bytes16 _foodwhere, uint _quantity, bytes16 _foodtype, uint _ph, uint _sensor1) public {


       i=i+1;

    address _address= address(i);

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
           nodes[lb_address].rb_address=_address;
       }
        instructorInfo(_foodwhere, _foodtype, _quantity, _address);
   }
   
   
   function getData(uint _id) view public returns (bytes16, bytes16, uint, address, uint ){
        address _address= address(_id);
        address root = _address;
        if (nodes[_address].p_address != 0x0000000000000000000000000000000000000000){
               uint i=0;
               address parent = nodes[_address].p_address;
               while(parent != 0x0000000000000000000000000000000000000000){
                    root = parent;
                    parent = nodes[parent].p_address;
                    i=i+1;
                } 
        }
            
        return (instructors[_address].foodwhere, instructors[root].foodtype, instructors[_address].quantity, _address, i );
    }  
   
    function getInstructors1() view public returns(address[]) {
        return instructorAccts;
    }    
 
   
    address[] temp1;
    address[] temp2;

     function npush(address data) public {
        temp1.push(data);
    }
 function pop() public returns (address data) {
        data = temp1[temp1.length - 1];
        temp1.length -= 1;
    }

   function search(address descendant)  public returns(bool flag){
       flag=false;
       for (uint k=0; k<temp2.length; k++){
           if (temp2[k]==descendant) {
               flag=true;
               break;
           }
       }   
       return flag;
       }
    
   

   function descendants(address _address) public  {
       address descendant = nodes[_address].descendant;
       address rb = nodes[_address].rb_address;
     
       if (descendant != 0x0000000000000000000000000000000000000000 && (search(descendant)==false) ){
           descendantnew.push(0x9000000000000000000000000000000000000000)-1;
           descendantnew.push(_address)-1;
           descendantnew.push(descendant) -1;
           npush(descendant);
           temp2.push(descendant) -1;
           descendants(descendant);
       }
      else{
          pop();
          if (rb!=0x0000000000000000000000000000000000000000){
             temp2.push(rb) -1;
             dbrother.push(0x9000000000000000000000000000000000000000)-1;
             dbrother.push(nodes[rb].p_address)-1;
             dbrother.push(rb)-1;
             npush(rb);
             descendants(rb);
          }
          else{
              if (temp1.length!=0){
                  descendants(temp1[temp1.length-1]);
              }
          }
      }
       
   } 
   
   
 function getdescendant(address _address)  view public returns(address[], address[]) {
        descendants(_address);
        return (descendantnew, dbrother);
    }
   
    
    
     function parents(address _address) public  {
       address parent = nodes[_address].p_address;
       

      

       while(parent != 0x0000000000000000000000000000000000000000){
        parentnew.push(parent) -1;
        address lb = nodes[parent].lb_address;
       address rb = nodes[parent].rb_address;
        if (lb!=0x0000000000000000000000000000000000000000 || rb!=0x0000000000000000000000000000000000000000) brother.push(parent) -1;
         while (lb != 0x0000000000000000000000000000000000000000){
                brother.push(lb) -1;     
                lb = nodes[lb].lb_address;
            
        }
        

        while (rb != 0x0000000000000000000000000000000000000000){
                brother.push(rb) -1;     
                rb = nodes[rb].rb_address;
            
        }
        brother.push(0x9000000000000000000000000000000000000000)-1;
        parent = nodes[parent].p_address;
        } 
   }
    
     function getparent(address _address)  view public returns(address[], address[]) {
        parents(_address);
        return (parentnew, brother);
    }
    
}