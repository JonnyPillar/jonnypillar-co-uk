import React from 'react';
import { createClient } from 'contentful';
import Page from '../Components/Page';
import Markup from '../Components/Markup';

class Now extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });

    client
      .getEntries({
        'fields.slug': this.props.match.path.substring(1),
        'content_type': 'page'
      })
      .then(response => {
        if (response.items.length > 0){
          this.setState({
            data: response.items[0].fields
          });
        }
      });
  }

  render() {
    if (!this.state.data) return null;

    return (
      <Page page="now" {...this.state.data}>
        <div className="jumbotron">
          <h1>{this.state.data.title}</h1>
          <h2>{'I\'m back home in Sheffield :)'}</h2>
        </div>
        <div className="markup-content">
          <Markup content={this.state.data.content} />
        </div>
      </Page>
    );
  }
}

export default Now;
