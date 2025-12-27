/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const n = s.length
    // so i to n-1 
    let limit = Math.floor(n / 2)

    for (let i = 0; i < limit; i++) {
        [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]]
    }
};