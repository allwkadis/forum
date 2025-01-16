type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additionals: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additionals.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(" ");
}
