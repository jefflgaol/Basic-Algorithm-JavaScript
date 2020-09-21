class Function {
    static findFirstRecurringValue() {
        // Why hashMap is using const? Because we want to make sure the hashMap variable always pointing to a particular array or object. Yet, we can still change what is inside the object.
        const hashMap = []
        // Typically, let is used for for loop variable <-- scope-based
        for (let i = 0; i < array.length; i++) {
            let currentValue = array[i]
            if (hashMap[currentValue]) {
                return currentValue;
            }
            // Why use 1? If we use 0, then the result will be False, and the first if statement will be rejected
            else {
                hashMap[currentValue] = 1
            }
        }
        return undefined;
    }
}

array = [2,5,1,2,3,5,1,2,4];
console.log(Function.findFirstRecurringValue(array));
array = [2,1,1,2,3,5,1,2,4];
console.log(Function.findFirstRecurringValue(array));
array = [2,3,4,5];
console.log(Function.findFirstRecurringValue(array));