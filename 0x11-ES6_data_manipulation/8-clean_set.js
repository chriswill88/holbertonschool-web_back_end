export default function cleanSet(set, startString) {
  const arr = [...set];

  const clean = new Set(
    arr.filter(
      (str) => str.substring(0, startString.length) === startString,
    ),
  );

  if (arr.every((x) => clean.has(x))) {
    return undefined;
  }

  const result = [...clean].map((x) => x.substring(startString.length));

  let str = '';
  for (const i of result) {
    str = str.concat(`${i}-`);
  }

  str = str.substring(0, str.length - 1);
  return str;
}
