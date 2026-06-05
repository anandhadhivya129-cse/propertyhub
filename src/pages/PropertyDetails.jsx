import { useParams } from "react-router-dom";

function PropertyDetails() {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h1>Property Details</h1>
      <p>Property ID: {id}</p>

      <div style={styles.card}>
        <h2>Luxury Villa</h2>
        <p>Location: Chennai</p>
        <h3>Price: ₹2.5 Cr</h3>
        <p>
          This is a premium property with modern architecture, sea view,
          and luxury amenities.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    color: "white",
  },
  card: {
    background: "#111a2e",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
  },
};

export default PropertyDetails;