import express from 'express'
import fileUpload from 'express-fileupload';
const router = express.Router()

router.post('/testDateTimeWithPostman', fileUpload(), async (req, res) => {
    const day = req.body.day;
    const month = req.body.month;
    const year = req.body.year;
    let actualValue;

    if(checkDateTime(day, month, year)){
        actualValue = true;
        res.json({
            actualValue: actualValue
        });
        return;
    }else{
        actualValue = false;
        res.json({
            actualValue: actualValue
        });
        return;
    }

    
})


function checkDateTime(d, m, y){
    if(checkDayEmpty(d) || checkDayFormat(d) || checkDayRange(d) || checkMonthEmpty(m) || checkMonthFormat(m) || checkMonthRange(m) || checkYearEmpty(y) || checkYearFormat(y) || checkYearRange(y)){
        return false;
    }
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
    return day < 1 && day > 31;
}

export function checkMonthRange(month) {
    return month <  1 && month > 12;
}

export function checkYearRange(year) {
    return year < 1000 && year > 3000;
}

// //check format

export function checkDayFormat(day) {    
    if(!isNaN(day)){//isNaN(text) -> true || isNaN(Number) -> false
        return (parseFloat(day) - parseInt(day) == 0) ? false : true; 
    }else return false;
}

export function checkMonthFormat(month) {    
    if(!isNaN(month)){
        return (parseFloat(month) - parseInt(month) == 0) ? false : true; 
    }else return false;
}

export function checkYearFormat(year) {    
    if(!isNaN(year)){
        return (parseFloat(year) - parseInt(year) == 0) ? false : true; 
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