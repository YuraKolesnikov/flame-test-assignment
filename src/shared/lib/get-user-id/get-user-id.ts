export const getUserId = (url: string): string => url.split('/').filter(p => Number.isInteger(+p)).filter(Boolean)[0]
