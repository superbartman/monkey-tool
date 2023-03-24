interface Props {
  value: string;
  startChar: string;
  endChar: string;
}

const getBetween = ({ value, startChar, endChar }: Props) => {
  const regex = new RegExp(`${startChar}(.*?)${endChar}`);
  const match = value.match(regex);
  return match?.[1]?.trim() || '';
};

export default getBetween;
