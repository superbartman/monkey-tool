const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((acc, fn) => fn(acc), x);

export default pipe;
