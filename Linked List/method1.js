class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let node = this.head;
        while(node){
            if(node.next === null){
                return node
            }
            node = node.next;
        }
    }
    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter ++;
            node = node.next;
        }
        return counter;
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.insertFirst(5);
list.insertFirst(15);
list.insertFirst(35);


console.log(list);
console.log(list.size() , 'size of the linked list');
console.log(list.getFirst(), 'get first');
console.log(list.getLast() , 'get last');
