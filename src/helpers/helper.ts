import { range as _range } from 'lodash'

const asciiCharA = 65
export const items = _range(26).reduce((acc, val, i) => {
    return {
        ...acc,
        [`id${i}`]: { name: String.fromCharCode(asciiCharA + val), price: Math.random() },
    }
}, {})
