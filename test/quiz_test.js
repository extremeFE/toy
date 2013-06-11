
test( "linkedList create", function() {
  var head = linkedList.create(['a','b','c']);
  ok( head.value === 'a', "Passed!");
  ok( head.next.value === 'b', "Passed!");
  ok( head.next.next.value === 'c', "Passed!");
  ok( head.next.next.next === undefined, "Passed!");
});

test( "linkedList reverse", function() {
  var head = linkedList.create(['a','b','c']);
  head = linkedList.reverse(head);
  ok( head.value === 'c', "Passed!");
  ok( head.next.value === 'b', "Passed!");
  ok( head.next.next.value === 'a', "Passed!");
  ok( head.next.next.next === undefined, "Passed!");
});