export default {
  sum(n1, n2) {
    return n1 + n2;
  },
  sub(n1, n2) {
    return n1 - n2;
  },
  mult(n1, n2) {
    return n1 * n2;
  },
  div(n1, n2) {
    return (n2 === 0)
      ? 'não é possível divisão por zero'
      : n1 / n2;
  },
};
