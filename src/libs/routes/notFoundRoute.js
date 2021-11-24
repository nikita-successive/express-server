export const notFound = (req,res)=>{
    res.status(400).json({ status:400,
    error: 'NOT FOUND',
    message: 'Invalid routes'
    });
}