import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { updateProfile } from "firebase/auth";
import styles from "./EditUserPage.module.css";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const EditUserPage = () => {
  const { user } = useAuthValue(); // primeiro isso!
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { documents: userPosts } = useFetchDocuments("posts", null, user.uid); // só use depois de pegar o user

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    if (!displayName.trim()) {
      setFormError("O nome não pode estar vazio.");
      return;
    }

    setLoading(true);

    try {
      // Atualiza o perfil do usuário
      await updateProfile(user, { displayName });

      // Atualiza o campo createdBy dos posts
      if (userPosts) {
        for (const post of userPosts) {
          const postRef = doc(db, "posts", post.id);
          await updateDoc(postRef, { createdBy: displayName });
        }
      }

      setSuccessMessage("Perfil e posts atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error.message);
      setFormError("Erro ao atualizar perfil. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.edit}>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleUpdateProfile}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <p><strong>Email (não editável):</strong> {user.email}</p>

        {!loading && <button className="btn">Salvar alterações</button>}
        {loading && (
          <button className="btn" disabled>
            Salvando...
          </button>
        )}

        {formError && <p className="error">{formError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </form>

      <button className="btn" onClick={() => navigate("/userpage")}>Voltar</button>
    </div>
  );
};

export default EditUserPage;
