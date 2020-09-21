class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]);
    }

    _debugHash() {
        console.log(this.data);
    }

    get(key) {
        let address = this._hash(key);
        const pointingAt = this.data[address]
        if (pointingAt) {
            for (let i = 0; i < pointingAt.length; i++) {
                if (pointingAt[i][0] === key) {
                    return pointingAt[i][1];
                }
            }
        }
        return undefined;
    }
}

const table1 = new HashTable(50);
table1.set('grapes', 1000);
table1._debugHash();
console.log(table1.get('grapes'));