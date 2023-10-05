"use client";
import { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Product } from "@/models/product";
import { Button } from "@mui/material";
import Link from "next/link";
import { ProductsContext } from "./productsContext";

export default function ProductsPage() {
  const products = useContext(ProductsContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.sku}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.color}</TableCell>
              <TableCell align="right">{product.type}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="center">
                <Button>
                  <Link href={`products/${product.sku}`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
