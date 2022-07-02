
type ValueOf<T extends object, K extends keyof T = keyof T> = K extends K ? T[K] : never;
