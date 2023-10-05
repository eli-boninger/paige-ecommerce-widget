"use client";

import { Product } from "@/models/product";
import { InputAdornment, TextField, css } from "@mui/material";
import { useContext, useState } from "react";
import { ProductsContext, ProductsDispatchContext } from "../productsContext";
import styles from "./productForm.module.css";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  productSku: string;
  //   handleSubmit: (product: Product) => void;
}

const formClass = css({
  display: "flex",
  flexDirection: "column",
});

type FormData = Pick<Product, "name" | "description" | "color" | "price">;

export const ProductForm = (props: Props) => {
  const { productSku } = props;
  const router = useRouter();
  const products = useContext(ProductsContext);
  const dispatch = useContext(ProductsDispatchContext);
  const product = products.find((p) => p.sku === productSku)!;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch({ type: "changed", product: { ...product, ...data } });
    router.push("/products");
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      noValidate
    >
      <TextField
        label="Name"
        defaultValue={product.name}
        error={!!errors.name}
        helperText={
          (errors.name?.type === "required" && "Name is a required field") ||
          (errors.name?.type === "maxLength" &&
            "Name must not be more than 56 characters long")
        }
        inputProps={{ ...register("name", { required: true, maxLength: 56 }) }}
      />
      <TextField
        label="Description"
        required
        defaultValue={product.description}
        error={!!errors.description}
        helperText={
          (errors.description?.type === "required" &&
            "Description is a required field") ||
          (errors.description?.type === "maxLength" &&
            "Description must not be more than 56 characters long")
        }
        inputProps={{
          ...register("description", { required: true, maxLength: 56 }),
        }}
      />
      <TextField
        label="Color"
        required
        defaultValue={product.color}
        error={!!errors.color}
        helperText={
          (errors.color?.type === "required" && "Color is a required field") ||
          (errors.color?.type === "maxLength" &&
            "Color must not be more than 56 characters long")
        }
        inputProps={{ ...register("color", { required: true, maxLength: 56 }) }}
      />
      <TextField
        label="Price"
        defaultValue={product.price}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9.]*",
          ...register("price", { required: true, min: 0 }),
        }}
        required
        error={!!errors.price}
        helperText={
          (errors.price?.type === "required" && "Price is a required field") ||
          (errors.price?.type === "min" && "Price must be greater than zero")
        }
      />
      <button type="submit">Submit form</button>
    </form>
  );
};
