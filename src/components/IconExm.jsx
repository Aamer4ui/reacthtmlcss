import React from "react";
import {Button} from "react-bootstrap"
import HomeIcon from "@material-ui/icons/Home"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GpsFixedRoundedIcon from '@material-ui/icons/GpsFixedRounded';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';
import AccessAlarmTwoToneIcon from '@material-ui/icons/AccessAlarmTwoTone';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import GetAppIcon from '@material-ui/icons/GetApp';

export const IconExm = () => {
  return (
    <div className="App">
      <HomeIcon />
      <HomeIcon color="primary" />{' '}
      <HomeIcon color="secondary" fontSize="large" />{' '}
      <HomeIcon color="action"  />{' '}
      <HomeIcon color="disabled" />{' '} <br/>
      <h2><strong><u>Social Icon's</u></strong></h2>
      <InstagramIcon color="secondary"></InstagramIcon>{' '}
      <FacebookIcon color="primary"></FacebookIcon>{' '}
      <WhatsAppIcon style={{ color: green[500] }}></WhatsAppIcon>{' '}
      <TwitterIcon color="primary"></TwitterIcon> {' '}
      <YouTubeIcon color="secondary"></YouTubeIcon>
      <TelegramIcon color="primary"></TelegramIcon> <br/> <br/>
      
      
      
      <h2 color="primary"><strong > <u>Rounded Icon's </u></strong></h2>
      <GpsFixedRoundedIcon fontSize="large"></GpsFixedRoundedIcon> {' '}
      <HeadsetRoundedIcon color="primary" fontSize="large"></HeadsetRoundedIcon> {' '}
      <GroupRoundedIcon fontSize="large"></GroupRoundedIcon> <br/> <br/>
      
      
      <h2> <strong> <u>Two Tone</u> </strong></h2>
      <AddPhotoAlternateTwoToneIcon fontSize="large"></AddPhotoAlternateTwoToneIcon> {' '}
      <AccessAlarmTwoToneIcon fontSize="large"></AccessAlarmTwoToneIcon> <br/> <br/>
      
      
      <h2><strong><u>Outline Icon's</u></strong></h2>
      <AccountCircleOutlinedIcon fontSize="large" color="primary"></AccountCircleOutlinedIcon>
      <FolderOpenOutlinedIcon fontSize="large"></FolderOpenOutlinedIcon>
      <MailOutlineIcon color="secondary" fontSize="large"></MailOutlineIcon> <br/><br/>
      
      
      <h2><strong><u>Filled Icon's</u></strong></h2>
      <StarIcon></StarIcon>
      <StarIcon></StarIcon>
      <StarIcon></StarIcon>
      <StarBorderIcon></StarBorderIcon>
      <StarBorderIcon></StarBorderIcon> <br/><br/>
      
      
      <h2><strong><u>Icon Above The Button </u></strong></h2>
      <Button variant="primary" size="lg"> <GetAppIcon fontSize="large"></GetAppIcon></Button> <br/> <br/>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis labore quia qui necessitatibus illo atque a exercitationem facere laboriosam.</h1>

    </div>
  )
}
