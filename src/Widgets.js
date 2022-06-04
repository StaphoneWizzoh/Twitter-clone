import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"

function Widgets() {
  return (
    <div className='widgets'>
       <div className='widgets__input'>
         <SearchIcon className="widgets__searchIcon"/>
         <input placeholder='Search Twitter' type= "text"/>
         </div> 

         <div className='widgets__widgetContainer'>
           <h2> What's happening? </h2>
           <TwitterTweetEmbed tweetId={"66435484544546"}/>

           < TwitterTimelineEmbed sourceType='profile' screenName='mkuu_wizzoh' options={{ height: 400}}/>

           < TwitterShareButton url='https://google.com' options={{ text : " #google seems odd today " , via : "mkuu_wizzoh"}}/>
         </div>
    </div>
  )
}

export default Widgets