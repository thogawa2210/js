"use strict";
exports.__esModule = true;
var BinaryTree_1 = require("./src/BinaryTree");
var tree = new BinaryTree_1.BinaryTree();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
console.log("The numbers of nodes: ".concat(tree.totalNode));
tree.inorder(tree.root);
tree["delete"](7);
tree.inorder(tree.root);
