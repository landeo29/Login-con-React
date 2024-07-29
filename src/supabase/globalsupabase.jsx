import { supabase} from "../index";

export const ObtenerIdAuthSupabase = async() =>{
    const {data:{session}} = await supabase.auth.getSession()
    if (session!=null){
        const {users} = session;
        const idAuthSupabase = user.id;
        return idAuthSupabase;
    }
}