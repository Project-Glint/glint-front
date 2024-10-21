import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { Input } from 'components/input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  hasError?: boolean;
}

export default function TextController({
  name,
  control,
  rules,
  handleFocus,
  handleBlur,
  handleChange,
  handleKeyDown,
  hasError,
  ...rest
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Input
          {...field}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={(e) => {
            field.onChange(e);
            if (handleChange) {
              handleChange(e);
            }
          }}
          handleKeyDown={handleKeyDown}
          hasError={hasError || !!fieldState.error}
          {...rest}
        />
      )}
    />
  );
}
