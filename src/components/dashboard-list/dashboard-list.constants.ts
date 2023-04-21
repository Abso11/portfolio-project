export const today = new Date();
export const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
export const yearAgo = new Date();
yearAgo.setMonth(yearAgo.getMonth() - 12);
