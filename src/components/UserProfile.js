import { connect } from "react-redux";
import {BsDot} from "react-icons/bs";
import {FaLink} from "react-icons/fa";
import {TiLocation} from "react-icons/ti";
import "../resources/sass/UserProfile.scss";

const UserProfile = ({ userData }) => {
    const { profile_image: profileImg,
        reputation,
        display_name: displayName,
        website_url: websiteUrl,
        location,
        badge_counts : badgeCounts} = userData;
    
    return (
        <div className="userProfile">
            <div className="userProfileTitle">
                <h1> User Profile </h1>
            </div>
            <div className= "userDetails">
                <div className="userAvatarContainer">
                    <div className="imgContainer">
                        <img src={profileImg} />
                    </div>
                    <div>
                        <span className="reputation">{reputation}</span>
                        <span className="repoText">REPUTATION</span>
                    </div>
                    { badgeCounts &&
                        <div className="badgeContainer">
                            <div className="goldBadge badge"> <BsDot size="1.2rem"  /> <span> {badgeCounts.gold}</span> </div>
                            <div className="silverBadge badge"> <BsDot size="1.2rem"  /> <span>{badgeCounts.silver}  </span> </div>
                            <div className="bronzeBadge badge"> <BsDot size="1.2rem" /><span>  {badgeCounts.bronze} </span> </div>
                        </div>
                    }
                </div>
                <div className="userSummary">
                    <div className="userName"> <span> {displayName} </span> </div>
                    { location && <div className="location"> <TiLocation /><span> {location} </span> </div> }
                    { websiteUrl && <div className="websiteUrl"> <FaLink /><a target="blank" href={websiteUrl}>website</a></div> }
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = ({ userData }) => {
    return {
        userData
    };
}
export default connect(mapStateToProps)(UserProfile);