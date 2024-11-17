import MergeSort from "./merge-sort";
export default class RadixSort {
  #buckedList;
  getBiggerNumber(array) {
    const length = array.length;
    let max = array[0];
    for (let i = 0; i < length; i++) {
      max = array[i] > max ? array[i] : max;
    }
    return max;
  }

  generateBuckedList() {
    this.#buckedList = Array.from({ length: 10 }, () => {
      [];
    });
  }
}
