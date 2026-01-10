function plusOne(digits: number[]): number[] {
    const n = digits.length
    for (let i = n - 1; i < n; i--) {
        digits[i] = digits[i] + 1
        if (digits[i] > 9) {
            digits[i] = 0
            if (i === 0) {
                digits.unshift(0)
                i = 1
            }
        } else {
            break;
        }
    }
    return digits
};
