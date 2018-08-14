import React from 'react';
import { createClient } from 'contentful';
import Page from '../Components/Page';
import ProjectsThumbs from '../Components/ProjectThumbs';
import Loading from '../Components/Loading';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        'content_type': 'project'
      })
      .then(response => {
        this.setState({
          projects: response.items
        });
      });
  }

  render() {
    if (!this.state.projects) {
      return <Loading />;
    }

    return (
      <Page
        page="projects"
        seoTitle="Projects"
        seoDescription="These are a few samples of some of my work from the past few year."
        seoKeywords="Jonny Pillar, Projects, Software Engineer">

        <div className="jumbotron">
          <h1>Projects</h1>
          <h2>These are a few projects I have worked on over the past few year.</h2>
        </div>
        <ProjectsThumbs projects={this.state.projects} />
      </Page>
    );
  }
}

export default Projects;
