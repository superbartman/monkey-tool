interface Props {
    locales?: string;
    value: string | number;
    minDecimal?: number;
    maxDecimal?: number;
}
declare const toLocaleString: (props: Props) => string;
export default toLocaleString;
