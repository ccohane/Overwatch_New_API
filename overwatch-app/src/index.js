import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const overwatch = require('overwatch-api');
 
const platform = 'pc';
const region = 'us';
const tag = 'Calvin-1337';
 
overwatch.getProfile(platform, region, tag, (err, json) => {
  if (err) console.error(err);
  else console.log(json);
}); 

overwatch.getStats(platform, region, tag, (err, json) => {
    if (err) console.error(err);
    else console.log(json);
}); 

overwatch.owl.getLiveMatch((err,json)=> {
    if (err) console.log(err);
    else console.log(json);

})


class Navbar extends React.Component {

    /**
     * What goes in the navbar
     * Schedule
     * Players
     * Teams
     * Analysis of old 
     */
    render(){
        return(
            <div>
                <h1>Overwatch App</h1>
            </div>
        )
    }

}

class Players extends React.Component {
    /**
     * calls api to get info on players
     */
}

class Teams extends React.Component {
    /**
     * calls api to get info on Teams
     */
}

class Schedule extends React.Component {
    /**
     * calls api to get info on Schedule
     */
}

ReactDOM.render(<Navbar />, document.getElementById('root'));

