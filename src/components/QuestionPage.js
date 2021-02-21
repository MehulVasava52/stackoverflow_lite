import {useEffect} from "react";
import QuestionList from "../common/QuestionList";
import {getQuestionList} from "../actions/ActionCreators";
import {connect} from "react-redux";
import Loader from "../common/Loader";
import "../resources/sass/QuestionPage.scss";

const QuestionPage = ({getQuestionList, questions, isLoading}) => {

    useEffect(()=> {
        getQuestionList();
    }, []);

    return (
        isLoading ? <Loader /> :
        <div className="questionPageContainer">
            <h1> Top Questions [Featured] </h1>
            <QuestionList />
        </div>
    )
};

const mapStateToProps = ({questions, isLoading}) => {
    return { questions, isLoading };
}

export default connect(mapStateToProps, {getQuestionList})(QuestionPage);