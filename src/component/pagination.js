import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function BasicPagination() {
    const { totalItem } = useSelector(state => state.state)
    return (
        <Stack spacing={2}>
            <Pagination count={10} />
        </Stack>
    );
}