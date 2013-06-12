"use strict";

var linkedList = (function() {
  var linkedList = {};
  linkedList.create = function(arr) {
    var prev;
    var head;
    _.each(arr, function(value){
      var item = {value:value};
      if (prev) {
        prev.next = item;
      } else {
        head = item;
      }
      prev = item;
    });

    return head;
  };

  linkedList.reverseByWhile = function(head) {
    var next = head.next;
    delete head.next;
    while (next) {
      var tmp = next.next;
      next.next = head;
      head = next;
      next = tmp;
    }
    return head;
  };

  linkedList.reverseByRecursive = function(node, prev) {
    var next = node.next;
    if (!prev) {
      delete node.next;
    } else {
      node.next = prev;
    }
    return next ? linkedList.reverseByRecursive(next, node) : node;
  };

  return linkedList;
}());