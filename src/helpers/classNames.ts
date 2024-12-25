type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods,
  additionals: string[]
): string {
  console.log(cls);

  return [
    cls,
    ...additionals,
    Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(" ");
}
