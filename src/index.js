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

        if (!this.map[hashCode]) {
            this.map[hashCode] = new linkedList('bucket '+hashCode);

            this.map[hashCode].append({key: key, value: value});

            return;

        } else {

            this.map[hashCode].pointer = this.map[hashCode].head

            while (this.map[hashCode].pointer.nextNode != null || this.map[hashCode].pointer == this.map[hashCode].head){

                if (this.map[hashCode].pointer.value.key == key) {

                    let storeIndex = this.map[hashCode].finds(this.map[hashCode].pointer.value.value);
                    
                    console.log(storeIndex);

                    this.map[hashCode].removeAt(storeIndex);

                    this.map[hashCode].insertAt({key: key, value: value}, storeIndex);

                    return;

                }

                if (this.map[hashCode].pointer.nextNode != null) {

                    this.map[hashCode].pointer = this.map[hashCode].pointer.nextNode;

                }
                
            }

            this.map[hashCode].append({key: key, value: value});
        }

        
        console.log(this.map[hashCode]);
        
    }

};

const hashBrown = new hashMap(0.75, 16);

console.log(hashBrown.loadFactor+' '+hashBrown.capacity);

// console.log(hashBrown.hash('Sara'));
// console.log(hashBrown.hash('Sara'));

hashBrown.set('King','Stannis');
hashBrown.set('King','Renly');
hashBrown.set('King','Robert');



console.log(hashBrown.map);
// console.log(hashBrown.map[7].head.value.value);
// console.log(hashBrown.map[7].size());
console.log(hashBrown.map[7].toStringMap());
console.log(hashBrown.map[7].head);
console.log(hashBrown.map[7].head.nextNode);



