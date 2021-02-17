// EXAMPLE
// import React, { Component } from 'react';
// import Event from './Event';

// class EventList extends Component {
//   render() {
//     return (
//       <ul className='EventList'>
//         {this.props.events.map((event) => (
//           <li key={event.id}>
//             <Event event={event} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default EventList;


// MINE
import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
        <ul className="EventList">
            {this.props.events.map(items =>
                <li key={items.id}>
                    <Event event={items} />
                </li>
            )}
        </ul>
    );
  }
}

export default EventList;