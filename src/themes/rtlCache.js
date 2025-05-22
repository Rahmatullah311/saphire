import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

export function createEmotionCache(isRTL = false) {
  return createCache({
    key: isRTL ? 'muirtl' : 'mui',
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [],
  });
}
