function calSum(obj) {
    if (Object.keys(obj).length === 0) {
        return 0;
    }
    else {
        let sumObj = 0;
        for (let key in obj) {
            sumObj += obj[key];
        }
        return sumObj;
    }
}

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
}

let sum = calSum(salaries); 
console.log(sum); // 390