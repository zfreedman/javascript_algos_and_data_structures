const randomArray = (size, min, max) => {
  const result = [];

  for (let i = 0; i < size; ++i) {
    result.push(Math.floor(min + (max - min) * Math.random()));
  }

  return result;
};

const insertionSort = arr => {
  for (let i = 1; i < arr.length; ++i) {
    const elementToSort = arr[i];
    let j = i - 1;

    while (-1 < j && elementToSort < arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = elementToSort;
  }

  return arr;
};

// [3, 2, 1]
// i = 1, e2s = 2
// j = 0, arr[j] = 3

const arr0 = randomArray(10, -5, 5);
console.log(arr0);
insertionSort(arr0);
console.log(arr0);
