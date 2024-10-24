const Item = require("../models/itemModel");

exports.createItem = async (req, res) => {
  const { name, quantity, description } = req.body;
  const newItem = new Item({ name, quantity, description });

  try {
      const savedItem = await newItem.save();
      res.status(200).json(savedItem);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

exports.getAllItem = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
