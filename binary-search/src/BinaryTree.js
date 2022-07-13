"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var TreeNode_1 = require("../TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode_1.TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                /* so sánh giá trị currentNode với data */
                if (data < currentNode.data) {
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên trái */
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên phải */
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    BinaryTree.prototype["delete"] = function (data) {
        this.root = this.deleteRecursively(this.root, data);
    };
    BinaryTree.prototype.deleteRecursively = function (root, data) {
        if (root === null) {
            return null;
        }
        if (root.data === data) {
            // eliminamos
            root = this.deleteNode(root); // -> devuelve la misma estructura con el nodo eliminado
        }
        else if (data < root.data) {
            // nos movemos a la izquierda
            root.left = this.deleteRecursively(root.left, data);
        }
        else {
            // derecha
            root.right = this.deleteRecursively(root.right, data);
        }
        return root;
    };
    BinaryTree.prototype.deleteNode = function (root) {
        if (root.left === null && root.right === null) {
            // es hoja
            return null;
        }
        else if (root.left !== null && root.right !== null) {
            // tiene dos hijos
            var successorNode = this.getSuccessor(root.left);
            var successorValue = successorNode.data;
            root = this.deleteRecursively(root, successorValue);
            root.data = successorValue;
            return root;
        }
        else if (root.left !== null) {
            // tiene izquierdo
            return root.left;
        }
        // derecho
        return root.right;
    };
    BinaryTree.prototype.getSuccessor = function (node) {
        var currentNode = node;
        while (currentNode) {
            if (currentNode.right === null) {
                break;
            }
            currentNode = currentNode.right;
        }
        return currentNode;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
