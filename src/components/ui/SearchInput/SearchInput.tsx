import React, { useRef } from "react";
import "./SearchInput.css";

type Props = {
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSearchValue: (value: string) => void;
};

export function SearchInput({ value, onChange, setSearchValue }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInpurActive = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const deleteInputValue = () => {
    setSearchValue("");
  };

  return (
    <div className="container">
      <img
        className="img-search"
        onClick={handleInpurActive}
        src="/static/search.svg"
      ></img>

      <input
        ref={inputRef}
        placeholder="Search ..."
        className="search-input"
        value={value}
        onChange={onChange}
        type="text"
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
