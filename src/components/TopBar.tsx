import glamorous from 'glamorous'

export const TopBar = glamorous.div({
    padding: 30,
    borderBottom: '1px solid black',
    '@media(max-width: 460px)': {
        padding: 10,
        fontSize: 12,
    },
})
