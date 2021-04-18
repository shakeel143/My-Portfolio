import {Component} from 'react'
import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'Android Native App Development',
  },
  {
    id: 1,
    name: 'Java',
  },
  {
    id: 2,
    name: 'Kotlin',
  },
  {
    id: 3,
    name: 'Python',
  },
  {
    id: 4,
    name: 'React Js',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource:
      'BS-IT from Shaheed Benazir Bhutto University Shaheed Benazirabad',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'Government Boys Degree College Sakrand',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Government Boys High School Sabu Rahu',
  },
]

class AboutSection extends Component {
  renderEducation = () =>
    educationData.map(data => {
      const {id, qualification, qualificationSource} = data
      return (
        <li key={id}>
          <p>{qualification}</p>
          <p>{qualificationSource}</p>
        </li>
      )
    })

  renderSkills = () =>
    skillsData.map(skill => {
      const {id, name} = skill
      return (
        <li className="list-item" key={id}>
          {name}
        </li>
      )
    })

  render() {
    return (
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age
        </p>
        <div className="about-details">
          <ul className="education">
            <h1>Education</h1>
            {this.renderEducation()}
          </ul>

          <ul className="skills">
            <h1>Skills</h1>
            {this.renderSkills()}
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutSection
