import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Container, Content, Title } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/movies?title=${search}`);
        setMovies(response.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <Title>
        <h1>Meus filmes</h1>
        <Link to="/new">
          <Button icon={FiPlus} title="Adicionar filme"></Button>
        </Link>
      </Title>

      <main>
        <Content>
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))}
        </Content>
      </main>
    </Container>
  );
}
