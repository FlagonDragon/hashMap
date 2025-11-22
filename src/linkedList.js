class node {

    constructor(value = null, nextNode = null) {

        this.value = value
        this.nextNode = nextNode

    }
};

class linkedList {

    constructor(title, pointer = null) {

        this.title = title
        this.pointer = pointer
        this.head;

    }

    append(value) {

        console.log('append value: '+value);

        if (!this.head) {

            console.log('Empty list. Creating head');
        
            this.head = new node(value);

            this.pointer = this.head;

        } else if (this.pointer.nextNode == null) {

            this.pointer.nextNode = new node(value);

            this.pointer = this.pointer.nextNode;

        } else {

            while (this.pointer.nextNode != null) {

                this.pointer = this.pointer.nextNode;

            }

            this.pointer.nextNode = new node(value);

            this.pointer = this.pointer.nextNode;

        }

    };

    prepend(value) {

        console.log('prepend value: '+value);

        if (!this.head) {

            console.log('Empty list. Creating head');
        
            this.head = new node(value);

            this.pointer = this.head;

        } else {

            this.head = new node(value, this.head);

            this.pointer = this.head;

        }

    }

    size() {

        if (!this.head) {
            return 0;
        }
        
        this.pointer = this.head;
        
        console.log(this.pointer);

        let nodeCount = 1; 

        while (this.pointer.nextNode != null) {

            console.log(this.pointer.nextNode);

            this.pointer = this.pointer.nextNode;

            nodeCount += 1;

        }

        return nodeCount;

    }

    returnHead() {
        return this.head;
    }

    tail() {

        if (!this.head) {
            return 'Empty list';
        }

        while (this.pointer.nextNode != null) {

            console.log(this.pointer.nextNode);

            this.pointer = this.pointer.nextNode;

        }

        return this.pointer;
        
    }

    at(index) {

        if (index > this.size() || index < 1) {
            return "Node doesn't exist";
        }

        if (this.head.nextNode == null) {
            return this.head;
        }

        this.pointer = this.head;

        for (let i = 1; i < index; i++) {
                        
            this.pointer = this.pointer.nextNode;

        }

        return this.pointer;

    }

    pop() {
        
        this.pointer = this.at(this.size() - 1);

        this.pointer.nextNode = null;

        return 'Tail popped!'
         
    }

    contains(value) {

        if (!this.head) {
            return false;
        }

        this.pointer = this.head;
        
        while (this.pointer != null) {
            
            if (this.pointer.value == value) {
                return true
            }

            this.pointer = this.pointer.nextNode;

        }

        return false

    }

    finds(value) {

        if (!this.head) {
            return 'Value not found';
        }

        const length = this.size()
        
        this.pointer = this.head
        
        for (let i = 1; i <= length; i++) {
            
            if (this.pointer.value.value == value) {
                return i;
            }
                
            this.pointer = this.pointer.nextNode;

        }

        return 'Value not found';

    }

    toString() {

        if (!this.head) {
            return 'Empty list';
        }
        
        this.pointer = this.head

        let myString = '';
        
        while (this.pointer.nextNode != null) {
          
            myString += `( ${this.pointer.value} ) -> `
                
            this.pointer = this.pointer.nextNode;

        }

        myString += `( ${this.pointer.value} ) -> ${this.pointer.nextNode}`

        return myString;

    }

    toStringMap() {

        if (!this.head) {
            return 'Empty list';
        }
        
        this.pointer = this.head

        let myString = '';
        
        while (this.pointer.nextNode != null) {
          
            myString += `( ${this.pointer.value.value} ) -> `
                
            this.pointer = this.pointer.nextNode;

        }

        myString += `( ${this.pointer.value.value} ) -> ${this.pointer.nextNode}`

        return myString;

    }

    insertAt(value, index) {

        const length = this.size()

        console.log(length);
        
        if (index < 1 || index > length + 1) {
            return 'Invalid index!'
        }

        if (index == 1) {

            this.prepend(value);

        } else if (index == length) {

            this.at(index - 1).nextNode = new node(value, this.at(index));

        } else if (index == length + 1) {

            this.append(value);

        } else {

        this.at(index - 1).nextNode = new node(value, this.at(index));

        }

        return 'value added at node '+index+': ' +value;

    }

    removeAt(index) {

        const length = this.size()
        
        if (index < 1 || index > length) {
            return 'Invalid index!'
        }

        if (length == 1) {
            this.head = null;
            this.pointer = null;
            return 'Head node was removed';
        }

        this.at(index - 1).nextNode = this.at(index - 1).nextNode.nextNode;

        return 'Node '+index+' was removed';

    }

};

export default linkedList;





