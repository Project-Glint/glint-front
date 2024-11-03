import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { Textarea } from 'components/input';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaController({
  name,
  control,
  rules,
  handleChange,
  handleBlur,
  handleFocus,
  ...rest
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Textarea
          {...field}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleFocus={handleFocus}
          {...rest}
        />
      )}
    />
  );
}
