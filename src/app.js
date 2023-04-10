/* eslint-disable no-plusplus */
export default function app(set) {
  return {
    ...set,
    [Symbol.iterator]() {
      const setVar = Object.keys(set);
      const arr = [...set[setVar]];
      const limit = arr.length;
      let count = 0;
      return {
        next() {
          if (count < limit) {
            return {
              done: false,
              value: arr[count++],
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}
