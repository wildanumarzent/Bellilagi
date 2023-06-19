import clsx from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const textSize = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
};

interface CustomText extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: keyof typeof textSize;
}

const CustomText = (props: CustomText) => {
  return (
    <div {...props} className={clsx([textSize?.[props?.size || 'xs'], props.className])}>
      {props?.children}
    </div>
  );
};

export default CustomText;
