/**
 * If arg is a function, execute it; otherwise return it
 * @param {Function|Object} f Value to execute or return
 */
const executeOrReturn = f => (f instanceof Function ? f() : f);

export default executeOrReturn;
