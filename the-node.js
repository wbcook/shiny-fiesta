// https://en.wikibooks.org/wiki/Data_Structures/Introduction
// https://en.wikibooks.org/wiki/Algorithms/Introduction
// // Create a new node, with v as its contained value and next as
// // the value of the next pointer
// function make-node(v, node next): node
//   let result := new node {v, next}
//   return result
// end
//
// // Returns the value contained in node n
// function get-value(node n): element
//   return n.value
// end
//
// // Returns the value of node n's next pointer
// function get-next(node n): node
//   return n.next
// end
//
// // Sets the contained value of n to be v
// function set-value(node n, v)
//   n.value := v
// end
//
// // Sets the value of node n's next pointer to be new-next
// function set-next(node n, new-next)
//   n.next := new-next
//   return new-next
// end

function Node(value, next) {
  this.value = value;
  this.next = next;
  this.getValue = getValue;
  this.getNext = getNext;
  this.setValue = setValue;
  this.setNext = setNext;
}

function getValue() {
  return this.value;
}

function getNext() {
  return this.next;
}

function setValue(value) {
  this.value = value;
}

function setNext(next) {
  this.next = next;
  return next;
}
