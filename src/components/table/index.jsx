import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useState} from "react";
import stringSimilarity from "string-similarity";
import {Box} from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', align: 'center', width: 80, headerAlign: 'center'},
    { field: 'name', headerName: 'Nome do Produto', width: 250, headerAlign: 'center'},
    { field: 'description', headerName: 'Descrição', width: 500, headerAlign: 'center'},
    { field: 'price', headerName: 'Preço', type: 'number', width: 160, headerAlign: 'center'},
    { field: 'available', headerName: 'Disponível', width: 170, headerAlign: 'center'},

];

export default function DataTable({products, filter, show, setSelected}) {
    const [filtered, setFiltered] = useState([]);
    function findSimilarContainingStrings(target, strings) {
        const containingStrings = strings.filter(str => str.toLowerCase().includes(target));

        return containingStrings.sort((a, b) => {
            const similarityA = stringSimilarity.compareTwoStrings(target, a);
            const similarityB = stringSimilarity.compareTwoStrings(target, b);
            return similarityB - similarityA;
        });
    }

    React.useEffect(() => {
        if (filter === '') {
            setFiltered(products);
        } else {
            let result = []
            let names = products.map(product => product.name);
            let similarNames = findSimilarContainingStrings(filter, names);
            similarNames.forEach(name => {
                products.forEach(product => {
                    if (product.name === name) {
                        result.push(product);
                    }
                });
            });
            setFiltered(result);
        }
    }, [filter, products]);

    const CustomNoRowsOverlay = () => {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
                Não há dados disponíveis.
            </Box>
        );
    };


    return (
        <Box>
            <DataGrid
                sx={{
                    marginTop: '30px',
                    width: 'fit-content',
                    minWidth: 'fit-content',
                    maxWidth: 'fit-content',
                    display: show ? 'flex' : 'none',
                    padding: '0px'
                }}
                rows={filtered}
                columns={columns}
                autoHeight={true}
                GridAlignment='center'
                disableColumnResize
                checkboxSelection={true}
                onRowSelectionModelChange={(rowSelectionModel) => {
                    setSelected(rowSelectionModel);
                }}
                components={{
                    NoRowsOverlay: CustomNoRowsOverlay,
                }}
                pageSizeOptions={[10]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}

            />
        </Box>
    );
}