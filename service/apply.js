
const { apply: applyRepo } = require('../repository');



const createApply = async (inputApply) => {
    let applyData = {
        position: inputApply.position,
        compensationMoney: inputApply.compensationMoney,
        applyContent: inputApply.applyContent,
        skill: inputApply.skill
    }

    const result = await applyRepo.createApply(applyData);
    // console.log(result);
    return result;
}




const readAllApply = async (selectData) => {
    const { position, compensationMoney, applyContent, skill } = selectData;
    const allApply = await applyRepo.readAllApply(position, compensationMoney, applyContent, skill);
    return allApply;
}


const readApply = async (id) => {

    let index = parseInt(id);
    const findApply = await applyRepo.readApply(index);
    return findApply;

}

const updateApply = async (id, body) => {
    let index = parseInt(id);
    const updateResult = await applyRepo.updateApply(index, body);
    return updateResult;
};



const deleteApply = async (id) => {
    const index = parseInt(id);
    const result = await applyRepo.deleteApply(index);
    return result;

}




module.exports = {
    readAllApply,
    readApply,
    updateApply,
    deleteApply,
}
