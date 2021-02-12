class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            //moving the temp "node" across the list
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            //appending the actual node to the end of the list linking to null
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, before) {
        if (!this.find(before)) {
            return;
        } else {
            let tempNode = this.head;
            while (tempNode.next.value !== before) {
                tempNode = tempNode.next;
            }
            let insert = new _Node(item, tempNode.next);
            tempNode.next = insert;
        }
    }

    insertAfter(item, after) {
        if (!this.find(after)) {
            return;
        } else {
            let tempNode = this.head;
            while (tempNode.value !== after) {
                tempNode = tempNode.next;
            }
            let insert = new _Node(item, tempNode.next);
            tempNode.next = insert;
        }
    }

    insertAt(item, at) {
        if (at === 1) {
            this.insertFirst(item);
            return;
        }

        let count = 1;
        let tempNode = this.head;
        while (count < at - 1) {
            tempNode = tempNode.next;
            count++;
        }
        let insert = new _Node(item, tempNode.next);
        tempNode.next = insert;
    }

    find(item) {
        //start at the head
        let currentNode = this.head;

        //If the list is empty
        if (!this.head) {
            return null;
        }

        //Move down the list
        while (currentNode.value !== item) {
            //If we're at the end
            if (currentNode.next === null) {
                return null;
            } else {
                //Move one down
                currentNode = currentNode.next;
            }
        }

        //We found it
        return currentNode;
    }

    remove(item) {
        //Empty
        if (!this.head) {
            return null;
        }

        //If the item to be removed is the first item
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        //Start at the head and move down the list, keeping track of the previous 
        //value for linking reasons
        let currentNode = this.head;
        let previousNode = this.head;

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            console.log('item not found');
            return;
        }

        previousNode.next = currentNode.next;
    }
}

function display(list) {
    let tempNode = list.head;
    while (tempNode.next !== null) {
        console.log(tempNode.value);
        tempNode = tempNode.next;
    }
    console.log(tempNode.value);
}

function size(list) {
    if (list.head === null) {
        return 0;
    }
    let tempNode = list.head;
    let count = 0;
    while (tempNode.next !== null) {
        count++;
        tempNode = tempNode.next;
    }
    count++;

    return count;
}

function isEmpty(list) {
    if (list.head === null) {
        return true;
    } else {
        return false;
    }
}

function findPrevious(list, node) {
    let tempNode = list.head;
    if (tempNode === null || tempNode.value === node) {
        console.log('List contains either 0 or 1 item[s] and therefor has no previous');
        return;
    }

    while (tempNode.next.value !== node) {
        if (tempNode.next === null) {
            return 'Item either does not exist';
        }
        tempNode = tempNode.next;
    }

    return tempNode.value;
}

function findLast(list) {
    let tempNode = list.head;
    if (tempNode === null) {
        console.log('List contains no items');
    }

    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }

    return tempNode.value;
}

function WhatDoesThisProgramDo(lst) {
    //removes doubles
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
function reverseList(list) {
    let listSize = size(list);
    let current = list.head;

    if (size < 1) {
        console.log('List has no values to reverse');
    } if (size === 1) {
        return list;
    } else if (size === 2) {
        current.next.next === current;
        // current.next === null;
    }
}

function main() {
    let SLL = new LinkedList;

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    // SLL.insertLast('Helo');
    // SLL.insertLast('Husker');
    // SLL.insertLast('Starbuck');
    // SLL.insertLast('Tauhida');
    // SLL.remove('squirrel');

    // console.log(SLL);
    // SLL.insertBefore('Before', 'Boomer');

    // console.log(SLL);
    // SLL.insertAfter('After', 'Apollo');
    // console.log(SLL);
    // SLL.insertAt('At', 2);

    // console.log(SLL);
    // display(SLL);
    size(SLL);
    // console.log(isEmpty(SLL));
    // console.log(findPrevious(SLL, 'Husker'));
    // console.log(findLast(SLL));

    console.log(SLL);
    reverseList(SLL);
    console.log(SLL);
}

main();
