import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentista, setDentista] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    axios
      .get(url)
      .then((res) => {
        setDentista(res.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del dentista:", error);
      });
  }, [id]);

  if (!dentista) {
    return <p>Cargando detalles del dentista...</p>;
  }

  return (
    <div className="detail-container">
      <h2>{dentista.name}</h2>
      <div className="detail-item">Email:</div>
      <div className="detail-value">{dentista.email}</div>

      <div className="detail-item">Teléfono:</div>
      <div className="detail-value">{dentista.phone}</div>

      <div className="detail-item">Sitio web:</div>
      <div className="detail-value">
        <a href={`http://${dentista.website}`} target="_blank" rel="noopener noreferrer">
          {dentista.website}
        </a>
      </div>
    </div>
  );
};

export default Detail;
