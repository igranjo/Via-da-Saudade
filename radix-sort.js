//import MergeSort from "./merge-sort";
export default class RadixSort {
  #bucketList;
  #radixStack;
  getBiggerNumber(array) {
    const length = array.length;
    let max = array[0];
    for (let i = 0; i < length; i++) {
      max = array[i] > max ? array[i] : max;
    }

    return max;
  }

  getMaxLength(number) {
    number = String(number);
    const size = number.length;
    return size;
  }

  generateBucketList() {
    this.#bucketList = Array.from({ length: 10 }, () => {
      [];
    });
    console.log(this.#bucketList);
    this.#bucketList.forEach((element) => {
      console.log();
    });
  }

  radixSorting(array) {
    const bigger = this.getBiggerNumber(array);
    const length = this.getMaxLength(bigger);
    let testStack = Array.from({ length: 10 }, () => {
      new Array();
    });
    this.generateBucketList();
    for (let size = 0; size < length; size++) {
      let unit = Math.pow(10, size + 1);
      array.forEach((element) => {
        let algarism = element % unit;
        testStack[algarism].push(element);
      });
      this.#radixStack = () => {
        for (let index = 9; index >= 0; index--) {
          while (testStack[index].length) {
            this.#radixStack.unshift(testStack[index].pop());
          }
        }
        array = this.#radixStack;
      };
    }
  }
}

const sorter = new RadixSort();
const array = [32, 45, 12];
sorter.generateBucketList();
