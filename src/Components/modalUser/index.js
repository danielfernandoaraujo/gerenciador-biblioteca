import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { reload } from 'firebase/auth';

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const [User, setUser] = React.useState('')
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const armazenar = (chave, valor) => {
      localStorage.setItem(chave, valor)
  }

  const handleClose = () => {
    setOpen(false)
    window.location.reload()
    armazenar('nome' , User)
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}  style={{textAlign:"center"}}>
        <DialogTitle style={{ fontWeight: 'bold' ,fontSize: '25px', color: '#2154bf'}}> Seja bem vindo a biblioteca!</DialogTitle>
        <DialogContent>
          <DialogContentText style={{fontSize: '20px', }}>
            É um prazer imenso em te receber, espero que esse sistema possa te ajudar bastante!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Qual seu nome?"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => setUser(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
