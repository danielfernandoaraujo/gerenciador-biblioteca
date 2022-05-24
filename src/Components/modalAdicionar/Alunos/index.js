import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Content } from './styled';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#0) 00000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  

export default function AlunoModal(){

    const [values, setValues] = React.useState({
        textmask: '(79) 9',
        numberformat: '1320',
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

     return (
     <Content>
                    <Typography id="modal-modal-title" variant="h5" component="h2" className='title'>
                    Adicionar Aluno
                    </Typography>
                    <div className='input'>
                        <div className='right'>
                            <TextField            
                              autoComplete='off'
                              id="standard-basic" 
                              label="Nome" 
                              variant="standard"
                            />
                            <TextField 
                              autoComplete='off'
                              id="standard-basic" 
                              label="Turma" 
                              variant="standard"
                            />
                        </div>
                        <div className='left'>
                            <Input
                              autoComplete='off'
                              value={values.textmask}
                              onChange={handleChange}
                              name="textmask"
                              id="formatted-text-mask-input"
                              inputComponent={TextMaskCustom}
                              placeholder="Telefone"
                            />
                            <TextField 
                              autoComplete='off'
                              id="standard-basic" 
                              label="Email" 
                              variant="standard"
                              type={"email"}
                            />
                        </div>
                    </div>
                    <Button
                    variant="contained" 
                    disableElevation 
                    className='btn'>
                        Confirmar
                    </Button>
     </Content>
     )
 }