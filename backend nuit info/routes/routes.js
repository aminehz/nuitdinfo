const express = require("express");
const bodyParser = require("body-parser");
const UsersController = require("../controllers/UsersController");
const SolutionController = require("../controllers/SolutionController");
const QuizPageController = require("../controllers/QuizPageController");
const ChatBotMessageController = require("../controllers/ChatBotMessageController");

const router = express.Router();
router.use(bodyParser.json());

const usersControllerInstance = new UsersController();
const solutionControllerInstance = new SolutionController();
const quizPageControllerInstance = new QuizPageController();
const chatBotMessageControllerInstance = new ChatBotMessageController();

router.post("/addUsers", usersControllerInstance.createUser.bind(usersControllerInstance));
router.get("/getUsers", usersControllerInstance.getAllUsers.bind(usersControllerInstance));
router.put("/updateUsers/:id", usersControllerInstance.updateUser.bind(usersControllerInstance));
router.delete("/deleteUsers/:id", usersControllerInstance.deleteUser.bind(usersControllerInstance));

router.post("/addSolution", solutionControllerInstance.createSolution.bind(solutionControllerInstance));
router.get("/getSolution", solutionControllerInstance.getAllSolution.bind(solutionControllerInstance));
router.put("/updateSolution/:id", solutionControllerInstance.updateSolution.bind(solutionControllerInstance));
router.delete("/deleteSolution/:id", solutionControllerInstance.deleteSolution.bind(solutionControllerInstance));

router.post("/addQuizPage", quizPageControllerInstance.createQuizPage.bind(quizPageControllerInstance));
router.get("/getQuizPage", quizPageControllerInstance.getAllQuizPage.bind(quizPageControllerInstance));
router.put("/updateQuizPage/:id", quizPageControllerInstance.updateQuizPage.bind(quizPageControllerInstance));
router.delete("/deleteQuizPage/:id", quizPageControllerInstance.deleteQuizPage.bind(quizPageControllerInstance));

router.post("/addChatBotMessage", chatBotMessageControllerInstance.createChatBotMessage.bind(chatBotMessageControllerInstance));
router.get("/getChatBotMessage", chatBotMessageControllerInstance.getAllChatBotMessage.bind(chatBotMessageControllerInstance));
router.put("/updateChatBotMessage/:id", chatBotMessageControllerInstance.updateChatBotMessage.bind(chatBotMessageControllerInstance));
router.delete("/deleteChatBotMessage/:id", chatBotMessageControllerInstance.deleteChatBotMessage.bind(chatBotMessageControllerInstance));

module.exports = router;
