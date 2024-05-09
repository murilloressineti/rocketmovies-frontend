import { Container } from "./styles.js";
import { IoStarSharp, IoStarOutline } from "react-icons/io5";

export function Rating({ grade, editable, onChange }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= grade;

    const starIcon = isFilled ? (
      <IoStarSharp
        key={i}
        onClick={() => {
          if (editable) {
            onChange(i);
          }
        }}
        style={{ cursor: editable ? "pointer" : "default" }}
      />
    ) : (
      <IoStarOutline
        key={i}
        onClick={() => {
          if (editable) {
            onChange(i);
          }
        }}
        style={{ cursor: editable ? "pointer" : "default" }}
      />
    );

    stars.push(starIcon);
  }

  return (
    <Container>
      <div>{stars}</div>
    </Container>
  );
}
