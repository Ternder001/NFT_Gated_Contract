// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EventNft is ERC721, Ownable {
    constructor() ERC721("Web3CohortX", "W3CX") Ownable(msg.sender) {}

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        
    }
}