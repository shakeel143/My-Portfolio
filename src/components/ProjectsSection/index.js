import {Component} from 'react'
import './index.css'

class ProjectsSection extends Component {
  state = {
    projects: [],
    isLoading: true,
    error: null,
  }

  componentDidMount() {
    this.fetchProjects()
  }

  fetchProjects = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/users/shakeel143/repos',
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      this.setState({projects: data, isLoading: false})
    } catch (error) {
      this.setState({error: error.message, isLoading: false})
    }
  }

  renderProjects = () => {
    const {projects} = this.state
    return projects.map(project => {
      const {id, name, html_url, description} = project
      return (
        <div key={id} className="project-card">
          <h2>{name}</h2>
          <p>{description || 'No description available'}</p>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <button className="view-button">View Project</button>
          </a>
        </div>
      )
    })
  }

  render() {
    const {isLoading, error} = this.state

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <div className="projects-section">
        <h1>My Work</h1>
        <div className="projects-container">{this.renderProjects()}</div>
      </div>
    )
  }
}

export default ProjectsSection
