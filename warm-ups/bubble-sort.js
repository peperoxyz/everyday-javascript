// sorting array of numbers with bubble sort algorithm

function bubbleSort(nums) {
	// iterate trhough the array
	for (let i = 0; i < nums.length - 1; i++) {
		// iterate again to get the next value and compare
		for (let j = 0; j < nums.length - i - 1; j++) {
			// check if the current value is smaller than its next value
			if (nums[j] > nums[j + 1]) {
				// if want to make an increasing/decreasing bubble sort, adjust the operator
				// if yes, then swap them
				let temp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = temp;
			}
		}
	}
	return nums;
}

console.log(bubbleSort([19, 173, 1, 62, 8]));
