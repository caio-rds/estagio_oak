import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#556cd6',

        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                checkboxSelection: {
                    borderColor: '#222',
                },

                sortIcon: {
                    color: '#222', // Substitua 'red' pela cor desejada
                },
                columnHeader: {
                    backgroundColor: '#f0f0f0',
                    color: '#000000',
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                        width: '100%',
                        textAlign: 'center !important'
                    },

                },
                root: {
                    '& .MuiDataGrid-cell': {
                        textAlign: 'center'
                    }
                },
            },
        },
    },
});

export default theme;