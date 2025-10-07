function isPalindrome(s: string): boolean {
  const s2 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const s3 = Array.from(s2).toReversed().join("");
  return s2 === s3;
}
