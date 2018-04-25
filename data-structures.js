// address book
// data structure: hash table (name -> {address, phone number, etc})

// help center
// queue (first in first out)
// priority queue

// {value: "need help getting started on algorithms", urgency: 9}
// {value: "fjasdoif", urgency: 4}
// {value: "need help debugging tic tac toe", urgency: 1}
// {value: "need help debugging boggle", urgency: 1}
// {value: "need help debugging yahtzee", urgency: 1}


// stocking a shelf/customers taking things off of a shelf
// stack (first in last out)

// family tree
// flow chart

// lexicon, trie
// {value: 'a', children:
//   [{value: 'n', children:
//     [{value: 'd', children: []}]
//   },
//   {value:'t', children: []}
//   ]
// }
//
// at
// an
// and


// binary search tree
// all values to the left of a given node are smaller than it, all values to the right are larger

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// TreeNode.prototype.getValue = function () {
//   return this.value;
// };

// run-time complexity: O(n log(n))
function convertListToBinarySearchTree(arr) {
  var head = new TreeNode(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    // if smaller than head, go left, if larger, go right
    var current = head;
    // this while loop is O(log(n))
    while (true) {
      if (arr[i] < current.value) {
        if (!current.left) {
          current.left = new TreeNode(arr[i]);
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new TreeNode(arr[i]);
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
  return head;
}


var bst = convertListToBinarySearchTree([5, 7, 2, 4, 8, 3])

// run-time complexity: O(log(n))
function isInBST(bst, value) {
  // base case
  if (bst === null) {
    return false;
  }

  // recursive case
  if (value === bst.value) {
    return true;
  } else if (value < bst.value) { // go left if our value is smaller
    return isInBST(bst.left, value);
  } else { // otherwise go right
    return isInBST(bst.right, value);
  }
}

// also O(log(n))
function nonRecursiveInBST(bst, value) {
  var current = bst;
  while (current) {
    if (value === current.value) {
      return true;
    } else if (value < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
}

console.log(isInBST(bst, 6));
console.log(nonRecursiveInBST(bst, 6));






// linked list: tree where each node only has one children

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
  // this.prev = null; // needed for doubly-linked lists, not singly linked
  // deque is another name for doubly-linked list
}

function LinkedList(head, last) {
  this.head = head;
  this.last = last;
}

// run-time complexity: O(1)
LinkedList.prototype.pop = function() {
  var result = this.head.value;
  this.head = this.head.next;
  return result;
}

// run-time complexity: O(1)
LinkedList.prototype.push = function(value) {
  this.last.next = new LinkedListNode(value);
  this.last = this.last.next;
}

// random access for a linked list is O(n)

function createLinkedListFromArray(arr) {
  var head = new LinkedListNode(arr[0]);
  var ll = new LinkedList(head, head);
  for (var i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;


  // var current = head;
  // for (var i = 1; i < arr.length; i++) {
  //   current.next = new LinkedListNode(arr[i]);
  //   current = current.next;
  // }
  // return head;
}

var ll = createLinkedListFromArray([3, 6, 2, 5, 7]);
console.log(ll);

// pop froma queue is from the front
console.log(ll.pop());
console.log(ll);







// when deciding which data structure to use, consider memory usage as well as run time complexity


















//
