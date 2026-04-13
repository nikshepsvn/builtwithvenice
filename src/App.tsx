import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import { SUBMIT_URL } from './constants';

function App() {
  return (
    <div>
      <Header />
      <main className="main section-padding">
        <Hero />
        <Projects />

        <section className="coming-soon-section">
          <h2 className="section-eyebrow">Coming Soon</h2>
          <div className="scallop-divider" />
          <div className="coming-soon-row">
            <div className="coming-soon-item">
              <span className="coming-soon-number">01</span>
              <div>
                <h3 className="coming-soon-title">Cookbook & Guides</h3>
                <p className="coming-soon-desc">Step-by-step tutorials, API recipes, and architecture writeups from builders in the ecosystem.</p>
              </div>
            </div>
            <div className="coming-soon-item">
              <span className="coming-soon-number">02</span>
              <div>
                <h3 className="coming-soon-title">Builder Spotlights</h3>
                <p className="coming-soon-desc">Video interviews with project creators. How they built it, why Venice, and what's next.</p>
              </div>
            </div>
            <div className="coming-soon-item">
              <span className="coming-soon-number">03</span>
              <div>
                <h3 className="coming-soon-title">Events & Partners</h3>
                <p className="coming-soon-desc">Hackathons, meetups, and partner organizations building the future of private AI.</p>
              </div>
            </div>
          </div>
          <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer" className="coming-soon-cta">
            Have something to share? Submit it &rarr;
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
