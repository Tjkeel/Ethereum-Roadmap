export const numberToWord = (value: number) => value > 9
  ? String(value)
  : [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ][value];
