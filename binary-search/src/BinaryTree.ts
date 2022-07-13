import {Tree} from "../interface/Tree";
import {TreeNode} from "../TreeNode";

export class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    public getSize(): number {
        return this.totalNode;
    }

    inorder(node: TreeNode<E>): void {
        if (node) {
            console.log(node.data)
            if (node.left) {
                this.inorder(node.left)
            }
            if (node.right) {
                this.inorder(node.right)
            }
        }
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode<E>(data);
            let currentNode = this.root;

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

                } else if (data > currentNode.data) {
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
    }

    public delete(data: E): void {
        this.root = this.deleteRecursively(this.root, data);
    }

    private deleteRecursively(root: TreeNode<E>, data: E): TreeNode<E> {
        if (root === null) {
            return null;
        }

        if (root.data === data) {
            // eliminamos
            root = this.deleteNode(root); // -> devuelve la misma estructura con el nodo eliminado
        } else if (data < root.data) {
            // nos movemos a la izquierda
            root.left = this.deleteRecursively(root.left, data);
        } else {
            // derecha
            root.right = this.deleteRecursively(root.right, data);
        }

        return root;
    }

    private deleteNode(root: TreeNode<E>): TreeNode<E> {
        if (root.left === null && root.right === null) {
            // es hoja
            return null;
        } else if (root.left !== null && root.right !== null) {
            // tiene dos hijos
            const successorNode = this.getSuccessor(root.left);
            const successorValue = successorNode.data;

            root = this.deleteRecursively(root, successorValue);
            root.data = successorValue;

            return root;
        } else if (root.left !== null) {
            // tiene izquierdo
            return root.left;
        }

        // derecho
        return root.right;
    }

    private getSuccessor(node: TreeNode<E>): TreeNode<E> {
        let currentNode: TreeNode<E> = node;

        while (currentNode) {
            if (currentNode.right === null) {
                break;
            }

            currentNode = currentNode.right;
        }

        return currentNode;
    }

    public search(data: E) {
        let currentNode: TreeNode<E> = this.root;

        while (currentNode) {
            if (data === currentNode.data) {
                return data;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
        return null;
    }
}