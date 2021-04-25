const questionsDao = require('../daos/questions-dao')

const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}

const findQuestionById = (qid) => {
    return questionsDao.findQuestionById(qid)
}

const findQuestionsForQuiz = (qid) => {
    return questionsDao.findQuestionsForQuiz(qid)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}


// let questions = require('./questions.json' )
//
// findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)
//
// module. exports = {
//     findQuestionsForQuiz
// }