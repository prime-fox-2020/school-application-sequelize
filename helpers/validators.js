class Validators{
    static validating(data){
        let errorMsg = [];
        let date = data.birth_date.split('-');

        if (data.first_name === '') {
            errorMsg.push('First Name is Empty!');
        }
        if (data.last_name === '') {
            errorMsg.push('Last Name is Empty!');
        }
        if (data.email === '') {
            errorMsg.push('Email is Empty!');
        }
        if (data.gender === undefined) {
            errorMsg.push('Gender is Empty!');
        }
        if (data.birth_date === '') {
            errorMsg.push('Birth Date is Empty!');
        } else {
            if (date[2] > 31) {
                errorMsg.push("DD isn't more than 31");
            }
            if (date[1] > 12) {
                errorMsg.push("Are u Have month more than 12?");
            } else {
                date[1] = require('./date').changeToWord(date[1]);
            }
            if (date[0] > 2020 || date[0] < 1900) {
                errorMsg.push("You can type this if u live in this century!")
            }
        }

        let birth_date = date.reverse().join(' ');

        return {errorMsg, birth_date}
    }
}

module.exports = Validators