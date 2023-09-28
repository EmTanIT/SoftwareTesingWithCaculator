import express from 'express'
import fileUpload from 'express-fileupload';
const router = express.Router()

router.post('/testDateTimeWithPostman', fileUpload(), async (req, res) => {
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;

    res.json({
        day: day,
        month: month,
        year: year,
    })
})

export default router