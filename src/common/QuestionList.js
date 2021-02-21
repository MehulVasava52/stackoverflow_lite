import Question from "./Question";
import {connect} from "react-redux";

const QuestionList = ({questions, showDisplayName = true}) => {

    return (
        <div className="questionListContainer">
            {questions.map((question, index) => (
                <Question showDisplayName = {showDisplayName} questionData = {question} key={index}/>
            ))}
        </div>
    )
}

const mapStateToProps = ({questions}) => {
    return { questions };
}

export default connect(mapStateToProps)(QuestionList);