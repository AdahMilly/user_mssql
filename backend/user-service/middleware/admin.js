module.exports = (req, res, next) => {
    try {
       if(req.user.role !== "admin"){
       return res.status(403).json({message: "Access Denied"})
       }
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
}
