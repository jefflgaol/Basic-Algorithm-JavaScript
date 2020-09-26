class ManualArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return value;
    }

    get(index) {
        if (this.data[index]) {
            return this.data[index];
        }
        return undefined;
    }

    pop() {
        const item = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItemsLeft(index);
        return item;
    }

    insert(index, value) {
        if (index > this.length) {
            return;
        }
        this.shiftItemsRight(index);
        this.data[index] = value;
    }

    shiftItemsLeft(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    shiftItemsRight(index) {
        this.push(null);
        console.log(this);
        console.log(this.length)
        for (let i = this.length - 1; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }
}

array = new ManualArray();
array.push("data0");
array.push("data1");
array.push("data2");
array.insert(1, "incoming");
console.log(array);