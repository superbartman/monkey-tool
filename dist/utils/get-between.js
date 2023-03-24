const getBetween = (props) => {
    var _a;
    const { value, startChar, endChar } = props;
    const regex = new RegExp(`${startChar}(.*?)${endChar}`);
    const match = value.match(regex);
    return match ? (_a = match[1]) === null || _a === void 0 ? void 0 : _a.trim() : '';
};
export default getBetween;
