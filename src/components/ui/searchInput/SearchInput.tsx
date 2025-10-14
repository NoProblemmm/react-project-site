import React, { useRef, memo, useCallback, useState, FC } from "react";
import "./SearchInput.css";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchValue: (value: string) => void;
};

const correctValue = (value: string): string => {
  return value.trimStart();
};
export const SearchInput: FC<Props> = memo(
  ({ value, onChange, setSearchValue }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleInpurActive = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    const handleFocusIllumination = useCallback(() => {
      setIsFocused((prev) => !prev);
    }, []);

    const deleteInputValue = useCallback(() => {
      setSearchValue("");
    }, []);

    return (
      <div className={`container ${isFocused ? "focused" : ""}`}>
        <img
          className="img-search"
          onClick={handleInpurActive}
          src="/static/search.svg"
        ></img>

        <input
          ref={inputRef}
          placeholder="Search ..."
          className="search-input"
          value={correctValue(value)}
          onChange={onChange}
          type="text"
          onFocus={handleFocusIllumination}
          onBlur={handleFocusIllumination}
        />
        {value && (
          <img
            className="img-close"
            src="/static/close.svg"
            onClick={deleteInputValue}
          ></img>
        )}
      </div>
    );
  }
);
