import jwt from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please login - token missing"
            });
            return;
        }
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (error) {
    }
};
