import { keyframes } from 'glamor'
import glamorous from 'glamorous'

const rotation = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(365deg)' },
})

export const Loader = glamorous.div({
    width: 90,
    height: 90,
    borderRadius: '50%',
    border: '12px solid grey',
    borderTop: '12px solid white',
    transition: '0.3s',
    animation: `${rotation} 1s infinite`,
})
