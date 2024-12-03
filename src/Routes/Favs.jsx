import React, { useEffect, useState } from "react";

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosStorage = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosStorage);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.length === 0 ? (
          <p>No tienes dentistas favoritos aún.</p>
        ) : (
          favoritos.map((dentista) => (
            <div className="card" key={dentista.id}>
              <img src="/images/doctor.jpg" alt='wpp' />
              <h2>{dentista.name}</h2>
              <p>{dentista.username}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Favs;

