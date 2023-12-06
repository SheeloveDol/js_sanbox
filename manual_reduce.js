var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    let accum = init;
    for (const element of nums) {
        accum = fn(accum, element)
    }
    return accum;
};