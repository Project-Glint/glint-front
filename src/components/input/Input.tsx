import React, { useEffect, useRef, useState } from 'react';
import * as S from './Input.styled';
import { CancelIcon, SimpleMagnifyingGlassIcon } from 'assets';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  hasError?: boolean;
  helperText?: string;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  cancelIcon?: boolean;
  onCancelClick?: () => void;
  timer?: boolean;
  timerDuration?: number;
  searchIcon?: boolean;
}

const Input = React.forwardRef(
  (
    {
      className,
      hasError,
      helperText, // 추가된 helperText
      handleFocus,
      handleBlur,
      handleChange,
      handleKeyDown,
      cancelIcon,
      onCancelClick,
      timer = false,
      timerDuration = 30,
      searchIcon,
      ...rest
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement | null>
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [timerValue, setTimerValue] = useState(timerDuration);

    useEffect(() => {
      let timerInterval: NodeJS.Timeout;
      if (timer && timerValue > 0) {
        timerInterval = setInterval(() => {
          setTimerValue((prev) => prev - 1);
        }, 1000);
      }
      return () => clearInterval(timerInterval);
    }, [timer, timerValue]);

    const handleCancel = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
        const event = new Event('input', { bubbles: true });
        inputRef.current.dispatchEvent(event);
      }

      if (onCancelClick) {
        onCancelClick();
      }
    };

    const resetTimer = () => {
      setTimerValue(timerDuration);
    };

    const formatTime = (seconds: number): string => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    const formattedTime = formatTime(timerValue);

    return (
      <S.Wrapper className={className}>
        <S.InputWrapper>
          <S.Input
            ref={ref}
            hasError={hasError}
            onFocus={(e) => {
              handleFocus?.(e);
              if (timerValue === 0) resetTimer();
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            searchIcon={searchIcon}
            {...rest}
          />
          {timer && (
            <S.Timer hasCancelIcon={!!cancelIcon}>
              {timerValue > 0 ? formattedTime : '00:00'}
            </S.Timer>
          )}
          {cancelIcon && (
            <S.CancelIcon onClick={handleCancel}>
              <CancelIcon />
            </S.CancelIcon>
          )}
          {searchIcon && (
            <S.SearchIcon>
              <SimpleMagnifyingGlassIcon />
            </S.SearchIcon>
          )}
        </S.InputWrapper>
        {helperText && (
          <S.HelperText hasError={hasError}>{helperText}</S.HelperText>
        )}
      </S.Wrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
