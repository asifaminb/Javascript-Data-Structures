class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }
    append(value){
        const newNode = {value: value , next: null};
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode;
        if(!this.head) {
            this.head = newNode;
        }
    }
    toArray() {
        const elements = [];
        let currNode = this.head;
        while(currNode) {
            elements.push(currNode);
            currNode = currNode.next
        }
        return elements;
    }
}

const linkedlist1 = new LinkedList();
linkedlist1.append(1);
linkedlist1.append(2);
linkedlist1.append(5);
linkedlist1.append(16);

console.log(linkedlist1.toArray());
