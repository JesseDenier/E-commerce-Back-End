// The `/api/categories` endpoint
const router = require("express").Router();
const { Category, Product } = require("../../models");

// Finds all categories.
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets one category by its id.
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new category.
// TODO: Get this to not return an error even though it works.
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    /* req.body should look like this...
      {
        category_name: "Sports Equipment"
      }
    */
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates an existing category by its id.
// TODO: Make this work
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    /* req.body should look like this...
      {
        category_name: "Sports Equipment"
      }
    */
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a category by its id.
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
