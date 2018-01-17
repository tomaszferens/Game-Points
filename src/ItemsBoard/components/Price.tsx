import glamorous from 'glamorous'

export const Price = glamorous.span((props: { isCheaper?: boolean }) => ({
    textDecoration: props.isCheaper ? 'line-through' : 'none',
}))
