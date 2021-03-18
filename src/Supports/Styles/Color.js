const { StyleSheet } = require('react-native');

const primary = '#28527a'
const secondary = '#f4d160'
const light = '#f4f9f9'
const dark = '#1e212d'

const color = StyleSheet.create({
    bgPrimary: { backgroundColor: primary },
    primary: { color: primary },

    bgSecondary: { backgroundColor: secondary },
    secondary: { color: secondary },

    bgLight: { backgroundColor: light },
    light: { color: light },

    bgDark: { backgroundColor: dark },
    dark: { color: dark }
})

export default color