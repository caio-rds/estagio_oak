import './style.css';
import {
    Alert,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";

import {useState} from "react";

export default function Register({open, setOpen, updateProducts, products}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [available, setAvailable] = useState('Sim');

    const handleSubmit = (e) => {
        e.preventDefault()

        setOpen(false);
        let new_id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        console.log(available)
        updateProducts({
            id: new_id,
            name: name,
            price: price,
            description: description,
            available: available
        });
        setName('');
        setPrice('');
        setDescription('');
        setAvailable('Sim');
    }


    // noinspection JSCheckFunctionSignatures
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableAutoFocus
        >
            <div className={'register'}>
                <form id={'registerForm'} onSubmit={(e) => handleSubmit(e)}>
                    <h1>Cadastrar Novo Produto</h1>
                    <div className={'firstSection'}>
                        <TextField
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete={'off'}
                            style={{width: '400px'}}
                            id="product-name" label="Nome do produto" variant="standard"/>
                        <TextField
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            size='small'
                            autoComplete={'off'}
                            type={'number'}
                            style={{width: '200px'}}
                            id="product-name" label="Preço do produto" variant="standard"/>

                    </div>
                    <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{width: '100%'}}
                        id="description"
                        label="Descrição do produto"
                        multiline
                        rows={4}
                        variant="standard"
                    />

                    <FormControl>
                        <FormLabel style={{color: '#fff', textAlign: 'center', fontSize: '22px'}}
                                   id="demo-row-radio-buttons-group-label">Disponível</FormLabel>
                        <RadioGroup
                            aria-required={true}
                            row
                            required
                            value={available}
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={
                                (e) => setAvailable(e.target.value)
                            }
                        >
                            <FormControlLabel checked={true}
                                value='Sim' style={{color: '#fff'}} control={<Radio/>} label="Sim"/>
                            <FormControlLabel
                                value='Não' style={{color: '#fff'}} control={<Radio/>} label="Não"/>
                        </RadioGroup>
                    </FormControl>
                    <Box columnGap='10px' display='flex'>
                        <Button variant="contained" type={'submit'}>Cadastrar</Button>
                        <Button variant="contained" onClick={() => setOpen(false)}>Fechar</Button>
                    </Box>
                </form>
            </div>
        </Modal>

    )
}