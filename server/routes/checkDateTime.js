import express from 'express'
import fileUpload from 'express-fileupload';
const router = express.Router()


router.post('/', fileUpload(), async (req, res) => {//de post + fileUpload() thi moi xai body-form data dc vi bi loi multi-part
    //xai body raw 
    
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;

   //dùng isNaN(biến) để check xem biến đó có phải số k
    if(checkDayEmpty(day)){
        res.status(400).json("Input data field to Day must be filled !")
        return;
    }else if(!checkDayFormat(day)){
        res.status(400).json("Input data for Day is incorrect format !");
        return;
    }else if(!checkDayRange(day)){
        res.status(400).json("Input data for Day is out of range !");
        return;
    }else if(checkMonthEmpty(month)){
        res.status(400).json("Input data field to Month must be filled !")
        return;
    }else if(!checkMonthFormat(month)){
        res.status(400).json("Input data for Month is incorrect format !");
        return;
    }else if(!checkMonthRange(month)){
        res.status(400).json("Input data for Month is out of range !");
        return;
    }else if(checkYearEmpty(year)){
        res.status(400).json("Input data field to Year must be filled !")
        return;
    }else if(!checkYearFormat(year)){
        res.status(400).json("Input data for Year is incorrect format !");
        return;
    }else if(!checkYearRange(year)){
        res.status(400).json("Input data for Year is out of range !");
        return;
    }
    
    if(checkDateTime(day, month, year)){
        // res.json(ValidRequest(`${day}/${month}/${year} is correct date time!`))
        res.status(200).json(`${day}/${month}/${year} is correct date time !`)
        return;
    }else{
        // res.json(BadRequest(`${day}/${month}/${year} is NOT correct date time!`))
        res.status(400).json(`${day}/${month}/${year} is NOT correct date time !`)
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

//check range
export function checkDayRange(day) {
    return day >= 1 && day <= 31;
}

export function checkMonthRange(month) {
    return month >= 1 && month <= 12;
}

export function checkYearRange(year) {
    return year >= 1000 && year <= 3000;
}

// //check format

export function checkDayFormat(day) {    
    if(!isNaN(day)){//isNaN(text) -> true || isNaN(Number) -> false
        return (parseFloat(day) - parseInt(day) == 0) ? true : false; 
    }else return false;
}

export function checkMonthFormat(month) {    
    if(!isNaN(month)){
        return (parseFloat(month) - parseInt(month) == 0) ? true : false; 
    }else return false;
}

export function checkYearFormat(year) {    
    if(!isNaN(year)){
        return (parseFloat(year) - parseInt(year) == 0) ? true : false; 
    }else return false;
}
//check empty field
export function checkDayEmpty(day){
    return !day;
}

export function checkMonthEmpty(month){
    return !month;
}

export function checkYearEmpty(year){
    return !year;
}


export default router