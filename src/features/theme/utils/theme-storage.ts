import { Cookies } from '@/utils/cookies/cookies';

export const THEME_STORAGE_KEY = 'geo-know:theme';

export const themeStorage = new Cookies(THEME_STORAGE_KEY);
