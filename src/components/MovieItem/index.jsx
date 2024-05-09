import { FiPlus, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { Container } from "./styles";

export function MovieItem({
  isNew,
  value,
  onClick,
  onChange,
  maxLength = 50,
  ...rest
}) {
  const inputRef = useRef(null);
  const [inputWidth, setInputWidth] = useState("16rem");

  useEffect(() => {
    if (inputRef.current) {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      setInputWidth(`${inputRef.current.scrollWidth / rootFontSize}rem`);
    }
  }, [value]);

  const buttonClass = isNew ? "button-add" : "button-delete";

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      setInputWidth(`${inputRef.current.scrollWidth / rootFontSize}rem`);
      onChange(e);
    }
  };

  return (
    <Container isNew={isNew} className={isNew ? "new" : "not-new"}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        style={{ width: inputWidth }}
        maxLength={maxLength}
        {...rest}
      />
      <button type="button" onClick={onClick} className={buttonClass}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
