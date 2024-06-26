import {Alert} from "@mui/material";

export default function GenericError({title = '', message = ''}) {
    return (
        <Alert severity="error">Esta é uma mensagem de erro!</Alert>
    );
}