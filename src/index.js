import './styles.css';

console.log('woooorrrkkk time!!!');

class hashMap {

    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
    }

    hash(key) {

        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;

    }

};

const hashBrown = new hashMap(0.75, 16);

console.log(hashBrown.loadFactor+' '+hashBrown.capacity);

console.log(hashBrown.hash('Sara'));
