import profilePic from './assets/hoshi-profile-picture.jpg'
function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Hoshi</h2>
            <p className="card-text">I am a tiger and I dance</p>
        </div>
    );
}

export default Card