interface Props {
  locales?: string;
  value: string | number;
  minDecimal?: number;
  maxDecimal?: number;
}

const toLocaleString = ({
  locales = 'en-US',
  value,
  minDecimal = 2,
  maxDecimal = 2,
}: Props): string => {
  return Number(value).toLocaleString(locales, {
    minimumFractionDigits: minDecimal,
    maximumFractionDigits: maxDecimal,
  });
};

export default toLocaleString;
