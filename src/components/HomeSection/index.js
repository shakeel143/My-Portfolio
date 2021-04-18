import React, {Component} from 'react'
import './index.css'

class HomeSection extends Component {
  handleResumeClick = () => {
    window.open(
      'https://drive.google.com/file/d/14jn3Ci4Rs6yV7aMECuEYnpmuKDeAtQ3j/view',
      '_blank',
    )
  }

  render() {
    return (
      <div className="home-container">
        <h1>Shakeel Ahmed</h1>
        <p>Android App Developer</p>
        <p className="skills">
          Welcome to my portfolio! I am a skilled developer with expertise in
          Android Native App Development, Java, Kotlin, Python, and React JS. I
          build high-performance applications, create elegant solutions, and
          develop dynamic user interfaces. Explore my work to see how these
          skills come together to drive impactful results.
        </p>
        <button
          className="resume-button"
          type="button"
          onClick={this.handleResumeClick}
        >
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection
