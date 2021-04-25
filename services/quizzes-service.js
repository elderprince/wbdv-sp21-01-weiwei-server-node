const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qid) => {
    return quizzesDao.findQuizById(qid)
}

module.exports = {
    findAllQuizzes,
    findQuizById
}


// let quizzes = require('./quizzes.json')
//
// const findAllQuizzes = () => quizzes
//
// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId)
//
// module.exports = {
//     findAllQuizzes,
//     findQuizById
// }