interface Props {
  value: string;
  startChar: string;
  endChar: string;
}

const getBetween = (props: Props) => {
  const { value, startChar, endChar } = props;
  const regex = new RegExp(`${startChar}(.*?)${endChar}`);
  const match = value.match(regex)
  return match ? match[1]?.trim() : ''
};

export default getBetween;
