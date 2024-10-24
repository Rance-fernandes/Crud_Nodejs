exports.validateItem = (req, res, next) => {
  const { name, quantity } = req.body;
  if (!name || !quantity) {
    return res
      .status(400)
      .json({ message: "name and quantity cannot be empty" });
  }
  if (typeof quantity !== "number") {
    return res.status(400).json({ message: "Quantity must be a number." });
  }
  next();
};
