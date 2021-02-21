import "../resources/sass/UserTagsContainer.scss";
import {connect} from "react-redux";
import Tag from "../common/Tag";
const UserTagsContainer = ({topTags}) => {
    // Display only few tags
    const fewTopTags = topTags.slice(0, 6);
    return (
        <div className="userTagsContainer"> 
            <h2> Top Tags </h2>
            <div className="tagsContainer">
                {fewTopTags.map(({tag_name: tagName, question_score: queScore}, ind)=>(
                    <div key={ind}>
                        <Tag value ={tagName}/>
                        <span>Score: {queScore} </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = ({topTags}) => {return { topTags }};

export default connect(mapStateToProps)(UserTagsContainer);