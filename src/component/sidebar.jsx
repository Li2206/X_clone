import Img1 from '../assets/Profile-Photo.png'
import Img2 from '../assets/Bookmarks.png'
import Img3 from '../assets/Explore.png'
import Img4 from '../assets/Group.png'
import Img5 from '../assets/Home-Fill.png'
import Img6 from '../assets/Lists.png'
import Img7 from '../assets/Messages.png'
import Img8 from '../assets/More.png'
import Img9 from '../assets/Notifications.png'
import Img10 from '../assets/Twitter.png'
import Img11 from '../assets/Profile.png'
import Img12 from '../assets/Profile-Photo.png'
function Side(){
   return (
   <div className="Sidebar">
            <div className="main-content">
                <div className='icone'>
                    <img src={Img10} alt="" className="side-image"/>
                    <img src={Img5} alt="" className="side-image"/>
                    <img src={Img3} alt="" className="side-image"/>
                    <img src={Img9} alt="" className="side-image"/>
                    <img src={Img7} alt="" className="side-image"/>
                    <img src={Img2} alt="" className="side-image"/>
                    <img src={Img6} alt="" className="side-image"/>
                    <img src={Img11} alt="" className="side-image"/>
                    <img src={Img8} alt="" className="side-image"/>
                </div>
                <div className='text'>
                    <span className="text-content" hidden = {true}>Twitter</span>
                    <span className="text-content">Home</span>
                    <span className="text-content">Explore</span>
                    <span className="text-content">Notifications</span>
                    <span className="text-content" id='txt'>Messages</span>
                    <span className="text-content" id='txt'>Bookmarks</span>
                    <span className="text-content" id='txt'>lists</span>
                    <span className="text-content" id='txt'>Profile</span>
                    <span className="text-content" id='txt'>More</span>
                </div>
                
            </div>
            <div className="sidbouton"><button className="bouton">Tweet</button></div>
            <div className="profile-content">
                <img src={Img1}alt="" className="profile" />
                <div className='name'>
                    <p className="profile-name">Bradeley Ortiz<img src="" alt="" /> </p>
                    <p className="user-name" font-size="8px">@Bradeley_ ...</p>
                </div> 
            </div>
       </div>)
}
export default Side