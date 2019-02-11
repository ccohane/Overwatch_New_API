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
                <Players />
            </div>
        )
    }

}

class Players extends React.Component {
    /**
     * calls api to get info on players
     */
    getProfileForPlayer(){
        let username;
        let portrait;
        let quickplay;
        let playtime;
        let competitiveRank;
        let rank_img;
        let levelFrame;
        let star;



        overwatch.getProfile(platform, region, tag, (err, json) => {
            if (err){
                 console.error(err);
                }
            else {
                username=json.username;
                portrait=json.level;
                quickplayWins=json.games.quickplay.won;
                quickplayPlayed=json.games.quickplay.played;
                playtime=json.playtime.quickplay;
                competitiveRank;
                rank_img;
                levelFrame;
                star;
                console.log(json);
          }
        }); 
        
    render(){
        { username: 'Calvin',
  level: 861,
  portrait: 'https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000000EF7.png',
  games:
   { quickplay: { won: 647, played: undefined },
     competitive: { won: 15, lost: 12, draw: 0, played: 27 } },
  playtime: { quickplay: '129 hours', competitive: '5 hours' },
  competitive:
   { rank: 4416,
     rank_img: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-7.png' },
  levelFrame: 'https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x0250000000000974_Border.png',
  star: 'https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x0250000000000974_Rank.png' }
    }

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
}

ReactDOM.render(<Navbar />, document.getElementById('root'));

