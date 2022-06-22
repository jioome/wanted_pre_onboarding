const { apply: applyService } = require('../service');
var bodyParser = require('body-parser');


const createApply = async (req) => {
    console.log(1111);

    console.log("hihi", req.body);

    const setApply = await applyService.createApply(applyData);
    console.log(setApply);
    req.body = setApply;
    return setApply;
}

const readAllApply = async (req, next) => {
    console.log(req.request.query);
    const { position, compensationMoney, applyContent, skill } = req.request.query;

    const applyQueryData = {
        position, compensationMoney, applyContent, skill
    };
    const allApply = await applyService.readAllApply(applyQueryData);
    req.body = allApply;

}


const readApply = async (req, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        throw new Error('required id is only integer');
    }
    const read = await applyService.readApply(id);
    if (!read) {
        throw new Error('채용정보를 찾을수 없습니다.');
    }
    req.body = read;


}

const updateApply = async (req, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        throw new Error('required id is only integer');
    }
    const body = req.request.body;
    const applySet = await applyService.updateApply(id, body);

    if (applySet == 0) {
        req.status = 404;
        throw new Error('채용정보가 존재하지 않습니다.');
    }

    req.body = applySet;

};

const deleteApply = async (req) => {
    const id = req.params.id;
    if (isNaN(id)) {
        throw new Error('required id is only integer');
    }
    const deleteData = await applyService.deleteApply(id);
    if (deleteData == 0) {
        req.status = 404;
        throw new Error('채용정보가 존재하지 않습니다.');
    }
    req.body = { message: '채용정보 삭제가 완료 되었습니다.' };

}




module.exports = {
    createApply,
    readAllApply,
    readApply,
    updateApply,
    deleteApply,
}
