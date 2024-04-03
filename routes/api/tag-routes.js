// The `/api/tags` endpoint
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// Gets all tags.
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets one tag by its id.
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new tag.
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    /* req.body should look like this...
      {
        tag_name: "sporty"
      }
    */
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates an existing tag by its id.
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    /* req.body should look like this...
      {
        tag_name: "sporty"
      }
    */
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a tag by its id.
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
