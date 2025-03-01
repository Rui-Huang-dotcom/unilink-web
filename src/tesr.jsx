import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./data/fetchproperties";
import Papa from "papaparse";

export default function Test() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the property ID from the URL

  useEffect(() => {
    // Fetch the data and store it in the state
    const getProperties = async () => {
      const data = await fetchData();
      setProperties(data); // Store the properties in the state
      setLoading(false);
    };

    getProperties(); // Fetch properties when the component mounts
  }, []);

  if (loading) return <p>Loading properties...</p>;

  // Find the property with the matching id
  const property = properties.find((prop) => prop.id === id);
  console.log(properties);
  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h1>{property.address}</h1>
      <p>{property.postcode}</p>
    </div>
  );
}
