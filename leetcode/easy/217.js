/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	// create object count
	let count = {};

	// iterate through array
	for (const item of nums) {
		if (count[item]) {
			count[item] += 1;
			return true;
		} else {
			count[item] = 1;
		}
	}
	return false;
};

console.log(containsDuplicate([3, 3]));
