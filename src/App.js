import React from 'react';
import './App.css';

const EARLY_ACCESS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScJkqhhZV1wmSV56vzaW0Hh9vz0NQldnVwR6mpPWPghIKQs3A/viewform';

function App() {
  return (
    <div className="landing-page">
      {/* Hero Section — Slice 1: brand-first first viewport */}
      <section className="hero">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="brand-mark">RewardsFindr</p>
            <h1 className="hero-headline">Use the right card, every time</h1>
            <p className="hero-subtitle">
              Sync your bank offers, search any store, and pay with the card that
              earns the most — App Store and Play Store coming soon.
            </p>
            <div className="hero-cta">
              <a
                className="btn-primary"
                href={EARLY_ACCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get early access
              </a>
              <p className="hero-cta-note">iOS &amp; Android — coming soon</p>
              <p className="hero-banks">
                Works with Chase · Amex · Citi · Wells Fargo · Capital One · Bilt
                — and many more to come, so you choose the right card every time.
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-app-bar">RewardsFindr</div>
                <div className="phone-search">
                  <span className="phone-search-text">Search a store…</span>
                </div>
                <div className="phone-section-label">Your offers</div>
                <div className="phone-sample-cue">Sample rates for illustration</div>
                <div className="phone-offers">
                  <div className="phone-offer">
                    <div className="phone-offer-rate">6% back</div>
                    <div className="phone-offer-meta">
                      <span className="phone-offer-store">Whole Foods</span>
                      <span className="phone-offer-bank phone-offer-bank--amex">Amex</span>
                    </div>
                  </div>
                  <div className="phone-offer">
                    <div className="phone-offer-rate">5% back</div>
                    <div className="phone-offer-meta">
                      <span className="phone-offer-store">Target</span>
                      <span className="phone-offer-bank phone-offer-bank--chase">Chase</span>
                    </div>
                  </div>
                  <div className="phone-offer">
                    <div className="phone-offer-rate">4% back</div>
                    <div className="phone-offer-meta">
                      <span className="phone-offer-store">Chipotle</span>
                      <span className="phone-offer-bank phone-offer-bank--c1">Cap One</span>
                    </div>
                  </div>
                  <div className="phone-offer">
                    <div className="phone-offer-rate">3x pts</div>
                    <div className="phone-offer-meta">
                      <span className="phone-offer-store">Starbucks</span>
                      <span className="phone-offer-bank phone-offer-bank--citi">Citi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How it works</h2>
          <p className="section-lead">
            Three steps from bank offers on your phone to the right card at checkout.
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-number">1</div>
              <h3>Connect your banks</h3>
              <p>
                Sync offers from Chase, Amex, Citi, Wells Fargo, Capital One, and
                Bilt in the app — no manual entry.
              </p>
            </div>
            <div className="feature">
              <div className="feature-number">2</div>
              <h3>Search any store</h3>
              <p>
                Before you buy, search Target, Amazon, gas, restaurants, or
                wherever you&apos;re shopping.
              </p>
            </div>
            <div className="feature">
              <div className="feature-number">3</div>
              <h3>See the best card</h3>
              <p>
                Compare your active offers across cards and pick the one that
                earns the most for that store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <p className="section-lead">
            Built to help you use the right card every time — without sending
            your offers off the phone.
          </p>
          <ul className="features-list">
            <li>
              Sync offers from Chase, Amex, Citi, Wells Fargo, Capital One, and
              Bilt — with more banks on the way
            </li>
            <li>Search any store and see matching offers instantly</li>
            <li>Compare offers across all your synced cards in one place</li>
            <li>
              Works with merchant offers and rotating categories when your bank
              provides them
            </li>
            <li>
              Offer data stays on your phone — nothing leaves the device
            </li>
          </ul>
        </div>
      </section>

      {/* One proof example */}
      <section className="savings">
        <div className="container">
          <h2>See the difference</h2>
          <p className="section-lead">
            A simple illustration of how matching the right offer changes what
            you earn.
          </p>
          <div className="savings-example">
            <h3>Example: shopping at Target</h3>
            <p>
              Without RewardsFindr: use any card → typical 1–2% back
              <br />
              With RewardsFindr: see you have a 5% Target offer on a synced card
              → use that card instead
              <br />
              <strong>
                On a $100 purchase, that gap is a few extra dollars every time
                you shop
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div className="faq-item">
            <h3>Which banks are supported?</h3>
            <p>
              Chase, Amex, Citi, Wells Fargo, Capital One, and Bilt today — and
              many more to come.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is my data secure?</h3>
            <p>
              Yes. Offer data stays on your phone — nothing leaves the device.
              The app never takes your bank passwords, account numbers, or
              transactions, and your offers aren&apos;t uploaded to our servers.
            </p>
          </div>
          <div className="faq-item">
            <h3>How does it compare to credit card apps?</h3>
            <p>
              Bank apps usually show offers for one card at a time — so you end
              up opening each one to figure out what&apos;s best. RewardsFindr is
              a simple tool that shows your offers across synced cards when you
              search a store, so you can pick the right card in one place.
            </p>
          </div>
          <div className="faq-item">
            <h3>Does RewardsFindr use AI?</h3>
            <p>
              No. It&apos;s a simple tool: sync your bank offers, search a store,
              and see which card pays best — so you don&apos;t have to open each
              bank app to figure it out. No AI involved.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>RewardsFindr — use the right card, every time</p>
          <p>
            <a href="mailto:hello@rewardsfindr.com">hello@rewardsfindr.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
