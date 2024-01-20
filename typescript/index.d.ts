type CanUndef<T> = T | undefined;

type Nullable<T = unknown> = T | undefined | null;

type CanPromise<T = unknown> = T | Promise<T>;

type CanArray<T = unknown> = T | Promise<T>;

interface Dictionary<T = unknown> {
	[key: PropertyKey]: T;
}
