export default function cleanSet(set, startString) {
  let str = '';

  const clean = new Set(
    [...set].filter(
      (str) => str.substring(0, startString.length) === startString,
    ),
  );

  if ([...set].every((x) => clean.has(x))) {
    return str;
  }

  const result = [...clean].map((x) => x.substring(startString.length));

  for (const i of result) {
    str = str.concat(`${i}-`);
  }

  str = str.substring(0, str.length - 1);
  return str;
}
