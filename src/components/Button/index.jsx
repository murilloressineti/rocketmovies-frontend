import { Container } from "./styles.js";

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={16} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
