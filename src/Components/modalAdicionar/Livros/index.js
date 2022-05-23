import Typography from '@mui/material/Typography';

export default function LivroModal(){
    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar Livro
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </>
    )
}