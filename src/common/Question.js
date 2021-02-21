import "../resources/sass/Question.scss";
import Tile from "./Tile";
import Tag from "./Tag";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserData, getUserQuestions, getUserTopTags } from "../actions/ActionCreators";

const modifideFUllDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const month = months[date.getMonth()];
    const dateNumber = date.getDate();

    return `${month + " " + dateNumber + " at " + hours + ":" + minutes}`;
}

const Question = ({ questionData, getUserData, getUserQuestions, getUserTopTags, showDisplayName = true }) => {
    
    const {
        view_count: viewCount,
        answer_count: ansCount,
        up_vote_count: voteCount = 0,
        title,
        bounty_amount: bountyAmount = 0,
        last_edit_date: modifiedDate,
        tags,
        owner: { display_name: displayName, user_id: userId }
    } = questionData;

    const onUserClick = (userId) => {
        getUserData(userId);
        getUserTopTags(userId);
        getUserQuestions(userId);
    }

    return (
        <div className="questionContainer">
            <div className="leftContainer">
                <Tile text="votes" value={`${voteCount}`} />
                <Tile text="answers" value={`${ansCount}`} />
                <Tile text="views" value={`${viewCount}`} />
            </div>
            <div className="rightContainer">
                <div className="questionHeader">
                    <span className="reputation" title={`this question has an open bounty worth ${bountyAmount} reputation`}> {`+${bountyAmount}`} </span>
                    <span className="queTitle"> {title} </span>
                </div>
                <div className="summary">
                    <div className="tagsContainer">{tags.map((tag, ind) => <Tag value={tag} key={ind} />)} </div>
                    <div className="timeAndUserName">
                        {modifiedDate && <span> {`modified on ${modifideFUllDate(modifiedDate)}`} </span>}
                        {showDisplayName && displayName &&
                            <Link to="/user-page" onClick={onUserClick.bind(this, userId)}>
                                <span className="userName"> {displayName} </span>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>)
}

export default connect(null, { getUserData, getUserQuestions, getUserTopTags })(Question);