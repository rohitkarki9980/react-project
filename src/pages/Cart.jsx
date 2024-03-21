import { Button, TableContainer, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import { BsTrash2 } from 'react-icons/bs';

const Cart = () => {
    const createData = (particulars, price, quantity, Total, Action) => {
        return {
            particulars,
            price,
            quantity,
            Total,
            Action
        };
    };

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, ''),
        createData('Ice cream sandwich', 237, 9.0, ''),
        createData('Eclair', 262, 16.0, ''),
        createData('Cupcake', 305, 3.7, ''),
        createData('Gingerbread', 356, 16.0, ''),
    ];

    return (
        <>
            <Box bgcolor={'primary'} p={5}>
                <Typography
                    variant="h3"
                    color="error"
                    textAlign="center"
                    fontWeight={'bold'}
                    sx={{
                        fontFamily: 'cursive',
                        color: red[400],
                        fontSize: '3rem',
                    }}
                >
                    Cart Items
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SN</TableCell>
                                <TableCell>Particulars</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,i) => (
                                <TableRow key={row.SN} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {i+1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.particulars}
                                    </TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.quantity}</TableCell>
                                    <TableCell align="right">{row.quantity * row.price}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="error"sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '5px',
                                        }}>
                                            Remove
                                            <BsTrash2 size={"16px"}/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default Cart;
