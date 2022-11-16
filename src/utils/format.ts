import { intervalToDuration } from 'date-fns';

import { NumberFormat } from '@/types/utils';

export const numberFormat = ({ num, locale, opt }: NumberFormat) =>
  Number(num).toLocaleString(locale ?? 'en-US', { minimumFractionDigits: 0, ...opt });

export const getDuration = (start = 0, end = 0) => intervalToDuration({ start, end });
