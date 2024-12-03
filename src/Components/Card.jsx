import React from "react";
import { Link } from "react-router-dom";
import '../Styles/card.css';

const Card = ({ name, username, id, imageUrl }) => {
  const addFav = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.some((fav) => fav.id === id)) {
      const nuevoFavorito = { name, username, id, imageUrl };
      favoritos.push(nuevoFavorito);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{username}</p>
      <img src="/images/doctor.jpg" alt='wpp' />
      <Link to={`/detail/${id}`}>Ver detalles</Link>
      <button onClick={addFav}>⭐</button>
    </div>
  );
};

export default Card;
