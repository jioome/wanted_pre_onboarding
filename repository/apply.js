const { db } = require('../models');


const createApply = async (inputApply) => {
    let applyData = {
        position: inputApply.position,
        compensationMoney: inputApply.compensationMoney,
        applyContent: inputApply.applyContent,
        skill: inputApply.skill
    }
    // console.log(createApplyData);
    const createApplyResult = await db.Apply.create(applyData, { raw: true });
    return createApplyResult;
}


const readAllApply = async (position, compensationMoney, applyContent, skill) => {
    const where = {};
    const applyData = {
        position: position,
        compensationMoney: compensationMoney,
        applyContent: applyContent,
        skill: skill

    }

    if (position) {
        where.position = {
            [db.Sequelize.Op.like]: `%${applyData.position}%`
        }
    }
    if (compensationMoney) {
        where.compensationMoney = {
            [db.Sequelize.Op.like]: `%${applyData.compensationMoney}%`
        }
    }

    if (applyContent) {
        where.applyContent = {
            [db.Sequelize.Op.like]: `%${applyData.applyContent}%`
        }
    }
    if (skill) {
        where.skill = {
            [db.Sequelize.Op.like]: `%${applyData.skill}%`
        }
    }


    const allApplyData = await db.Apply.findAll({ where, raw: true });

    return allApplyData;
}


const readApply = async (id) => {
    const where = { applyId: id };
    const findApply = await db.Apply.findOne({ where, raw: true });
    console.log(findApply);
    return findApply;
}

const updateApply = async (id, inputApplyData) => {

    const result = await db.sequelize.transaction(async (t) => {
        const findApply = await db.Apply.findOne({ where: { applyId: id }, raw: true }, { transaction: t });
        const updateApplyData = await db.Apply.update(inputApplyData,
            {
                where: { applyId: id },
                raw: true,
                returning: true
            }, {
            transaction: t
        });
        return updateApplyData[1];
    });
    return result;
}

const deleteApply = async (id) => {
    const result = await db.sequelize.transaction(async (t) => {
        const deleteData = await db.Apply.destroy({
            where: { applyId: id },
            raw: true
        }, {
            transaction: t
        });
        return deleteData;
    });
    return result;
}

module.exports = {
    createApply,
    readAllApply,
    readApply,
    updateApply,
    deleteApply
}