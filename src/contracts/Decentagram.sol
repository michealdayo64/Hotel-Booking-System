pragma solidity ^0.5.0;

contract Decentagram{
    string public name = 'Decentragram';
    uint public numCount = 0;
    //store images
    struct Image{
        uint id;
        string imageHash;
        string title;
        string description;
        uint amount;
        address payable author;
    }

    event ImageCreated(
        uint id,
        string imageHash,
        string title,
        string description,
        uint amount,
        address payable author
    );

    event TipAmount(
        uint id,
        string imageHash,
        string title,
        string description,
        uint amount,
        address payable author
    );

    mapping(uint => Image) public images;
    //create images

    function addImage(string memory _imageHash, string memory _title, string memory _description) public {
        require(bytes(_imageHash).length > 0);
        require(bytes(_title).length > 0);
        require(bytes(_description).length > 0);
        require(msg.sender != address(0x0));

        numCount = numCount + 1;
        images[numCount] = Image(numCount, _imageHash, _title, _description, 0, msg.sender);

        emit ImageCreated(numCount, _imageHash, _title, _description, 0, msg.sender);
    }

    //tip images
    function tipAmount(uint _id) public payable{
        require(_id > 0 && _id <= numCount);
        // FETCH IMAGE
        Image memory _image = images[_id];
        // FETCH AUTHOR
        address payable _author = _image.author;
        // PAY AUTHOR BY ETHER
        address(_author).transfer(msg.value);
        // INCREMENT THE AMOUNT
        _image.amount = _image.amount + msg.value;
        // UPDATE THE IMAGE
        images[_id] = _image;
        emit TipAmount(_id, _image.imageHash, _image.title, _image.description, _image.amount, _author);
    }
}