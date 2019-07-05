 pragma solidity ^0.4.18;

contract Owned {
    address owner;
    
    function Owned() public {
        owner = msg.sender;
    }
    
   modifier onlyOwner {
       require(msg.sender == owner);
       _;
   }
}

contract Coursetro is Owned {
    
   
     struct Instructor{
       bytes16 foodwhere;
       uint quantity;
       bytes16 foodtype;
       uint ph;
       uint sensor1;
    }
   
       mapping (address => Instructor) instructors;
       address[] public instructorAccts;

    event instructorInfo(
       bytes16 foodwhere,
       bytes16 foodtype,
       uint quantity
    );
    
   function setInstructor(address _address, bytes16 _foodwhere, uint _quantity, bytes16 _foodtype, uint _ph, uint _sensor1) public {
     var instructor = instructors[_address];

        instructor.foodwhere = _foodwhere;
        instructor.foodtype = _foodtype;
        instructor.ph = _ph;
        instructor.sensor1 = _sensor1;
        instructor.quantity = _quantity;
        instructorAccts.push(_address) -1;

        instructorInfo(_foodwhere, _foodtype, _quantity);
   }
       
    function getInstructors() view public returns(address[]) {
        return instructorAccts;
    }
   
   function getInstructor(address _address) view public returns (bytes16 , uint , bytes16 , uint , uint ) {
       return (instructors[_address].foodwhere, instructors[_address].quantity, instructors[_address].foodwhere, instructors[_address].ph, instructors[_address].sensor1);
   }
    
}

contract Distributor is Coursetro{
    
    struct HubInstructor {
        bytes16 distributorwhere;
        uint distributorquantity;
        address _address;
    }
    
    mapping (address => HubInstructor) distributors;
    address[] public distributorAccts;

    event HubinstructorInfo(
       bytes16 distributorwhere,
       uint distributorquantity,
       address _address
    );
    
    
   
    
    function setHubInstructor (address _naddress, bytes16 _distributorwhere, uint _distributorquantity, address _oaddress) onlyOwner public {
        var distributor = distributors[_naddress];
        
        distributor.distributorwhere = _distributorwhere;
        distributor.distributorquantity = _distributorquantity;
        distributorAccts.push(_naddress) -1;
        distributor._address = _oaddress;
        
        HubinstructorInfo(_distributorwhere, _distributorquantity, _oaddress);

    }

        function getHubInstructor() view public returns (address[]) {
        return distributorAccts;
    }

    function getHubInstructor1(address _naddress) view public returns (address, bytes16, bytes16, uint, uint) {
        return (distributors[_naddress]._address, instructors[distributors[_naddress]._address].foodwhere, instructors[distributors[_naddress]._address].foodtype, instructors[distributors[_naddress]._address].ph, instructors[distributors[_naddress]._address].sensor1);
        
        
    }
    
        function countHubInstructor() view public returns (uint) {
        return instructorAccts.length;
    }
}



