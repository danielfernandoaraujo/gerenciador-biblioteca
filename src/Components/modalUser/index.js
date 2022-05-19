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
  const [Error, setError] = React.useState(true)
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const armazenar = (chave, valor) => {
      localStorage.setItem(chave, valor)
  }

  const handleClose = () => {
    if( User == ''){
        setError(false)
    } else{
      setOpen(false)
      window.location.reload()
      armazenar('nome' , User)
    }
  };

  return (
    <form >
      <Dialog open={open} onClose={handleClose} style={{textAlign:"center"}}>
        <DialogTitle style={{ fontWeight: 'bold' ,fontSize: '30px', color: '#2154bf'}}> Seja bem vindo a biblioteca!</DialogTitle>
        <DialogContent  >
          <DialogContentText style={{fontSize: '20px', padding:"10px"}}>
            É um prazer imenso em te receber, espero que esse sistema possa te ajudar bastante!
          </DialogContentText>
            {Error ?
            <TextField style={{width: "80%"}}
              autoFocus
              autoComplete='off'
              margin="dense"
              id="name"
              label="Qual seu nome?"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setUser(e.target.value)} />
              : 
              <TextField style={{width: "80%"}}
              autoFocus
              error
              autoComplete='off'
              margin="dense"
              id="name"
              label="Qual seu nome?"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setUser(e.target.value)} />
            }
        </DialogContent>
        <DialogActions style={{display: "flex" ,alignItems:"center", justifyContent: "center" }}>
          <Button variant="contained"  disableElevation size="large" onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
