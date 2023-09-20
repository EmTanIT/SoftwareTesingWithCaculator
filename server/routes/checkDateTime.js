import express from 'express'
import fileUpload from 'express-fileupload';
const router = express.Router()
import { BadRequest, ValidRequest } from '../common/reponses.js'

router.post('/', fileUpload(), async (req, res) => {//de post + fileUpload() thi moi xai body-form data dc vi bi loi multi-part
    //xai body raw 
    
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;

   //dùng isNaN(biến) để check xem biến đó có phải số k
    if(!day || !month || !year){
        res.json(BadRequest("Input data field must be filled"));
        return;
    }else if(isNaN(day)){
        res.json(BadRequest("Input data for Day is incorrect format!"));
        return;
    }else if(parseInt(day) < 1 || parseInt(day) > 31){
        res.json(BadRequest("Input data for Day is out of range!"))
        return;
    }else if(isNaN(month)){
        res.json(BadRequest("Input data for Month is incorrect format!"))
        return;
    }else if(parseInt(month) < 1 || parseInt(month) > 12){
        res.json(BadRequest("Input data for Month is out of range!"))
        return;
    }else if(isNaN(year)){
        res.json(BadRequest("Input data for Year is incorrect format!"))
        return;
    }else if(parseInt(year) < 1000 || parseInt(year) > 3000){
        res.json(BadRequest("Input data for Year is out of range!"))
        return;
    }
    
    if(checkDateTime(day, month, year)){
        res.json(ValidRequest(`${day}/${month}/${year} is correct date time!`))
        return;
    }else{
        res.json(BadRequest(`${day}/${month}/${year} is NOT correct date time!`))
        return;
    }

})


function checkDateTime(d, m, y){
    var max = 31;
	if(m == 4 || m == 6 || m == 9 || m == 11) max = 30;
	else{
		if(m == 2){
			if(y % 400 == 0 || ( y % 4 == 0 && y % 100 != 0)) max = 29; //check nam nhuan hay khong
			else max = 28;
		}
	}
	return d <= max;
}

export default router