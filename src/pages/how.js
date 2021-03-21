import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

/*
            <h2><Text></Text></h2>
            <p><Fader></Fader></p>
            <ol>
                <Fader>
                <li></li>
                </Fader>
            </ol>
*/
const styles = theme => ({
  root: {}
});

class How extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <article>
            <header>
              <h1><Text>How do our colony ships work?</Text></h1>
            </header>
            <h2><Text>Choosing a new planet</Text></h2>
            <p><Fader>Believe it or not, there was a time when we thought Earth was the only habitable planet! You, a citizen of United Mars, are living proof that humanity can not just survive but thrive on a seemingly barren rock. In past decades, researchers shown that planets like our own are common in the universe. In fact, more than half of stars have a planet our size!  How do we find good planets to live on?</Fader></p>
            <p><Fader>Finding planets where life could grow up from nothing is a still-unsolved problem. But finding planets like our own is much, much easier. As far back as fifty years ago, we could measure the light of faraway stars and watch for regular dimming of the star's brightness. From how much and how often the star dimmed, we could easily discover a possible planet, its size, and its distance from the star. As we mentioned in <Link to="/why">Why Colonize</Link>, few planets are just far enough from their stars to have an atmosphere that doesn't either boil itself away or boil the planet's inhabitants. Planets with a greenhouse atmosphere, like Venus, may be too hard to live on even for us. On Venus it snows metal and iron has the consistency of jelly. But we already live on a planet with no atmosphere! Rocky and cool planets are easy to find.</Fader></p>
            <p><Fader>The MoC's main worry isn't whether we can't find good planets, but whether too many probes find the same planet. None of our future colonists will be able to communicate easily with us or each other past the first few generations; they're separated by thousands of years of space and time. How will they know what planets not to colonize? Each launch will carry on board the list of planets known to be visited so far. But until a better scheme is found, many probes may simply visit the same planet and shut themselves off if they find someone already at home.</Fader></p>

            <h2><Text>Getting to our new planet</Text></h2>
            <p><Fader>Our probes travel to their destination at 0.2 times the speed of light - around 134 million miles an hour. That's enough to go from our planet to Earth in enough time to watch an AR show! How can they reach this speed? We send them into space using a laser sail.</Fader></p>
            <p><Fader>Light can travel through a vacuum, and though it has no mass, it has momentum. When we shine an extremely powerful laser onto our solar sail, some of that momentum is transferred into pushing the sail. Some cargo spacecraft in our own solar system get their light from the sun, but using only sunlight, our ships would move at less than 0.01% of the speed of light - that's nowhere near enough! Instead, we use powerful lasers - 100 gigawatts for ten minutes - to accelerate our craft.</Fader></p>
            <p><Fader>Laser propulsion was first seriously proposed a hundred years ago, but at the time, lasers powerful enough for interstellar travel were impossible to create. Yet as materials science and laser technology advanced, laser arrays grew cheaper and cheaper:</Fader></p>
            <ol>
                <Fader>
                <li>From 1990 to 2020, laser cost per watt halved every eighteen months.</li>
                <li>In the 2020s and 2030s, Earth-based governments developed megawatt-class laser weaponry for missile defence, slashing the cost of optics. </li>
                <li>In the 2040s to 2050s, laser cost per megawatt dropped another order of magnitude, as demand for space-based solar power drove mass production of lasers for efficient transmission. </li>
                </Fader>
            </ol>
            <p><Fader>Though researchers in the 2060s faced difficulties in uniting these lasers into one beam and dealing with waste heat, we swiftly overcame these challenges. Now, our base station costs less than the power transmission grid for a small city.</Fader></p>
            <p><Fader>Our planet's space-based solar panels mean that though our laser array takes 100 gigawatts of power for 10 minutes (Parkin) - as much as a whole city fifty years ago - it costs very little per shot. So we can afford to send multiple redundant ships to one planet, in case solar debris destroys one of them en route. And though it only takes one ship in theory to replicate across the universe, we can speed up the process of replication by sending probes to dozens or hundreds of planets, at far less than the cost of our array.</Fader></p>

            <h2><Text>Knowing what to build</Text></h2>
            <p><Fader>As big as the speed of our ship is, its size is just as tiny. We can send only about a gram of material to our planets using a solar sail - that's as much weight as a paperclip! But for our probe to make copies of itself, it has to know how to build not just its own parts, but the machines that make those parts, and so on and so on: it has to rebuild an entire industrial civilization from scratch! That's a lot of information. And worse, we can't just program all our colony's actions in advance. Our machine has to adapt to the planet it finds itself in. Is it cold or hot? Is the surface liquid or solid? How can one paperclip's worth of material know to do all that, when you or I couldn't build a probe from scratch in a hundred lifetimes?</Fader></p>
            <p><Fader>The answer to storage lies in DNA. One gram of DNA can store up to 215 petabytes of information if we used the whole gram. How much is that? One petabyte can store 250 million pages of text. If the average book has 215 pages, then we have 215 million books worth of text! We can store all of humanity's scientific and technological discoveries and our great works of art and still have plenty of room left over for our actual program. Until recently, loading and unloading data from DNA was prohibitively expensive. But recent order of magnitude cost reductions in DNA encoding mean most information can be stored in DNA, and only residual processing power needs to be in silicon to load information from DNA.</Fader></p>
            <p><Fader>But how could we possibly use that information? Even if we had every single piece of knowledge written down to build civilization, we couldn't learn more than a fraction of it before dying. We don't yet have human-level AI, but our general-purpose bots are more than sufficient to understand our text and act on it. Even five decades ago, an AI as intelligent as a cockroach could generate poetry; today, fish-level intelligence is more than enough for industrial manufacturing. And after a certain level of development, our colony can bring the first generation of humans to take over the jobs still too hard for robots.</Fader></p>

            <h2><Text>Self-replication</Text></h2>
            <p><Fader>Being able to build our components is hard enough: but how can we actually do it? . But for our probes to create probes of their own, they need to create extremely advanced components: Solar sails 400 atoms thick, computer parts which take an entire chip foundry to build. How can they do this without dragging an entire planet of industry with them? Past proposed probes could only replicate 70% of mass and none of the key bit like CPUs. But today, we've solved this problem. The answer is the same thing that's been curing your cancer and providing you with free food for the last three years: molecular nanotechnology.</Fader></p>
            <p><Fader>Our one gram of payload carries an entire nanofactory with it. Starting from just thirteen basic components, we can construct any functional electronic device, and use the resources we find on our destination planet to reproduce all the structures we find here on Mars: Chip fabrication, metals smelting, and eventually, the production of new lasers and sails. Using computing on the scale of DNA, we can build ever larger artificial intelligences, until our computers can put the complexities of entire economic sectors into practice. Without the AI revolution and the nanotech revolution, our self-replicating factory would have been a miracle - now it's just everyday technology.</Fader></p>

            <h2><Text>Rebuilding civilization</Text></h2>
            <p><Fader>Eventually, if all goes to plan, our probe will have constructed basic infrastructure in our new planet and sent off probes to future new homes. Now we will rebuild human life, from scratch. Using the DNA of millions of people, we can create a first generation of settlers in climate-controlled environments much like your own, or wait to terraform the atmosphere. This first generation will be born and grow up under the care of AI. Though our own civilization will long since have changed beyond recognition, their childhood will be a lot like yours. Like you, they'll live in a climate-controlled environment, safe from the dangers of the oxygen-less, frigid outside; like you, they'll grow up in a one-planet government, taken care of by the state; and like some of you, AI will step in when their parents are far from home. We don't know how this new civilization will do with its new existence. But they'll have everything they need to thrive in their new home.</Fader></p>
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(How);
