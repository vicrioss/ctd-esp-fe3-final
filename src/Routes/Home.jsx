import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context.jsx";

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { data: dentistas, favoritos } = state;

  const handleFav = (dentista) => {
    const isFavorito = favoritos.some((fav) => fav.id === dentista.id);
    if (isFavorito) {
      dispatch({ type: "REMOVE_FAV", payload: dentista.id });
    } else {
      dispatch({ type: "ADD_FAV", payload: dentista });
    }
  };

  return (
    <div className="grilla">
      <h1>Home</h1>
      {dentistas.length === 0 ? (
        <p>Cargando dentistas...</p>
      ) : (
        dentistas.map((dentista) => (
          <div className="card" key={dentista.id}>
            <img src="/images/doctor.jpg" alt="wpp" />
            <Link to={`/dentista/${dentista.id}`}>{dentista.name}</Link>
            <p>{dentista.username}</p>
            <button onClick={() => handleFav(dentista)}>
              {favoritos.some((fav) => fav.id === dentista.id)
                ? "❌ Eliminar"
                : "⭐ Agregar"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
