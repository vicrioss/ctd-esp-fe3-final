import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context"; // Importa el contexto
import "../Styles/card.css";

const Card = ({ name, username, id, imageUrl }) => {
  const { state, dispatch } = useGlobalContext();

  const isFavorito = state.favoritos.some((fav) => fav.id === id);

  const handleFav = () => {
    if (isFavorito) {
      dispatch({ type: "REMOVE_FAV", payload: id }); // Eliminar si ya está en favoritos
    } else {
      dispatch({
        type: "ADD_FAV",
        payload: { name, username, id, imageUrl },
      }); 
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <img src="/images/doctor.jpg" alt="wpp" />
      <Link to={`/detail/${id}`}>Ver detalles</Link>
      <button onClick={handleFav}>
        {isFavorito ? "❌ Eliminar" : "⭐ Agregar"}
      </button>
    </div>
  );
};

export default Card;
