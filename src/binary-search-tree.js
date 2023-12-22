const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;


  root() {
    return this.rootNode;
  }

  add(data) {
    if(!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    const insertNode = currentNode => {
      if(currentNode.data < data) {

        if(currentNode.right) {
          insertNode(currentNode.right);
        } else {
          currentNode.right = new Node(data);
        }

      } else {
        if(currentNode.left) {
          insertNode(currentNode.left);
        } else {
          currentNode.left = new Node(data);
        }
      }
    }

    insertNode(this.rootNode);
  }

  has(data) {
    if(!this.rootNode) {
      return false;
    }

    const findNode = node => {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return findNode(node.data > data ? node.left : node.right);
    }

    return findNode(this.rootNode);
  }

  find(data) {
    if(!this.rootNode) {
      return null;
    }

    const findNode = node => {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return findNode(node.data > data ? node.left : node.right)
    }

    return findNode(this.rootNode);
  }

  findParent(data) {
    if(!this.rootNode) {
      return null;
    }

    const findNode = (node) => {
      if(!node) {
        return null;
      }

      if(node.left?.data === data || node.right?.data === data) {
        return node;
      }

      return findNode(node.data > data ? node.left : node.right);
    }

    return findNode(this.rootNode, null);
  }

  min() {
    if(!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while(currentNode.left)
    {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if(!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;

    while(currentNode.right)
    {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  remove(data) {
    if(!this.rootNode) return;

    let node = this.find(data);

    if(!node) return;

    if(!node.right && !node.left) {
      const parent = this.findParent(data);
      if(parent.left?.data == data) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      console.log('case 1');
      console.log(parent)
      console.log(this.rootNode);
      return;
    }

    if(!node.right && node.left) {
      node = node.left;
      console.log('case 2');
      console.log(this.rootNode);
      return;
    }

    if(node.right && !node.left) {
      node.data = node.right.data;
      node.left = node.right.left;
      node.right = node.right.right;

      console.log('case 3');
      console.log(this.rootNode);
      return;
    }

    if(node.right && node.left) {

      const findNode = node1 => {
        if(node1.left) {
          return findNode(node1.left);
        }

        return node1;
      }

      let firstLeftNode = findNode(node.right);
      node.data = firstLeftNode.data;

      if(firstLeftNode.right) {
        firstLeftNode = firstLeftNode.right;
      } else {
        firstLeftNode = null;
      }
      console.log('case 4');
      console.log(this.rootNode);


      return;
    }
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);