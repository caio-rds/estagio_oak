import TopBar from "../topbar";
import {Avatar, Box, Button} from "@mui/material";



export default function HomePage () {

    const open_page = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className={'App'}>
            <TopBar />
            <Box sx={{marginTop: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column',
            alignItems: 'center'}}>
                <h3>Olá, esse é o sistema de gerenciamento de produtos.</h3>

                <Box columnGap={10} display={'flex'} flexDirection='column' rowGap='10px'
                     sx={{backgroundColor: '#1c1c1f', padding: '20px', width: '300px', borderRadius: '8px',
                         boxShadow: '5px 5px 20px 0px #000000'}}>
                    <Avatar
                        sx={{width: '150px', height: '150px', margin: 'auto'}}
                        alt="Remy Sharp"
                        src='me.png' />
                    <h3 style={{marginBlockStart: '0px', marginBlockEnd: '0px'}}>Caio Reis</h3>
                    <p style={{marginBlockStart: '0px', marginBlockEnd: '10px'}}>caiodtn@gmail.com</p>
                    <Button variant='contained' onClick={
                        () => open_page('https://www.linkedin.com/in/caio-reis-04224a20a/')
                    }>Linkedin</Button>
                    <Button variant='contained' onClick={
                        () => open_page('https://github.com/caio-rds')
                    }>Github</Button>
                    <Button variant='contained' onClick={
                        () => open_page('https://caioreis.vercel.app/')
                    }>Meu Site</Button>
                </Box>
            </Box>
        </div>
    )
}