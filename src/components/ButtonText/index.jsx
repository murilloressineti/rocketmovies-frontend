import { Container } from "./styles";

export function ButtonText({ title, icon: Icon, isActive = false, ...rest }) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {Icon && <Icon size={16} />}
      {title}
    </Container>
  );
}
