let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function ReverseElements(lst) {
  if (lst.next) {
    ReverseElements(lst.next);
  }

  console.log(lst.value);
}

ReverseElements(list);

function ReverseElementsCycle(lst) {
    let result = [];
    while (lst) {
      result.push(lst.value)
      lst = lst.next;
    }
    for (let res of result.reverse()) {
        console.log(res)
    }
  }

  ReverseElementsCycle(list);
