import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

/*
*/
const styles = theme => ({
  root: {}
});

class Why extends React.Component {
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
              <h1><Text>Why colonize other planets?</Text></h1>
            </header>
            <p><Text>Why is the Ministry of Colonization receiving state funding to settle the whole galaxy when we haven't even settled this planet? At the MoC, we get this question all the time, so we've prepared a short set of explainers to tell you why we work. </Text></p>
            <blockquote><Text>TL;DR: Life is rare, and we can and must make it less rare.</Text></blockquote>
            <hr />
            <h1><Text>We're probably alone in the universe</Text></h1>
            <h2><Text>There are many planets, but few habitable ones</Text></h2>
            <p><Fader>Half of all stars have planets like ours: not gas giants, but solid planets made of metal and rock [6]. How many of these are more like Earth than our own planet? By the '10s, telescopes became good enough to find many promising candidates, and by the mid '20s, thousands of planets were discovered in the so-called "Goldilocks zone", where the temperature was just hot enough for liquid water, a key ingredient for life, to be liquid - in theory. We narrowed the list down to planets in the "cosmic shoreline", where their size within the habitable zone allowed them to keep their atmosphere, and planets which had stable systems of orbits. But even then, millions of planets could potentially have water: half of stars allowed for stable orbits [9], meaning good climates stayed good, and many of the planets we detected were on the right side of the shore, meaning atmospheres wouldn't boil away [10]. Life seemed like it should be plentiful!</Fader></p>
            <p><Fader>But as telescopes continued to improve, by the 2030s and 2040s, we could finally discover the surface temperatures and atmospheres of planets. When researchers re-examined some of the most promising exoplanets, they found out that those planets were boiling. As it turned out, Earth's tectonic activity was in another Goldilocks zone: Not so active that carbon dioxide was stored away in rock and the planet froze, but just active enough to bury the carbon that silicate weathering exposed [8]. As a bonus, Earth's activity gave it magnetosphere, unlike our own planet, keeping solar radiation from weathering the atmosphere away [10], while not covering the air in volcanic soot or covering the surface in lava. Most other planets either boiled or froze. The future of humanity is cold and rocky. </Fader></p>

            <h2><Text>Life is rare, and complex life is rarer</Text></h2>
            <p><Fader>But even if our planet was rare, there were still countless planets with climates like our own which could develop life. How many planets that could develop life actually did? Even today, we still can't answer this question. We still have no convincing model of abiogenesis, the creation of life from nothing, and our best explanations are still mostly guesswork. But in the 30s and 40s, improved computer simulations gave us a better and better look into Earth's earliest conditions. Purely accurate simulations of chemical interaction are incredibly difficult because particles are so tied together: One interaction affects another. But in the early '20s, AI programs like AlphaFold began finding stunningly accurate results to similarly complex problems like protein folding, finding patterns that human researchers failed to see. Inspired by this, domain experts in abiogenesis and AI researchers worked together to crack the problem of simulating primordial soup or tidal pools, creating new synthetic data for training and improving model runtime, and after three order of magnitude increases in compute and a decade of algorithmic refinement, large scale simulation of early life finally became possible. </Fader></p>
            <p><Fader>Needless to say, you've probably heard what they found. After running simulations generating more raw data than humanity had ever produced in its history up to 2017, life finally was discovered - once. Sadly, the neural networks that generated this simulation were a black box: We have no idea what results prompted their answers. Researchers still had no idea how exactly this had occurred, and an incoming fundamentalist US presidency slashed grants for follow-up simulations a year later. </Fader></p>
            <p><Fader>To this day, we cannot be sure that this simulation was truly accurate. But one thing was for certain: prokaryotic life is rare. Eukaryotic life, the basis of multicellular life, is still rarer. Even on Earth it took a billion years to develop [2], and even fifty years ago researchers concluded that the likelihood that it happened twice on Earth was at least a million to one. The aforementioned 2039 fiasco of the "origin of life" and coincidental rise to power of the "Religious Freedom Restoration Party" meant that grants for a similar study of eukaryotic origins were revoked, and AI researchers were poached back into the lucrative field of AI-assisted pharmaceutical research. Whatever the case may truly be, stunning experiments on Earth mean that life could occur in as few as one in a trillion habitable planets.</Fader></p>

            <hr />
            <h1><Text>Human life is fragile. It doesn't have to be</Text></h1>
            <p><Fader>We still can't prove that there's no other life like us in the universe - but given what you just read, it's pretty unlikely. By the balance of probability, we humans are the only life to make it this far. That's pretty staggering: if we die out, intelligent life dies out with us. And if we destroy the Solar System, all life may be gone.</Fader></p>
            <p><Fader>We're extremely lucky to have survived this far. But despite all we've learned in the past century about the steps before us, we don't know anything about what comes after us. This century has seen great tragedy.  The flooding of Bangladesh and Vietnam left hundreds of millions homeless. The Water Wars between China and India killed millions in the world's second nuclear war. But somehow, we're still here. The nanotech revolutions of the last decade has allowed this government to promise a world without work by 2080, and our nanotech and AI regulators work tirelessly to keep you safe from rogue AGI and rogue self-replicators. But it only takes one failure to doom all humanity in the solar system, permanently - and possibly, to destroy all the intelligent life there is.</Fader></p>
            <p><Fader>Our government was founded on the idea that human life had to be resilient against extinction. We came to Mars because Earth was too fragile a home for humanity. We see it as our planet's unique mission to ensure that the light of life and civilization never goes out. The same reason you or your parents settled this planet is why the Ministry of Colonization exists. Just as climate change and nuclear war forced our parents to grapple with the threat of extinction, our greatest achievements, AGI and nanotechnology, give us challenges as great as their promise. These technologies truly could end humanity. That is why we are settling other worlds. Unlike us, Earth governments have no interest in conquering territory they'll die millennia before they control. Unlike us, Earth corporations can't make a single Ether off the far future. We are humanity's best hope for the future. That is why we colonize the galaxy.</Fader></p>
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Why);
