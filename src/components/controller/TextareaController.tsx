import React from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { Textarea } from 'components/input';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  showCharacterCount?: boolean;
}

export default function TextareaController({
  name,
  control,
  rules,
  handleChange,
  handleBlur,
  handleFocus,
  hasError,
  showCharacterCount,
  ...rest
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <Textarea
          {...field}
          value={field.value || ''}
          handleChange={(e) => {
            field.onChange(e);
            handleChange?.(e);
          }}
          handleBlur={(e) => {
            field.onBlur();
            handleBlur?.(e);
          }}
          handleFocus={handleFocus}
          hasError={hasError || !!fieldState.error}
          helperText={fieldState.error?.message}
          showCharacterCount={showCharacterCount}
          {...rest}
        />
      )}
    />
  );
}
