import { supabase} from "../index";


export const InsertarUsuarios= async(p)=>{
    try{
        await supabase.from("usuarios").insert(p).select();
        return data;
    }catch(error){

    }
}