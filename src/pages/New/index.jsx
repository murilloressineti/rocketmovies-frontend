import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    if (newTag.trim() === "") {
      return;
    }

    if (newTag.includes(" ")) {
      alert("A tag não pode conter espaços no meio.");
      return;
    }

    const trimmedTag = newTag.trim();

    setTags((prevState) => [...prevState, trimmedTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o título do filme");
    }

    const isRatingValid = rating >= 0 && rating <= 5;

    if (!isRatingValid) {
      return alert("A nota do filme deve ser entre 0 e 5");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    alert("Filme adicionado com sucesso!");
    navigate(-1);

    await api.post("/movies", {
      title,
      description,
      rating,
      tags,
    });
  }

  function handleDiscardMovie() {
    const anyFieldFilled =
      !!title.trim() ||
      !!description.trim() ||
      !!rating.trim() ||
      tags.length > 0;

    let userConfirmation = true;

    if (anyFieldFilled) {
      userConfirmation = confirm(
        "Tem certeza que deseja sair sem salvar as alterações?"
      );
    }

    if (userConfirmation) {
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      <main>
        <Form>
          <header>
            <ButtonText
              title="Voltar"
              icon={FiArrowLeft}
              onClick={handleDiscardMovie}
            />

            <h1>Novo filme</h1>
          </header>

          <div className="inputs">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <MovieItem
                isNew
                placeholder="Novo Marcador"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button title="Excluir filme" onClick={handleDiscardMovie} />

            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
