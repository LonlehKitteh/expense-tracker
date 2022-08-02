function createColor(hue, saturation, lightness) {
    return {
        hue: hue,
        saturation: saturation,
        lightness: lightness,
        getColor() {
            return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
        },
        lighten(amount) {
            return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness + amount}%)`
        }
    }
}

const COLORS =
{
    // primary colros
    MAIN_THEME: createColor(231, 70, 60),
    MAIN_TEXT: createColor(0, 0, 0),
    SUCCESS: createColor(134, 61, 41),
    DANGER: createColor(354, 70, 54),

    // secondary colors
    SECONDARY_TEXT() {
        return this.MAIN_TEXT.lighten(15)
    },
}

export default COLORS