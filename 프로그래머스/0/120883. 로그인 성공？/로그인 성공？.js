function solution(id_pw, db) {
    let result = 'fail';
    db.forEach((v) => {
        if (id_pw[0] === v[0]) {
            if (id_pw[1] === v[1]) { 
                result = 'login';
            } else {
                result = 'wrong pw';
            }
        }
    });
    return result;
}