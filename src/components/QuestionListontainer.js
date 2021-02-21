import "../resources/sass/UserQueListContainer.scss";
import QuestionList from "../common/QuestionList";

const QuestionListontainer = ({showDisplayName}) => {
    return (
        <div className="userQuestionsContainer">
            <h2> Top Questions </h2>
            <QuestionList showDisplayName = {false}/>
        </div>
    );
}

export default QuestionListontainer;