import ProfileImg1 from "../assets/Profile-Photo-1.png"
import ProfileImg2 from "../assets/Profile-Photo-2.png"
import ProfileImg3 from "../assets/Profile-Photo6.png"
import Img1 from "../assets/Vector.svg"
function Trends(){
    return(
        <>
        <div className="trends">
            <input type="search" placeholder="Search Twitter" className="input"/>
            <div className="trend_content">
                <aside><h1>Trends for you</h1><img src="" alt="" /></aside>
                <div>
                    <div className="trend-align">
                        <span>Trending in Turkey</span>
                        <span>...</span>
                    </div>
                    <p>#SQUID</p>
                    <span>2,006 Tweets</span>
                </div>
                <div>
                    <div className="trend-align">
                        <span>Trending in Turkey</span>
                        <span>...</span>
                    </div>
                    <p>#SQUID</p>
                    <span>2,006 Tweets</span>
                </div><div>
                    <div className="trend-align">
                        <span>Trending in Turkey</span>
                        <span>...</span>
                    </div>
                    <p>#SQUID</p>
                    <span>2,006 Tweets</span>
                </div>
                <div>
                    <div className="trend-align">
                        <span>Trending in Turkey</span>
                        <span>...</span>
                    </div>
                    <p>#SQUID</p>
                    <span>2,006 Tweets</span>
                </div>
                <a  href="#" className="show_more">show more</a> 
            </div>
            <div className="Who_to_follow">
                <h1>Who to follow</h1>
                <div className="follow">
                    <div className="follows">
                        <img src={ProfileImg3} alt="" className="img"/>
                        <div className="user">
                            <p>TheNewYorkTimes <img src={Img1} alt="" /></p>
                            <span>@nytimes</span>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="follow">
                    <div className="follows">
                        <img src={ProfileImg1} alt="" className="img" />
                        <div className="user">
                            <p>CNN<img src={Img1} alt="" /></p>
                            <span>@CNN</span>
                        </div>
                    </div>
                    
                    <button>Follow</button>
                </div>
                <div className="follow">
                    <div className="follows">
                        <img src={ProfileImg2} alt=""  className="img"/>
                        <div className="user">
                            <p>Twitter<img src={Img1} alt="" /></p>
                            <span>@twitter</span>
                        </div>
                    </div>
                    
                    <button>Follow</button>
                </div>
            <a  href="#" className="show_more">show more</a> 
            
            </div>
            <p className="lisence">Terms of Service Privacy Police Cooke policy <br /> Import Ads into More ...@2021 Twiiter.Inc</p> 
        </div>
        
        </>
        
    )
}
export default Trends