import { Container, Brand, Search, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar-placeholder.png";

import { Link, useNavigate } from "react-router-dom";

export function Header({ children }) {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <Brand to="/">RocketMovies</Brand>

      <Search>{children}</Search>

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <span onClick={handleSignOut}>sair</span>
        </div>
        <Link to="/profile">
          <img src={avatarURL} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
