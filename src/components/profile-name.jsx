import user from '../assets/userimg.jpg'
import writeimg from '../assets/writeimg.png'

function ProfileName(props){
    return(
        <>
        <div>
            <div className='flexbox'>
                <img className='user-icon' src={user} alt="" />
                <div>
                    <h2 className='name'>{props.name}</h2>
                    <p className='message'>{props.msg}</p>
                </div>
                <p>{props.time}</p>
            </div>
        </div>
        </>
    )
}
export default ProfileName