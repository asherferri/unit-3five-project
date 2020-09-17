import React from 'react'
import axios from 'axios'
import Header from './Header'
import EventList from './EventList'

import PropTypes from 'prop-types';
import PropsRoute from './PropsRoute';
import Event from './Event';

class Editor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      events: null,
    };
  }

  componentDidMount() {
    axios
      .get('/api/events.json')
      .then(response => this.setState({ events: response.data }))
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { events } = this.state
    if (events === null) return null

    const { match } = this.props;
    const eventId = match.params.id;
    const event = events.find(e => e.id === Number(eventId))

    return (
      <div>
        <Header />
        <EventList events={events} />
        {/* this next line makes it crap out */}
        <PropsRoute path="/events/:id" component={Event} event={event} />
      </div>
    );
  }
}

Editor.propTypes = {
    match: PropTypes.shape(),
};
  
Editor.defaultProps = {
    match: undefined,
};

export default Editor