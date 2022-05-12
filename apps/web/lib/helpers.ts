export const betterEntries = <T>(obj: T): Array<[keyof T, T[keyof T]]> => {
	return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
};
