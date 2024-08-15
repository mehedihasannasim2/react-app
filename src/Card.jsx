import profilePic from './assets/person.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'> Brooo </h2>
            <p className='card-text'> He likes to sleep, eat & chill. He doesn't care about life. </p>
        </div>
    )
}

export default Card