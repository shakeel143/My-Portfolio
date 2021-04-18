import {Component} from 'react'
import './index.css'

const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
    name: 'linkedIn',
    siteUrl:
      'https://pk.linkedin.com/in/shakeel-ahmed-b40b8791?trk=public_profile_browsemap',
  },
  {
    id: 1,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1000/1000777.png',
    name: 'Google Developer Program',
    siteUrl: 'https://developers.google.com/profile/u/shakeel_android',
  },
  {
    id: 2,
    imageUrl: 'https://cdn-icons-png.flaticon.com/128/3536/3536445.png',
    name: 'Whatsapp',
    siteUrl: 'https://wa.me/923073135966',
  },
  {
    id: 3,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3291/3291695.png',
    name: 'Github',
    siteUrl: 'https://github.com/shakeel143',
  },
  {
    id: 4,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/15398/15398410.png',
    name: 'Stackoverflow',
    siteUrl: 'https://stackoverflow.com/users/13787521/shakeel-ahmed',
  },
]

// Write your code here
class SocialMediaSection extends Component {
  displayMediaLinks = () => (
    <ul className="social-media-links">
      {socialMediaAppsData.map(data => {
        const {id, imageUrl, siteUrl} = data
        return (
          <li key={id}>
            <a href={siteUrl} target="_blank" rel="noreferrer">
              <img src={imageUrl} alt="mediaUrl" />
            </a>
          </li>
        )
      })}
    </ul>
  )

  render() {
    return <>{this.displayMediaLinks()}</>
  }
}

export default SocialMediaSection
