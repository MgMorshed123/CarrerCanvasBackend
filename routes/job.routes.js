import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controller/jobController.js";

const router = express.Router();

router.route("/postjob").post(isAuthenticated, postJob);
router.route("/getjob").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/getjobById/:id").get(isAuthenticated, getJobById);

export default router;
