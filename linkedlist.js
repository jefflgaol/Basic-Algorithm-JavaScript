class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new DoubleNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const incomingNode = new DoubleNode(value);
        incomingNode.prev = this.tail;
        this.tail.next = incomingNode;
        this.tail = incomingNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const incomingNode = new DoubleNode(value);
        this.head.prev = incomingNode;
        incomingNode.next = this.head;
        this.head = incomingNode;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return;
        }
        else if (index === 0) {
            this.prepend(value);
            return;
        }
        const incomingNode = new DoubleNode(value);
        this.target = this.findThisNode(index - 1);
        this.target.next.prev = incomingNode;
        incomingNode.prev = this.target;
        incomingNode.next = this.target.next;
        this.target.next = incomingNode;
    }

    findThisNode(index) {
        let indexCounter = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (indexCounter == index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            indexCounter++;
        }
    }

    printList() {
        const list = [];
        let currentNode = this.head
        // While sangat cocok digunakan untuk sesuatu yang length nya tidak mudah diketahui.
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const incomingNode = new Node(value)
        /**
         * {HEAD} {XXXX} {XXXX} {TAIL}
         * this.tail.next berarti tail merefer ke node yang baru, sehingga menjadi
         * {HEAD} {XXXX} {XXXX} {TAIL} {NEW}
         * Agar yang terakhir menjadi the new tail, maka harus di re-assign value tailnya.
         * {HEAD} {XXXX} {XXXX} {XXXX} {TAIL}
         */
        this.tail.next = incomingNode;
        this.tail = incomingNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const incomingNode = new Node(value);
        incomingNode.next = this.head;
        this.head = incomingNode;
        this.length++;
        return this;
    }

    printList() {
        const list = [];
        let currentNode = this.head
        // While sangat cocok digunakan untuk sesuatu yang length nya tidak mudah diketahui.
        while (currentNode !== null) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    insert(index, value) {
        if (index >= this.length) {
            return;
        }
        else if (index === 0) {
            this.prepend(value);
            return;
        }
        const incomingNode = new Node(value);
        const target = this.findThisNode(index - 1); // frontier
        incomingNode.next = target.next;
        target.next = incomingNode;
        this.length++;
    }

    findThisNode(index) {
        let indexCounter = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (indexCounter == index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            indexCounter++;
        }
    }

    remove(index) {
        if (index >= this.length) {
            return;
        }
        const front = this.findThisNode(index - 1);
        const behind = this.findThisNode(index + 1);
        front.next = behind;
        this.length--;
    }

    reverse() {
        if (!this.head.next) {
            return;
        }

        // The point of this function is to change the 'next' to point the 'previous'.
        // And then switch head and tail.
        let first = this.head;
        let second = first.next;
        while(second) {
            const tmp = second.next;
            second.next = first;

            // Shifting
            first = second;
            second = tmp;
        }
        this.tail = this.head;
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const linked_list = new LinkedList(10);
linked_list.append(5);
linked_list.append(20);
linked_list.prepend(200);
linked_list.insert(2, 123)
console.log(linked_list.printList());
linked_list.remove(3)
console.log(linked_list.printList());
console.log(linked_list.reverse());
console.log(linked_list)

// const linked_list_2 = new DoublyLinkedList(10);
// console.log(linked_list_2.append(5));
// console.log(linked_list_2.prepend(500));
// console.log(linked_list_2.printList());
// linked_list_2.insert(1, "Try");
// console.log(linked_list_2.printList());