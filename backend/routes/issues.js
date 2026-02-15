const express = require("express");
const Issue = require("../models/Issue");
const {verifyToken,isAdmin} = require("../middleware/auth");

const router = express.Router();
const flow = ["OPEN","IN_PROGRESS","RESOLVED"];

router.post("/", verifyToken, async(req,res)=>{
  const issue = await Issue.create({
    title:req.body.title,
    description:req.body.description,
    createdBy:req.user.id
  });
  res.json(issue);
});

router.get("/", verifyToken, async(req,res)=>{
  if(req.user.role==="ADMIN")
    res.json(await Issue.find().populate("createdBy"));
  else
    res.json(await Issue.find({createdBy:req.user.id}));
});

router.put("/:id/status", verifyToken, isAdmin, async(req,res)=>{
  const issue = await Issue.findById(req.params.id);

  const cur = flow.indexOf(issue.status);
  const next = flow.indexOf(req.body.status);

  if(next !== cur+1)
    return res.status(400).json({msg:"Invalid transition"});

  issue.status = req.body.status;
  await issue.save();
  res.json(issue);
});

module.exports = router;
