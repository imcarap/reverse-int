module.exports = reverse;
    function reverse (n) {
        let a = Math.abs(n);
        return Number(String(a).split('').reverse().join(''));
    }
