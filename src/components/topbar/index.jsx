import './style.css';
import {Button} from "@mui/material";

export default function TopBar () {
    const url = window.location.pathname;
    return (
        <div className="topbar">
            <Button variant={url === '/' ? 'contained' : 'text'} href={'/'}>Início</Button>
            <Button variant={url === '/products' ? 'contained' : 'text'} href={'/products'}>Produtos</Button>
        </div>
    )
}