import './styles.css';
import linkedList from "./linkedList";

console.log('woooorrrkkk time!!!');

class hashMap {

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

    set(key, value) {

        let hashCode = this.hash(key);

        if (hashCode < 0 || hashCode >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }       

        if (!this.map[hashCode]) {

            this.map[hashCode] = new linkedList('bucket '+hashCode);

        } else {

            this.map[hashCode].pointer = this.map[hashCode].head

            while (this.map[hashCode].pointer.nextNode != null || this.map[hashCode].pointer == this.map[hashCode].head) {

                if (this.map[hashCode].pointer.value.key == key) {

                    let storeIndex = this.map[hashCode].finds(this.map[hashCode].pointer.value.value);
                    
                    this.map[hashCode].removeAt(storeIndex);

                    this.map[hashCode].insertAt({key: key, value: value}, storeIndex);

                    return;

                }

                this.map[hashCode].pointer = this.map[hashCode].pointer.nextNode;

                if (this.map[hashCode].pointer == null) {

                    break;

                }
                
            }

        }

        this.map[hashCode].append({key: key, value: value});
        
        console.log(this.map[hashCode]);
        
    }

    get(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer.nextNode != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value.key == key) {

                        return bucket.pointer.value.value;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                    if (bucket.pointer == null) {

                        break;

                    }

                }

            }

        }

        return null;

    }

    has(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer.nextNode != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value.key == key) {

                        return true;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                    if (bucket.pointer == null) {

                        break;

                    }

                }

            }

        }

        return false;

    }

    remove(key) {
        
        for (let bucket of this.map) {

            if (bucket) {

                bucket.pointer = bucket.head;

                while (bucket.pointer.nextNode != null || bucket.pointer == bucket.head) {

                    if (bucket.pointer.value.key == key) {

                        let storeIndex = bucket.finds(bucket.pointer.value.value);

                        console.log(storeIndex);
                        
                        bucket.removeAt(storeIndex);

                        if (bucket.size() == 0) {
                            console.log(this.map.indexOf(bucket));
                            
                            this.map[this.map.indexOf(bucket)] = undefined;
                        }

                        return true;

                    }

                    bucket.pointer = bucket.pointer.nextNode;

                    if (bucket.pointer == null) {

                        break;

                    }

                }

            }

        }

        return false;

    }

};

const hashBrown = new hashMap(0.75, 16);

console.log(hashBrown.loadFactor+' '+hashBrown.capacity);

hashBrown.set('King','Stannis');
hashBrown.set('Hand','Renly');
hashBrown.set('Former','Robert');

console.log(hashBrown.get('King'));
console.log(hashBrown.has('King'));
console.log(hashBrown.has('Heir'));
console.log(hashBrown.remove('King'));
console.log(hashBrown.has('King'));
// console.log(hashBrown.map[7].size());
console.log(hashBrown.map[8]);

console.log(!hashBrown.map[7]);



console.log(hashBrown.map);
// console.log(hashBrown.map[7].toStringMap());






