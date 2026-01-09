function minDeletionSize(strs: string[]): number {
    let cnt = 0

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j + 1] !== undefined) {
                if (strs[j][i].charCodeAt(0) > strs[j + 1][i].charCodeAt(0)) {
                    cnt++
                    break;
                }
            } else break;
        }
    }


    return cnt
};
