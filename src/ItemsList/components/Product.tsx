import { keyframes } from 'glamor'
import glamorous from 'glamorous'

const bounce = keyframes('bounce', {
    '0%': { transform: 'scale(0.1)', opacity: 0 },
    '60%': { transform: 'scale(1.2)', opacity: 1 },
    '100%': { transform: 'scale(1)' },
})

export const Product = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 20,
    margin: 10,
    fontSize: 64,
    background: 'tomato',
    color: 'white',
    cursor: 'pointer',
    animation: `${bounce} .3s`,
})
