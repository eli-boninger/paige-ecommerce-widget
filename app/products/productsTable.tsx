import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";
import Link from "next/link";
import { Product } from "@/models/product";

interface Props {
  products: Product[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.black,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const ProductsTable = (props: Props) => {
  const { products } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <strong>Name</strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              <strong>Color</strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              <strong>Type</strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              <strong>Cost</strong>
            </StyledTableCell>
            <StyledTableCell align="center">
              <strong>Actions</strong>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow
              key={product.sku}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="center">{product.color}</StyledTableCell>
              <StyledTableCell align="center">{product.type}</StyledTableCell>
              <StyledTableCell align="center">
                ${(Math.round(product.price * 100) / 100).toFixed(2)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <StyledLink href={`products/${product.sku}`}>EDIT</StyledLink>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
