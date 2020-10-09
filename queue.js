class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (length > 0) {
            return this.first;
        }
    }

    enqueue(value) {
        const incomingNode = new Node(value);
        if (this.length === 0) {
            this.first = incomingNode;
            this.last = incomingNode;
        }
        else {
            this.last.next = incomingNode;
            this.last = incomingNode;
        }
        this.length += 1
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length -= 1
    }
}

queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue)