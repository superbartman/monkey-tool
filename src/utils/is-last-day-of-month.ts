const isLastDayOfMonth = (date: number | string | Date) => {
  return new Date(new Date(date).getTime() + 86400000).getDate() === 1;
};

export default isLastDayOfMonth;
