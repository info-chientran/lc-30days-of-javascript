/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    return {
        toBe: (arg) => {
            if (val === arg) return true;
            throw new Error("Not Equal");
        },
        notToBe: (arg) => {
            if (val === arg) throw new Error("Equal");
            return true;
        }
    };
};