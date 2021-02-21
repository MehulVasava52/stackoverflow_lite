import "../resources/sass/UserPage.scss";
import UserProfile from "./UserProfile";
import UserTagsContainer from "./UserTagsContainer";
import QuestionListontainer from "./QuestionListontainer";
import Loader from "../common/Loader";
import {connect} from "react-redux";

const UserPage = ({ isLoading }) => {
    return (isLoading ? <Loader /> :
        (<div className="userPageContainer">
            <UserProfile />
            <UserTagsContainer />
            <QuestionListontainer />
        </div>));
}

const mapStateToProps = ({isLoading}) => {
    return { isLoading }
}

export default connect(mapStateToProps)(UserPage);