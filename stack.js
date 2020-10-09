class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackArray {
    constructor() {
        this.data = new Array();
    }

    peek() {
        return this.data[this.data .length - 1];
    }

    push(value) {
        this.data.push(value);
    }

    pop(value) {
        this.data.pop(value);
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.length > 0) {
            return this.top.value;
        }
    }

    push(value) {
        const incomingNode = new Node(value);
        if (this.length === 0) {
            this.top = incomingNode;
            this.bottom = incomingNode;
        }
        else {
            const holder = this.top;
            incomingNode.next = holder;
            this.top = incomingNode;
        }
        this.length += 1
    }

    pop() {
        if (!this.top || this.length <= 0) {
            return;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length -= 1;
        /**
         * Delete dalam JavaScript tidak bisa menghapus sebuah variabel atau FREEING MEMORY.
         * Delete hanya berguna untuk menghapus properti dari sebuah obyek.
         * Variabel normal tidak dapat dibebaskan demikian.
         * Satu"nya cara adalah dengan membuat variabel tersebut tidak digunakan lagi.
         * Untuk let atau var, mungkin bisa diassign value null.
         */
    }
}

stack = new Stack();
stack.push("1");
stack.push("2");
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);


stack_2 = new StackArray();
stack_2.push("1");
stack_2.push("2");
console.log(stack_2.peek());
console.log(stack_2)
stack_2.pop();
console.log(stack_2.peek());