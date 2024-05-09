import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tag } from "../Tag";

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>
        {data.title}
        <Rating grade={data.rating} />
      </h1>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
