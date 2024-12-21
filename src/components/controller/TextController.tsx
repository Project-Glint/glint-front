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
  cancelIcon?: boolean;
  onCancelClick?: () => void;
  timer?: boolean;
  timerDuration?: number;
  searchIcon?: boolean;
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
  cancelIcon,
  onCancelClick,
  timer,
  timerDuration,
  searchIcon,
  ...rest
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
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
            helperText={fieldState.error?.message}
            cancelIcon={cancelIcon}
            onCancelClick={() => {
              field.onChange('');
              if (onCancelClick) {
                onCancelClick();
              }
            }}
            timer={timer}
            timerDuration={timerDuration}
            searchIcon={searchIcon}
            {...rest}
          />
        );
      }}
    />
  );
}
