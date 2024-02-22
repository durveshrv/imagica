import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import axios from "axios";
function App() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(Math.random()); // Trigger re-render to update UI
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navbar />
      <Grid photos={photos} onDelete={handleDelete} />
      <Button setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default App;
