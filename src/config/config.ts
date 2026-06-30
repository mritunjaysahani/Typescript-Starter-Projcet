import dotenv from "dotenv"
type serverConfig={
    PORT:number
}
 function loadEnv(){
    dotenv.config();
}
loadEnv();
export const serverconfig:serverConfig={
    PORT:Number(process.env.PORT) ||3001
}