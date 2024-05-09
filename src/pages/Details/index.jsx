import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api.js";
import avatarPlaceholder from "../../assets/avatar-placeholder.png";

import { FiArrowLeft } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

import { Container, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating/index";
import { Textarea } from "../../components/Textarea";

export function Details() {
  const { user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [data, setData] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedRating, setEditedRating] = useState(0);
  const [editedTags, setEditedTags] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const handleDiscardMovie = () => {
    let userConfirmation = true;

    if (userConfirmation) {
      userConfirmation = confirm(
        "Tem certeza que deseja sair sem salvar as alterações?"
      );
    }

    if (userConfirmation) {
      navigate(-1);
    }
  };

  const handleSaveChanges = async () => {
    const confirmSave = window.confirm(
      "Deseja realmente salvar estas alterações?"
    );
    if (confirmSave) {
      await api.put(`/movies/${params.id}`, {
        title: editedTitle,
        description: editedDescription,
        rating: editedRating,
        tags: editedTags,
      });

      setData((prevData) => ({
        ...prevData,
        title: editedTitle,
        description: editedDescription,
        rating: editedRating,
        tags: editedTags.map((tag) => ({ id: tag.id, name: tag.name.trim() })),
      }));
      setIsEditing(false);
    }
  };

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o filme?");
    if (confirm) {
      await api.delete(`/movies/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
      const formattedDateTime = format(
        new Date(response.data.created_at),
        "'Criado em:' dd/MM/yy 'às' HH:mm"
      );
      setCreatedAt(formattedDateTime);
      setEditedTitle(response.data.title);
      setEditedDescription(response.data.description);
      setEditedRating(response.data.rating);
      setEditedTags(
        response.data.tags.map((tag) => ({ ...tag, name: tag.name.trim() }))
      );
    }
    fetchMovies();
  }, [params.id]);

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

      {data && (
        <main>
          <Content>
            <header>
              <ButtonText
                title="Voltar"
                icon={FiArrowLeft}
                onClick={handleDiscardMovie}
              />
              <h1>
                {isEditing ? (
                  <Input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                ) : (
                  data.title
                )}
                <Rating
                  grade={isEditing ? editedRating : data.rating}
                  editable={isEditing}
                  onChange={(newRating) => setEditedRating(newRating)}
                />
              </h1>
            </header>

            <div className="subtitle">
              <img src={avatarURL} alt="Foto do usuário" />
              <span>Por {user.name}</span>
              <LuClock3 />
              {createdAt && <span>{createdAt}</span>}
            </div>

            <section className="tags">
              {isEditing ? (
                <Input
                  placeholder="Tags (separe por vírgula)"
                  value={editedTags.map((tag) => tag.name).join(",")}
                  onChange={(e) =>
                    setEditedTags(
                      e.target.value
                        .split(",")
                        .map((tagName) => ({
                          id: Math.random(),
                          name: tagName.trim(),
                        }))
                    )
                  }
                />
              ) : (
                data.tags.map((tag) => <Tag key={tag.id} title={tag.name} />)
              )}
            </section>

            <section className="text">
              {isEditing ? (
                <Textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              ) : (
                <p>{data.description}</p>
              )}
            </section>

            <div className="buttons">
              {isEditing ? (
                <ButtonText title="Salvar" onClick={handleSaveChanges} />
              ) : (
                <div>
                  <ButtonText
                    title="Editar filme"
                    onClick={() => setIsEditing(true)}
                  />
                  <ButtonText title="Excluir filme" onClick={handleRemove} />
                </div>
              )}
            </div>
          </Content>
        </main>
      )}
    </Container>
  );
}
