import authService from "../services/auth.service.js";
const authController = {
    register: async (req, res) =>{
        try {
            const {name, password} = req.body;
            if(
                !name ||
                !password
            ){
                return res.status(400).json('params required')
            }
            const response = await authService.registerService({name, password});
            res.status(201).json({message: response})
        } catch (error) {
            res.status(400).json({message: error.message || error})
        }
    }
}

export default authController;