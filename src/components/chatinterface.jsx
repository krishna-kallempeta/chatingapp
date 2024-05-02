import House from '../assets/house.jpg'
import Circleplus from '../assets/circle-plus.png'
import stars from '../assets/stars.jpg'
import laughing from '../assets/loughing-icon.png'
import questionmark from '../assets/thinking-face.png'
import mic from '../assets/mic-icon.png'
import share from '../assets/share.webp'
function ChatInterface(){
    return(
        <>
        <div>
            <div className="msgs">
                <p className="msg">ok na dsjfl jo</p>
                 <p className="msg">oh, and i heard they revamped the snow white ride to add new magic we have to see it</p>
            </div>
            <div className="sendmsgs">
                <p className="sendmsg">Absolutely. Let's finalize out plans this week. Aday  of Disney magic is just what we need!</p>
                <p className="sendmsg">Can't wait .Richard! lelj olrjflj ljlmf o</p>
            </div>
            
            <p className="lastmsg">oh, and i heard new magic we have to see it</p>
            <img className='houseimg' src={House} alt="" />
           
            <input className='chatinput' type="text" placeholder='Enter the message here' />
            <div className='actionicons'>
                <img className='icon' src={Circleplus} alt="" />
                <div className='icons'>
                    <img className='icon' src={stars} alt="" />
                    <img className='icon' src={laughing} alt="" />
                    <img className='icon' src={questionmark} alt="" />
                    <img className='icon' src={mic} alt="" />
                    <img className='icon' src={share} alt="" />
                  
                  
                </div>
            </div>
        </div>
        </>
    )
}
export default ChatInterface;