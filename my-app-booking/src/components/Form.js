import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, TextField, MenuItem, Button } from "@mui/material";
import axios from "axios";
import './Form.css'
const Form = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", destination: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/destination")
      .then(res => setDestinations(res.data))
      .catch(error => console.error("Error fetching destinations:", error));
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/hotels");
  };

  return (
    <Container>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField className="form-field" label="Name" name="name" required fullWidth onChange={handleChange} />
        <TextField className="form-field" label="Email" name="email" required fullWidth type="email" onChange={handleChange} />
        <TextField className="form-field" select label="Destination" name="destination" required fullWidth onChange={handleChange}>
          {destinations.map(dest => (
            <MenuItem key={dest.id} value={dest.label}>
              {dest.label}
            </MenuItem>
          ))}
        </TextField>
        <Button className="form-button" type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Form;