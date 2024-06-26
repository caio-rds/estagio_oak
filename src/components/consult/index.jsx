import './style.css';
import TopBar from "../topbar";
import {Box, Button, TextField} from "@mui/material";
import Register from "../register";
import {useEffect, useState} from "react";
import DataTable from "../table";
import SearchIcon from '@mui/icons-material/Search';

export default function Consult () {

    const [filter, setFilter] = useState(''); 
    const [open, setOpen] = useState(false);
    const [openTable, setOpenTable] = useState(false);
    const [products, setProducts] = useState([]); // [ {name: 'product', price: 0, quantity: 0, id: 0}]
    const [selected, setSelected] = useState([]);


    useEffect(() => {
        let products = localStorage.getItem('products');
        if (products) {
            setProducts(JSON.parse(products))
        }
        let table = localStorage.getItem('openTable');
        if (table) {
            setOpenTable(true);
        }
    }, []);


    function handleOpen(status) {
        if (!status) {
            document.getElementsByClassName('App')[0].style.filter = 'blur(0px)';
        } else{
            document.getElementsByClassName('App')[0].style.filter = 'blur(5px)';
        }
        setOpen(status);
    }

    function updateProducts(product) {
        localStorage.setItem('products', JSON.stringify([...products, product]));
        setProducts([...products, product]);
    }

    function search() {
        let search_field = document.getElementById('product-name').value
        setFilter(search_field);
    }

    const clear_filter = (e) => {
        if (e.target.value === '') {
            setFilter('');
        }
    }

    const enter_search = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    const toggle_table = () => {
        if (!openTable) {
            localStorage.setItem('openTable', 'true')
        } else {
            localStorage.removeItem('openTable')
        }
        setOpenTable(!openTable);
    }

    const updateSelected = (ids) => {
        ids.map(id => id.toString());
        setSelected(ids);
    }

    const removeProducts = (all) => {
        if (all) {
            localStorage.removeItem('products');
            setProducts([]);
        } else {
            let new_products = products.filter(product => !selected.includes(product.id));
            localStorage.setItem('products', JSON.stringify(new_products));
            setProducts(new_products);
        }
    }

    return (
        <div className={'App'}>
            <TopBar />
            <Register open={open} setOpen={handleOpen} updateProducts={updateProducts} products={products} />
            <Box style={{display: 'flex', columnGap: '10px', marginTop: '40px'}}>
                <TextField type='search' required={true} id="product-name" label="Nome do produto" autoComplete={'off'}
                    variant={'standard'} onChange={clear_filter} onKeyDown={enter_search} />
                <Button id='consult' variant="contained" onClick={search} ><SearchIcon /></Button>
                <Button id='register' variant="contained" onClick={() => handleOpen(true)}>Registar</Button>
                <Button id='showTable' variant="contained" onClick={toggle_table}>{
                    openTable ? 'Fechar Tabela' : 'Abrir Tabela'
                }</Button>
            </Box>
            <DataTable products={products} filter={filter} show={openTable} setSelected={updateSelected} />
            <Box style={{display: openTable ? 'flex' : 'none', columnGap: '10px', marginTop: '10px'}}>
                <Button id='clear' variant="contained" onClick={() => removeProducts(false)}>
                    Remover Produto
                </Button>
                <Button id='clear' variant="contained" onClick={() => removeProducts(true)}>
                    Limpar Produtos
                </Button>
            </Box>

        </div>
    )
}