import writeimg from '../assets/writeimg.png'
import user from '../assets/userimg.jpg'
import ChatInterface from './chatinterface';
import ProfileName from './profile-name';
import I from '../assets/i-icon.png'
import messages from '../components/data'
function Sideber(props){
    return (
        <>
       
        
        <div > 
            <div className='chatbox'>
                <div className='navflex'>
                    <div className='chatflex'>
                       <h2>Chats</h2>
                       <img className='wirteicon'  src={writeimg} alt="" />
                    </div>
                    <div className='navber'>
                        <div className='onlineflex'>
                           <img className='user-icon' src={user} alt="" />
                           <div>
                               <h2 className='name'>krishna</h2>
                                <p className='message'>you dkfkjf</p>
                            </div>
                        </div>
                    <img className='i-icon' src={I} alt="" />
                    </div>
                </div>
                <div>
                    {
                        messages.map((data)=>{
                            return <ProfileName name={data.userName} msg={data.msg} time={data.time}/>
                        })
                    }
                </div>
            </div>
            <ChatInterface/>
           
            
        </div>
        
        </>
    )
}
export default Sideber;