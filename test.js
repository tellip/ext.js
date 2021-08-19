'use strict';

function factorial(n, total) {
    'use strict';
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial(9999, 1) // 120
