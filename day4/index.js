/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let temp = init;
  return {
    increment: () => {
      return ++temp;
    },
    decrement: () => {
      return --temp;
    },
    reset: () => {
      return (temp = init);
    },
  };
};
