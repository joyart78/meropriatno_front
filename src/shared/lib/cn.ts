type ClassValue = string | number | boolean | null | undefined | ClassValue[];

export function cn(...args: ClassValue[]): string {
  return args.flat().filter(Boolean).join(" ");
}
