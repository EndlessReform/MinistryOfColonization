import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

/*
<Link
    href='https://fanlink.to/circalgorithm'
    target='circalgorithm'
    style={{ display: 'block' }}
>
    <Fader style={{ display: 'block' }}>
    <img
        src='/images/circadian-algorithm.jpg'
        alt='Soul Extract Circadian Algorithm album'
        style={{ width: '100%', maxWidth: '400px' }}
    />
    </Fader>
</Link>
*/

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>About Us</Text></h1>
            </header>
            <p><Text>We're the Ministry of Colonization, a ministry of United Mars dedicated to furthering human colonization outside the Red Planet. (For the ongoing colonization of our own planet, please see the Ministry of the Interior).</Text></p>
            <h3><Text>Our Mission</Text></h3>
            <Fader>
            <blockquote>
                To make every world a home for humanity, and to ensure that the human spirit will never be extinguished from the universe
            </blockquote>
            </Fader>
            <h3><Text>Our History</Text></h3>
            <p><Text>Our department was founded in 2053 to advance settlements in Phobos, Deimos, and the Asteroid Belt. However, after groundbreaking developments in molecular nanotechnology during the mid 2060s, intergalactic colonization for the first time became technologically feasible. Since then, the MoC has been the only governmental body in the Solar System to spread human colonies across the Milky Way.</Text></p> 
            <p><Text>Our numerous technical accomplishments include compiling a comprehensive guide to human science and technology in just five years with help from GPT-8 and crowdsourced volunteers, building the BFLA (Big F▒▒▒  Laser Array), a 100GW laser installation 10x more powerful than current state-of-the-art laser sail cargo terminals, to propel our probes, and successfully assembling a modern chip fabrication fab from scratch in just 36 hours with molecular nanotech. Our first test colony is currently replicating on Charon, and we await first contact within five years. Since first launch last year, we've sent over 100 candidate probes to inhabitable planets in a 50 light-year radius.</Text></p>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(About);
