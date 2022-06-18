import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { reload } from "firebase/auth";
import { ModalStyled } from "./styled";

export function ModalAviso() {
  const [open, setOpen] = React.useState(true);
  const [User, setUser] = React.useState("");
  const [Error, setError] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
    };

  return (
    <ModalStyled>
      <Dialog open={open} onClose={handleClose} style={{ textAlign: "center", borderRadius: '10px',}}>
        <DialogTitle
          style={{ fontWeight: "normal", fontSize: "30px", color: "#2154bf" }}
        >
          {" "}
          Seja bem vindo a biblioteca!
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: "18px", width: "100%" }}>
            É um prazer imenso em te receber, espero que esse sistema <br/> possa te
            ajudar!
          </DialogContentText>
          {/*Error ? (
            <TextField
              style={{ width: "100%" }}
              autoFocus
              autoComplete="off"
              margin="dense"
              id="name"
              label="Qual é o seu nome?"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setUser(e.target.value)}
            />
          ) : (
            <TextField
              style={{ width: "100%" }}
              autoFocus
              error
              autoComplete="off"
              margin="dense"
              id="name"
              label="Qual é o seu nome?"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setUser(e.target.value)}
            />
          )*/}
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className="btn"
            variant="contained"
            disableElevation
            size="large"
            onClick={handleClose}
            style={{
              margin: "10px",
              width: "100%",
              backgroundColor: "#2154bf",
            }}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </ModalStyled>
  );
}
