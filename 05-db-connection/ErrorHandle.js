import * as z from "zod";

const ErrorHandle = (err, req, res, next) => {
    console.log('err =',err.message);
    if (err instanceof z.ZodError){
        return res.status(400).json({errorMsg : "Bad Request" , issues: err.issues});
    }
    res.status(500).json({error: err?.message || 'Somthing went wrong'});
}

export default  ErrorHandle;