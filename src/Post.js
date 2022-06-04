import { Avatar } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from'@material-ui/icons/Publish'
import RepeatIcon  from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import React from 'react'
import './Post.css'

function Post({
    displayName,userName,verified,text,image,avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName}{" "}<span className='post__headerSpecial'>
                            { verified && <VerifiedUserIcon className="post__badge"/>}
                            @{userName}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
                <img src={image} alt=''/>
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontsize="small"/>
                    <RepeatIcon fontsize=""small/>
                    <FavoriteBorderIcon fontsize="small"/>
                    <PublishIcon fontsize="small"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post