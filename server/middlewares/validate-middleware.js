// const validate = (schema) => async(req,res,next)=>{
//     try {
//         const parseBody = await schema.parseAsync(req.body);
//         req.body = parseBody;;
//         next();
//     } catch (error) {
//         res.status.send({message:error});
//     }
// }

// module.exports = validate;



const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill input Properly";
        const extraDetails = err.errors[0].message;
        // res.status(400).send({message});
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error);
        next(error) ;
    }
}

module.exports = validate;