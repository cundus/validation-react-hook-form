import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, SubmitErrorHandler, SubmitHandler } from "react-hook-form";

import useProductValidation, {
   ITestForm,
} from "./lib/hooks/validation/useProductValidation";

const App = () => {
   const { reset, control, handleSubmit } = useProductValidation();

   const submitHandler: SubmitHandler<ITestForm> = (data) => {
      alert(JSON.stringify(data, null, 2));
      reset();
   };

   const handleSubmitError: SubmitErrorHandler<ITestForm> = (data) => {
      alert("error" + JSON.stringify(data, null, 2));
   };

   return (
      <Box width={"100%"}>
         <form onSubmit={handleSubmit(submitHandler, handleSubmitError)}>
            <Box
               width={"40%"}
               mx={"auto"}
               display={"flex"}
               flexDirection={"column"}
            >
               <Typography variant="h3" textAlign={"center"}>
                  FORM
               </Typography>

               <Controller
                  control={control}
                  name="input"
                  render={({ field, fieldState }) => (
                     <TextField
                        placeholder="Input"
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Controller
                  control={control}
                  name="nama_produk"
                  render={({ field, fieldState }) => (
                     <TextField
                        placeholder="Nama Product"
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Controller
                  control={control}
                  name="harga"
                  render={({ field, fieldState }) => (
                     <TextField
                        placeholder="Harga"
                        type="number"
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Controller
                  control={control}
                  name="phone"
                  render={({ field, fieldState }) => (
                     <TextField
                        placeholder="Phone"
                        type="tel"
                        {...field}
                        onChange={(e) =>
                           field.onChange(e.target.value.replace(/\D/g, ""))
                        }
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Button type="submit">Submit</Button>
            </Box>
         </form>
      </Box>
   );
};

export default App;
