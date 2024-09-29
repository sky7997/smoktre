import userModel from "../models/userModel.js";

const register_controller = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const newUser = new userModel({
            fullname,
            email,
            password
        })
        await newUser.save()
        return res.json({
            success: true,
            message: "User registered successfully"
        })
    } catch (error) {
        console.log(error)
        return (
            res.json({
                success: false,
                message: "something went wrong"
            })
        )
    }
}

const login_controller = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.json({
                success: false,
                message: "Invalid credentials"
            });
        }

        return res.json({
            success: true,
            message: "Logged in successfully",
            userId: user._id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export { register_controller, login_controller };
