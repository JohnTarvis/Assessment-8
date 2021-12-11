function addCommas(num) {
    let str = num.toString();
    let back = '';
    for(let i = 0; i < str.length; i++){
        if((str.length - i) % 3 === 0){
            back += ',';
        }
        back += str[i];
    }
    return back;
}

module.exports = addCommas;