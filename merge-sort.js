export default class MergeSort {
  static mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const half = Math.floor(array.length / 2);
    const leftArray = array.slice(0, half);
    const rightArray = array.slice(half);
    return arrayMerger(mergeSort(leftArray), mergeSort(rightArray));
  }

  static arrayMerger(leftArray, rightArray) {
    let leftIndex = 0,
      rightIndex = 0;
    let orderedArray = [];
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        orderedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        orderedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
    if (leftArray[leftIndex]) {
      let remainingElements = leftArray.slice(leftIndex);
      orderedArray.push(...remainingElements);
    } else {
      let remainingElements = rightArray.slice(rightIndex);
      orderedArray.push(...remainingElements);
    }
    return orderedArray;
  }
}
