var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let low = 0;
    let high = str.length - 1;
    while (low < high) {
        if (str[low] !== str[high]) {
            return false;
        }
        low++;
        high--;   
    }
    return true;
};