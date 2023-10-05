const express = require("express");
const router = express.Router();
const { detailsUser } = require("../controllers/userController");
const { hostdetails } = require("../controllers/userController");
const { gethostingdata } = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);
router.post("/details", detailsUser);
router.post("/hostdetails", hostdetails);
router.post("/gethostingdata", gethostingdata);

module.exports = router;
