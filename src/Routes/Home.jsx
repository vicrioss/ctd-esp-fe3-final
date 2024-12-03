import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context.jsx";

const Home = () => {
  const { state } = useGlobalContext();
  const { data: dentistas } = state;

  const agregarFavorito = (dentista) => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.some((fav) => fav.id === dentista.id)) {
      favoritos.push(dentista);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
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
            <img src="/images/doctor.jpg" alt='wpp' />
            <Link to={`/dentista/${dentista.id}`}>{dentista.name}</Link>
            <p>{dentista.username}</p>
            <button onClick={() => agregarFavorito(dentista)}>⭐</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
