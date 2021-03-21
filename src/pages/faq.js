import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import joshMullisFamilyURL from '../images/josh-mullis-family.jpg';
import newDayFosterHomeURL from '../images/new-day-foster-home.jpg';
import newDayFosterHomeLogoURL from '../images/new-day-foster-home-logo.jpg';

const styles = theme => ({
  root: {}
});

class Charity extends React.Component {
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
              <h1><Text>Frequently Asked Questions</Text></h1>
            </header>
            <blockquote><Text>Does MoC have any economic benefits for current United Mars citizens?</Text></blockquote>
            <p><Fader>We don't see the primary value of galactic colonization in monetary terms. However, our work does make life better here on Mars. Our comprehensive scientific and technological database, by design, is also a perfect training corpus for human and near-human level AI. Our habitat creation modules were adapted, with zero changes, to the construction of Free Basic Housing here on Mars; if you're in new public housing since 2070, your home was built using our technology. Our nanobots, including chip fabrication, metallurgy, habitat creation, and laser sail construction, are state licensed to approved nanotech and mining corporations at a nominal fee. </Fader></p>
            <blockquote><Text>Will UM colonies respect the UN Mutual Exclusion Accord?</Text></blockquote>
            <p><Fader>As a reminder, the Mutual Exclusion Accord (MEA) requires all von Neumann probes following it to commit to the following principles:</Fader></p>
            <ol>
                <Fader>
                <li>You cannot claim a planet which another probe agreeing to the MEA has already colonized.</li>
                <li>You must clearly signal your control of a planet in a manner observable within a 10 light-year radius.</li>
                <li>You will, as soon as possible, destroy all probes and/or civilizations which are capable of colonization but do not agree to this accord.</li>
                </Fader>
            </ol>
            <p><Fader>United Mars is committed to upholding the MEA, and one of the MoC's primary responsibilities is to implement that commitment:</Fader></p>
            <Fader>
            <ol>
                <Fader>
                    <li><strong>We defend against mutant replication.</strong> On colonization, our probes set up a ring of planetary satellites to monitor all departures from the planet's gravity well, and require all departing objects to cryptographically verify that the checksum of their source code matches the original. If any departing object fails to verify it is unmutated, our ring conducts an orbital bombardment of all population centers and factories on the planetary surface, and through self-replication, can sustain further bombardment until no mass is remaining on the planet. We're proud to report that after rigorous simulations, we guaranteed successful replication or abort to within 99.999%, or five nines of reliability.</li>
                    <li><strong>We ensure all colonies are committed to enforcing MEA.</strong>We enforce compliance through kinetic bombardment at 0.1c.</li>
                </Fader>
            </ol>
            </Fader>
            <blockquote><Text>Will your colonies respect the Bacteria Corollary to the MEA?</Text></blockquote>
            <p><Fader><strong>No.</strong>We believe that the likelihood that prokaryotic life advancing to eukaryotic life is a rounding error. We are committed to leaving eukaryotic life and complex organisms unmolested. On Earth, complex multicellular life developed precursors to civilization-producing intelligence several times, including parrots, crows, and chimpanzees; we will not prevent the development of other intelligent life. However, prokaryotes, in our view, are unlikely enough of a precursor to life that the benefits of additional human civilization outweigh the cost.</Fader></p>
            <blockquote><Text>Will your colonies respect the Analogue Corollary to the MEA?</Text></blockquote>
            <p><Fader><strong>No.</strong>As a reminder, the Analogue Corollary, which ~37% of UN member states have agreed to, commits signatories on detection of non-MEA compliant replicators to accept any proof of similar commitments as compliance with MEA 3). </Fader></p>
            <p><Fader>We at MoC believe this problem is intractable:</Fader></p>
            <Fader>
            <ol>
                <Fader>
                    <li>Since we still have no indication of extraplanetary life, we have no indication of what methods of communication hypothetical alien replicators might employ, and still fewer methods of decoding them. We believe the Tsinghua / Harvard claim of 50% AI alien language decoding is hopelessly optimistic and relies on flawed assumptions, e.g. linear experience of time, natural origin of life.</li>
                    <li>There is no way to verify solely through the medium of language either that a replication scheme is compliant or that an alien probe implements this variant scheme.</li>
                </Fader>
            </ol>
            </Fader>
            <blockquote><Text>How do you ensure that first-generation colonists grow up in a loving environment without parents?</Text></blockquote>
            <p><Fader>We use the industry-leading Alibaba Grow AI nurturing suite for all new colonists. Alibaba Grow was found to produce at least 20% lower PHQ-9 results and 20% higher PISA scores than control human foster parents during a massive longitudinal twin study of Bengali flooding orphans from 2034-2058 (n=12,304).</Fader></p>
          </article>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Charity);
