import { intervalToDuration } from 'date-fns';

import { NumberFormat } from '../types/utils';
import { API_BASE_URL } from '@/constants/env';

export const numberFormat = ({ num, locale, opt }: NumberFormat) =>
  Number(num).toLocaleString(locale ?? 'en-US', {
    minimumFractionDigits: 0,
    ...opt,
    currency: 'IDR',
  });

export const getDuration = (start = 0, end = 0) => intervalToDuration({ start, end });

export const revertNumberFormat = (numberStringFormatted: string) => {
  return Number(numberStringFormatted.split(',').join('').split('.').join(''));
};

export const imageRenderUrl = (image: string) => {
  if (image) {
    const imageString = image.replace('/private', '');
    if (imageString.includes('http')) {
      return imageString;
    }
    return API_BASE_URL + imageString;
  }
  return '';
};
