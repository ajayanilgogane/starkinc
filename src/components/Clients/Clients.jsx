import React from 'react';
import './Clients.css';
import karamtaraLogo from '../../assets/images/karamtara.webp';
import purshotamLogo from '../../assets/images/purshotam.png';
import vikramLogo from '../../assets/images/vikram.png';
import jayaamLogo from '../../assets/images/jayaam.png';
import ashapuraLogo from '../../assets/images/ashapura.png';
import miltonLogo from '../../assets/images/milton.avif';
import nayasaLogo from '../../assets/images/nayasa.avif';
import rishabhLogo from '../../assets/images/rishabh.jpg';
import sunrackLogo from '../../assets/images/sunrack.svg';
import alokRubberLogo from '../../assets/images/alokrubberindia.jpg';
import keybondLogo from '../../assets/images/keybond.webp';

const clients = [
  { name: 'Karamtara Engineering Ltd', industry: 'Engineering & Infrastructure', logo: karamtaraLogo },
  { name: 'Purshotam Profile Pvt Ltd', industry: 'Metal Processing', logo: purshotamLogo },
  { name: 'Vikram Solar Ltd', industry: 'Renewable Energy', logo: vikramLogo },
  { name: 'Jayaam Galvanizer Pvt Ltd', industry: 'Galvanizing Solutions', logo: jayaamLogo },
  { name: 'Ashapura Industries', industry: 'Industrial Manufacturing', logo: ashapuraLogo },
  { name: 'Milton', industry: 'Consumer Products', logo: miltonLogo },
  { name: 'Nayasa', industry: 'Plastic Manufacturing', logo: nayasaLogo },
  { name: 'Rishab Plast', industry: 'Packaging & Plastics', logo: rishabhLogo },
  { name: 'Sunrack Technologies', industry: 'Solar Infrastructure', logo: sunrackLogo },
  { name: 'Alok Rubber', industry: 'Rubber Manufacturing', logo: alokRubberLogo },
  { name: 'Keybond Industries', industry: 'Industrial Components', logo: keybondLogo },
];

const Clients = () => {
  // Triple the array elements to ensure absolute seamlessness during the infinite CSS scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="clients">
      <div className="clients-container">
        <div className="clients-header">
          <span className="section-eyebrow">05 / Partnerships</span>
          <h2>Trusted on the factory floor.</h2>
          <p>Working alongside manufacturers across India.</p>
        </div>

        <div className="clients-carousel">
          <div className="carousel-window">
            <div className="carousel-track">
              {duplicatedClients.map((client, index) => (
                <div key={index} className="client-card">
                  <div className="client-logo">
                    <img src={client.logo} alt={`${client.name} logo`} />
                  </div>
                  <h3>{client.name}</h3>
                  <p>{client.industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;