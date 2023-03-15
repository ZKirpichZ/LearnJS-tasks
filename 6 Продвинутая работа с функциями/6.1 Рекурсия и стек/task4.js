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

function lstElem1(lst) {
  while (lst) {
    console.log(lst.value);
    lst = lst.next;
  }
}

lstElem1(list);

function lstElem2(lst) {
  console.log(lst.value);

  if (lst.next) {
    lstElem2(lst.next);
  }
}

lstElem2(list);
