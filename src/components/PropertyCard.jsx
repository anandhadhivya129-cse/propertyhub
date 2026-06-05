import { useNavigate } from "react-router-dom";

function PropertyCard({ data, id }) {
  const navigate = useNavigate();

  return (
    <div
      style={styles.card}
      onClick={() => navigate(`/property/${id}`)}
    >
      <h3>{data.title}</h3>
      <p>{data.location}</p>
      <h4>{data.price}</h4>

      <button style={styles.button}>View Details</button>
    </div>
  );
}

const styles = {
  card: {
    background: "#111a2e",
    padding: "15px",
    borderRadius: "12px",
    width: "220px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
  button: {
    marginTop: "10px",
    padding: "8px",
    border: "none",
    borderRadius: "6px",
    background: "#1f6fff",
    color: "white",
    cursor: "pointer",
  },
};

export default PropertyCard;