import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface ITestForm {
   input: string;
   nama_produk: string;
   harga: number;
   phone?: string;
}

const TestFormSchema = yup.object({
   input: yup
      .string()
      .email("ini bukan email")
      .required("isi dong bos")
      .max(20, "jangan dilebih2in dong")
      .min(5, "kurang, tambah dikit lagi"),
   nama_produk: yup.string().required(),
   harga: yup.number().required(),
   phone: yup
      .string()
      .min(10, "Minimal nomor telepon adalah 10 digit")
      .max(13, "Maximal nomor telpon adalah 13 digit"),
});

const initialValues = {
   input: "",
   nama_produk: "",
   harga: 0,
   phone: "",
};

const useProductValidation = () => {
   return useForm<ITestForm>({
      defaultValues: initialValues,
      mode: "all",
      reValidateMode: "onBlur",
      resolver: yupResolver(TestFormSchema),
   });
};

export default useProductValidation;
