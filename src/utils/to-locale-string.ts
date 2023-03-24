interface Props {
  locales?: string;
  value: string | number;
  minDecimal?: number;
  maxDecimal?: number;
}

const toLocaleString = (props: Props): string => {
  const { locales = 'en-US', value, minDecimal = 2, maxDecimal = 2 } = props;
  return Number(value).toLocaleString(locales, {
    minimumFractionDigits: minDecimal,
    maximumFractionDigits: maxDecimal,
  });
};

export default toLocaleString;
