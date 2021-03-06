import React from 'react';
import MyDate from './my-date';
import _ from 'underscore';



class SelectedEvents extends React.Component {
constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-xs-12 col-md-11" id="the-date">
      <nav>
        <h4>My Date</h4>
        <ul>
          { _.map(this.props.events, (event, id) => {
              return (
                <MyDate title={event.title} info={event.info} image={event.image} key={id} id={id} />
              );
            })
          }
        </ul>
       </nav>

      </div>
    );
  }
}

export default SelectedEvents;
