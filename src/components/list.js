import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
    fontSize : "large",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CoinsList({coins}) {
  console.log(coins);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead> 
          <TableRow >
            <StyledTableCell><Typography variant='h5'><strong>Name</strong> </Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography variant='h5'><strong>Code</strong></Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography variant='h5'><strong>Today Value</strong></Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography variant='h5'><strong>Rank</strong></Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography variant='h5'><strong>Rate</strong></Typography></StyledTableCell>
            <StyledTableCell align="center"><Typography variant='h5'><strong>More Info</strong></Typography></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.code}</StyledTableCell>
              <StyledTableCell align="center">{row.delta.day}</StyledTableCell>
              <StyledTableCell align="center">{row.rank}</StyledTableCell>
              <StyledTableCell align="center">{row.rate}</StyledTableCell>
              <StyledTableCell align="center"><Button color='secondary'  variant="contained">more info</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}