import { keyframes } from 'glamor'
import glamorous, { CSSProperties } from 'glamorous'

const bounce = keyframes('bounce', {
    '20%': { transform: 'scale(1.4)' },
    '100%': { transform: 'scale(1)' },
})

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const AnimateWrapper = glamorous.div({
    animation: `${bounce} .3s`,
})

export const Img = glamorous.img((props: { size?: number }) => ({
    width: props.size || 80,
    height: props.size || 80,
    padding: 20,
    margin: 10,
    color: 'white',
    cursor: 'pointer',
    ...(styles as CSSProperties),
}))
