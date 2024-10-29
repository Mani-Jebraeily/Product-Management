import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useRegister=()=>{
    const mutationFn= ()=> api.post("auth/register",data)
      return useMutation({mutationFn})
}

export {useRegister}