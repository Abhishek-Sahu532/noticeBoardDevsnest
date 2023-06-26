const express = require('express');
const router = express.Router();
const notices = require('../models/boardModel')


//GET REQUEST
router.get('/api/notice', async (req, res) => {
  try {
    let boardNotices = await notices.findAll();
    return res.status(200).json({ data: boardNotices })
  } catch (e) {
    return res.status(500).send(e)
  }
})


router.get('/api/notice/:id', async (req, res) => {
  try {
    let notice = await notices.findOne({ where: { id: req.params.id } });
    if (!notice) {
      return res.status(404).send({
        err: 'Provide the correct ID'
      })
    }
    console.log(notice)
    return res.status(200).send(notice);
  } catch (e) {
    console.log(e)
    return res.status(500).send(e)
  }
})


//POST REQUEST
router.post('/api/notice', async (req, res) => {
  try {
    const { author, message } = req.body;
    if (!author || !message) {
      return res.status(400).json({
        err: 'Provide the details'
      })
    }
    let newNotice = await notices.create({
      author,
      message,
    });

    return res.status(201).send(newNotice)
  } catch (e) {
    return res.status(500).send(e)
  }
})


router.put('/api/notice/:id/like', async (req, res) => {
  try {
    let noticeID = await notices.findOne({ where: { id: req.params.id } });
    if (!noticeID) {
      return res.status(404).json({
        err: 'Provide the correct notice ID'
      })
    }
    console.log('????', noticeID.likes)
    let updatedNotice = await noticeID.update({
      likes: noticeID.likes + 1
    })
    console.log('updatedNotice>>>>', updatedNotice)
    return res.status(200).send(updatedNotice)
  } catch (e) {
    console.log(e)
    return res.status(500).send(e)
  }
})

module.exports = router;