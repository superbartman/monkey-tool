const toLocaleString = (props) => {
    const { locales = 'en-US', value, minDecimal = 2, maxDecimal = 2 } = props;
    return Number(value).toLocaleString(locales, {
        minimumFractionDigits: minDecimal,
        maximumFractionDigits: maxDecimal,
    });
};
export default toLocaleString;
