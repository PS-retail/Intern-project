function subsetList (list1, list2) {
  let hset = new Set();

  res = []

  for (let i = 0; i < list1.length; i++) {
    if (!hset.has(list1[i])) {
      hset.add(list1[i]);
    }
  }

  for (let j = 0; j < list2.length; j++) {
      if (!hset.has(list2[j])) {
          res.push(list2[j])
      }
  }
  return res;
};

module.exports = subsetList;