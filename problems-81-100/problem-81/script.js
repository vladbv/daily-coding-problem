// Problem 81
//
// This problem was asked by Cisco.
//
// Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.
//
// For example, 10101010 should be 01010101. 11100010 should be 11010001.
//
// Bonus: Can you do this in one line?

// Returns the swapped even and odd bits
// @param {number} num
// @return {number}

function swapBits(num) {
	// applying bitmask over all the even and odd bits
	// then shifting even bitmask right by 1, and shifting odd bitmask left by 1
	return ((num & 0b10101010) >> 1 | ((num & 0b01010101) << 1);
}
