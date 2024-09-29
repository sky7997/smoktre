import userModel from "../models/userModel.js"

const add_address_controller = async (req, res) => {
    try {
        const { userId, address } = req.body
        const user = await userModel.findOne({ _id: userId })
        if (!user) {
            return (
                res.json({
                    success: false,
                    message: "user not found"
                })
            )
        }

        user.addresses.push(address);

        await user.save();

        return (
            res.json({
                success: true,
                message: "address added successfully"
            })
        )

    } catch (error) {
        console.log(error)
        console.log("something went wrong")
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

const get_addresses_controller = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await userModel.findOne({ _id: userId });
        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }

        return res.json({
            success: true,
            addresses: user.addresses
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};




export { add_address_controller, get_addresses_controller }