pragma solidity ^0.4.18;

contract Foodchain  {
    
    uint index=0;
    struct Inheritance {
        address p_address;
        address lb_address;
        address rb_address;
        address descendant;
        
    }
    
    struct Properties{
       bytes16 foodwhere;
       uint quantity;
       bytes16 foodtype;
       uint ph;
       uint sensor1;
    }
   
    mapping (address => Properties) properties;
    mapping (address => Inheritance) inheritance;

    address[] public propertiesAccts;
    address[]public  parentnew;
    address[]public  descendantnew;
    address[]public  brother;
    address[]public  dbrother;
    address[]public  maps;
    uint[]public maps_quantity;
    bytes16[]public maps_city;

    event instructorInfo(
       bytes16 foodwhere,
       bytes16 foodtype,
       uint quantity,
       address iaddress
    );
    
   function setInstructor(address p_address, address lb_address, bytes16 _foodwhere, uint _quantity, bytes16 _foodtype, uint _ph, uint _sensor1) public {

        index=index+1;
        address _address= address(index); 
        var property = properties[_address];
        property.foodwhere = _foodwhere;
        property.foodtype = _foodtype;
        property.ph = _ph;
        property.sensor1 = _sensor1;
        property.quantity = _quantity;
        propertiesAccts.push(_address) -1;

        var _inheritance = inheritance[_address];
        _inheritance.p_address=p_address;
        _inheritance.descendant=0x0000000000000000000000000000000000000000;
        _inheritance.rb_address=0x0000000000000000000000000000000000000000;
        _inheritance.lb_address=lb_address; 
// tha mporousame na doume mhpws to lb_address den xreiazotan na iparxei san orisma alla na ginete eswterika

        if (inheritance[p_address].descendant == 0x0000000000000000000000000000000000000000){
            inheritance[p_address].descendant=_address;
        }
        else{
            inheritance[lb_address].rb_address=_address;
        }
        
        instructorInfo(_foodwhere, _foodtype, _quantity, _address);
   }
   
   
   function getData(uint _id) view public returns (bytes16, bytes16, uint, address, uint ){
        address _address= address(_id);
        address root = _address;
        if (inheritance[_address].p_address != 0x0000000000000000000000000000000000000000){
             uint i=0;
             address parent = inheritance[_address].p_address;
             while(parent != 0x0000000000000000000000000000000000000000){
                  root = parent;
                  parent = inheritance[parent].p_address;
                  i=i+1;
             } 
        }
            
        return (properties[_address].foodwhere, properties[root].foodtype, properties[_address].quantity, _address, i );
    }  
   
    function getInstructors() view public returns(address[]) {
        return propertiesAccts;
    }    
 
    function findbrother(address parent) view public returns(address){
        address flag=inheritance[parent].descendant;
        if (flag!= 0x0000000000000000000000000000000000000000) {
            while (inheritance[flag].rb_address != 0x0000000000000000000000000000000000000000){
                flag=inheritance[flag].rb_address;
            }
        }
        return flag;
    }
   
    address[] temp1;
    address[] temp2;


    function pop() public returns (address data) {
            data = temp1[temp1.length - 1];
            temp1.length -= 1;
    }
    
    function search(address descendant) view public returns(bool flag){
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
        address descendant = inheritance[_address].descendant;
        address rb = inheritance[_address].rb_address;
        if (descendant != 0x0000000000000000000000000000000000000000 && (search(descendant)==false)){
            descendantnew.push(0x9000000000000000000000000000000000000000)-1;
            descendantnew.push(_address)-1;
            descendantnew.push(descendant) -1;
            maps.push(descendant)-1;
            temp1.push(descendant);
            temp2.push(descendant) -1;
            descendants(descendant);
        }
        else{
            pop();
            if (rb!=0x0000000000000000000000000000000000000000){
                temp2.push(rb) -1;
                dbrother.push(0x9000000000000000000000000000000000000000)-1;
                dbrother.push(inheritance[rb].p_address)-1;
                dbrother.push(rb)-1;
                 maps.push(rb)-1;
                temp1.push(rb);
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
        address parent = inheritance[_address].p_address;
        while(parent != 0x0000000000000000000000000000000000000000){
            parentnew.push(parent) -1;
            maps.push(parent)-1;
        address lb = inheritance[parent].lb_address;
        address rb = inheritance[parent].rb_address;
        if (lb!=0x0000000000000000000000000000000000000000 || rb!=0x0000000000000000000000000000000000000000) brother.push(parent) -1;
            while (lb != 0x0000000000000000000000000000000000000000){
                brother.push(lb) -1;  
                maps.push(lb)-1;
                lb = inheritance[lb].lb_address;
            }
            while (rb != 0x0000000000000000000000000000000000000000){
                brother.push(rb) -1; 
                maps.push(rb);
                rb = inheritance[rb].rb_address;
            }
            brother.push(0x9000000000000000000000000000000000000000)-1;
            parent = inheritance[parent].p_address;
        } 
    }
    
    function getparent(address _address)  view public returns(address[], address[]) {
        parents(_address);
        return (parentnew, brother);
    }
    
    function getmaps(address _address) view public returns (address[], bytes16[], uint[]){
        parents(_address);
        for (uint i=0; i<maps.length; i++){
            maps_city.push(properties[maps[i]].foodwhere)-1;
            maps_quantity.push(properties[maps[i]].quantity)-1;
        }
        return (maps, maps_city, maps_quantity);
    }
    
     function getmaps_descedants(address _address) view public returns (address[], bytes16[], uint[]){
        descendants(_address);
        for (uint i=0; i<maps.length; i++){
            maps_city.push(properties[maps[i]].foodwhere)-1;
            maps_quantity.push(properties[maps[i]].quantity)-1;
        }
        return (maps, maps_city, maps_quantity);
    }
    
}