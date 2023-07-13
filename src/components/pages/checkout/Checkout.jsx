import { Button, TextField } from "@mui/material";
import "./checkout.css";

export const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="cont1Check">
      <div className="transparencia"></div>
      <form className="contFormCheck" onSubmit={handleSubmit}>
        <h2>Rellene el siguiente formulario para completar su compra:</h2>
        <TextField
          className="inputCheck"
          label="Nombre"
          variant="outlined"
          name="name"
          color="secondary"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          className="inputCheck"
          label="Email"
          variant="outlined"
          name="email"
          color="secondary"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          className="inputCheck"
          label="Repetir Email"
          variant="outlined"
          name="emailr"
          color="secondary"
          onChange={handleChange}
          helperText={errors.emailr}
          error={errors.emailr ? true : false}
        />
        <TextField
          className="inputCheck"
          label="Telefono"
          variant="outlined"
          name="phone"
          color="secondary"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button
          className="inputCheck"
          color="secondary"
          variant="outlined"
          type="submit"
        >
          Finalizar Compra
        </Button>
      </form>
    </div>
  );
};
