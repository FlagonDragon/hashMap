import linkedList from "./linkedList";

class HashSet {

    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.map = [];
    }

    hash(key) {

        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;

    }

    set(key) {

        if (this.length() == this.capacity * this.loadFactor) {

            console.log('THE TIME IS NOW');

            this.capacity *= 2;        
            
            let keyValues = this.entries();

            this.clear();

            console.log(keyValues);

            for (let keyValue of keyValues) {
                
                this.set(keyValue.key, keyValue.value);

            }
            
        }

        let hashCode = this.hash(key);

        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }       

        if (!this.map[hashCode]) {

            this.map[hashCode] = new linkedList('bucket '+hashCode);

        } else {

            this.map[hashCode].pointer = this.map[hashCode].head

            while (this.map[hashCode].pointer != null || this.map[hashCode].pointer == this.map[hashCode].head) {

                if (this.map[hashCode].pointer.value == key) {

                    return 'Value already exists';

                }

                if (this.map[hashCode].pointer.nextNode == null) {

                    break;

                }

                this.map[hashCode].pointer = this.map[hashCode].pointer.nextNode;
                
            }

        }

        this.map[hashCode].append(key);
        
        console.log(this.map[hashCode]);
        
    }

    get(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value == key) {

                        return bucket.pointer.value;

                    }

                    if (bucket.pointer.nextNode == null) {

                        break;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                }

            }

        }

        return null;

    }

    has(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value == key) {

                        return true;

                    }

                    if (bucket.pointer.nextNode == null) {

                        break;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                }

            }

        }

        return false;

    }

    remove(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value == key) {

                        let storeIndex = bucket.finds(bucket.pointer.value);
                        
                        bucket.removeAt(storeIndex);

                        if (bucket.size() == 0) {
                            
                            this.map[this.map.indexOf(bucket)] = undefined;

                        }

                        return true;

                    }

                    if (bucket.pointer.nextNode == null) {

                        break;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                }

            }

        }

        return false;

    }

    length() {

        let keyCounter = 0;
        
        for (let bucket of this.map) {

            if (bucket) {
            
                keyCounter += bucket.size();

            }

        }

        return keyCounter;

    }

    clear() {
        
        for (let bucket of this.map) {

            if (bucket) {
            
                this.map[this.map.indexOf(bucket)] = undefined;

            }

        }

        return 'Map cleared';

    }

    keys() {

        let keys = [];
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer != null || bucket.pointer == bucket.head) {

                    keys.push(bucket.pointer.value);

                    if (bucket.pointer.nextNode == null) {

                        break;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                }

            }

        }

        return keys;

    }

};

const hashBrown = new HashSet(0.75, 16);
console.log(hashBrown.loadFactor+' '+hashBrown.capacity);
hashBrown.set('Stannis');
hashBrown.set('Renly');
hashBrown.set('Robert');
console.log(hashBrown.set('Renly'));
 


// console.log(hashBrown.has('Stannis'));
// console.log(hashBrown.remove('Stannis'));
// console.log(hashBrown.has('Stannis'));
// console.log(hashBrown.get('Robert'));

console.log(hashBrown.length());
console.log(hashBrown.keys());
console.log(hashBrown.map);

export default HashSet;




