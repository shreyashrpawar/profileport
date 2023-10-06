const express = require("express");
const router = express.Router();
const { detailsUser } = require("../controllers/userController");
const { hostdetails } = require("../controllers/userController");
const { gethostingdata } = require("../controllers/userController");
const { updateData } = require("../controllers/userController");
const { gethosting } = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");

router.post("/gethostingdata", gethostingdata);
router.post("/updateData", updateData);

router.use(requireAuth);
router.post("/details", detailsUser);
router.post("/hostdetails", hostdetails);
router.post("/gethosting", gethosting);

module.exports = router;
