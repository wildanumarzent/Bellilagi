import clsx from 'clsx';

const Textfield = ({
  onChange,
  onBlur,
  value,
  name,
  placeholder,
  error,
  errorText,
  label,
  type,
  required,
  classNameInput,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  label?: string;
  type?: string;
  required?: boolean;
  classNameInput?: string;
}) => {
  return (
    <div className="">
      {label && (
        <label htmlFor="name" className="block text-xs font-medium leading-5 text-gray-600">
          {label}
          {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className={clsx('mt-1')}>
        <input
          id="input"
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={clsx(
            'pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            classNameInput,
          )}
        />
        {error && (
          <label htmlFor="" className="label -mt-2">
            <span className="label-text text-xs text-error">{errorText}</span>
          </label>
        )}
      </div>
    </div>
  );
};

export default Textfield;
