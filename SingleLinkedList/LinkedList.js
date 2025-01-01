// Linked List

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.length = 1;
    };
};

class LinkedList {
    constructor(value) {
      this.linkedList = new Node(value);
    };

    push(value) {
        if(!this.linkedList.length) {
          this.linkedList = new Node(value);
          return this.linkedList;
        } else {
          this.linkedList.next = new Node(value);
          this.linkedList.length++;
          return this.linkedList;
        };
    };
};

const newLinkedList = new LinkedList();
console.log(newLinkedList.push(1));