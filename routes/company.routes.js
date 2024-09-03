import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controller/companyController.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/getCompany").get(isAuthenticated, getCompany);
router.route("/register").post(isAuthenticated, registerCompany);
router.route("/getSingleCompany/:id").get(isAuthenticated, getCompanyById);
router
  .route("/updateCompany/:id")
  .put(isAuthenticated, singleUpload, updateCompany);

export default router;
