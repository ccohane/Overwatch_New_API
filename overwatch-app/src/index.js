import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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
                <ProfilePlayers />
                <Stats />
            </div>
        )
    }

}

class Stats extends React.Component {
    constructor(){
        super(props);
        this.state = {
            
        };
    }
    /**
     * What goes in the navbar
     * Schedule
     * Players
     * Teams
     * Analysis of old 
     */
    getPlayerStats(){
        const json = null;
        const overwatch = require('overwatch-api');
 
        const platform = 'pc';
        const region = 'us';
        const tag = 'Calvin-1337';


        overwatch.getStats(platform, region, tag, (err, json) => {
            if (err) {console.error(err);}

            else{ console.log(json);
                json=json;
            }
        }); 
    }

    render(){
        return(
            <div>
                {json}
            </div>
        )
    }

}

class ProfilePlayers extends React.Component {
    /**
     * calls api to get info on players
     */
    constructor(props){
        super(props);
        this.state = {
            username: null,
            portrait: null,
            quickplayWins: null,
            quickplayPlayed: null,
            playtime: null,
            competitiveRank: null,
            rank_img: null,
            levelFrame: null,
            star: null,
        };
    }

    
    getProfileForPlayer(){
        let overwatch = require('overwatch-api');
        let platform = 'pc';
        let region = 'us';
        let tag = 'Calvin-1337';


        overwatch.getProfile(platform, region, tag, (err, json) => {
            if (err){
                 console.error(err);
                }
            else {
                this.setState({
                    username: json.username,
                    portrait:json.level,
                    quickplayWins:json.games.quickplay.won,
                    quickplayPlayed:json.games.quickplay.played,
                    playtime:json.playtime.quickplay,
                    playtimeCompetitive:json.playtime.competitive,
                    competitiveRank: json.competitive.rank,
                    rank_img : json.competitive.rank_img,
                    levelFrame : json.levelFrame,
                    star: json.star,
                })
                console.log(json);
          }
        }); 
    }
        
    render(){
        <div className="playerData">
            <img src={this.state.portrait}></img>
            <h3>{this.state.username}</h3>
            <ul>
                <li> Quickplay Wins: {this.state.quickplayWins}</li>
                <li> Quickplay Played: {this.state.quickplayPlayed}</li>
                <li> Quickplay Play Time: {this.state.playtime}</li>
                <li> Competitive Play Time {this.state.playtimeCompetitive}</li> 
            </ul>
        
        </div>
    }
    
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
    getSchedule(){
        const overwatch = require('overwatch-api');
        overwatch.owl.getSchedule((err,json)=> {
            if (err) console.log(err);
            else console.log(json);
        })
    }
}

class Standings extends React.Component {
    /**
     * calls api to get info on Schedule
     */
    getStandings(){
        const overwatch = require('overwatch-api');
        overwatch.owl.getStandings((err,json)=> {
            if (err) console.log(err);
            else console.log(json);
        });
    }
}

class LiveMatchData extends React.Component {
    
    liveMatchStats(){
        const overwatch = require('overwatch-api');

        overwatch.owl.getLiveMatch((err,json)=> {
            if (err) console.log(err);
            else console.log(json);
        })
    }
}


ReactDOM.render(<Navbar />, document.getElementById('root'));

