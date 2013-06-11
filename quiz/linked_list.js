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

  linkedList.reverse = function(head) {
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

  return linkedList;
}());