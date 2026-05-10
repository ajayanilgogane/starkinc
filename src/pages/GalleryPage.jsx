import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {
  aboutImage,
  hp,
  doubleActionBalingPress,
  shearingMachine,
  tripleActionBalingPress,
  straighteningMachine,
  servoFeeder,
  sheering,
  decoilerMachine,
} from '../assets/images';
import './Pages.css';

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      title: 'Factory Floor',
      image: aboutImage,
      category: 'Facilities',
    },
    {
      id: 2,
      title: 'Hydraulic Pressing Machine',
      image: hp,
      category: 'Equipment',
    },
    {
      id: 3,
      title: 'Baling Machine',
      image: doubleActionBalingPress,
      category: 'Production',
    },
    {
      id: 4,
      title: 'Hydraulic Punching Machine',
      image: shearingMachine,
      category: 'QA',
    },
    {
      id: 5,
      title: 'Metal Baler Machine',
      image: tripleActionBalingPress,
      category: 'Equipment',
    },
    {
      id: 6,
      title: 'Straightening Machine',
      image: straighteningMachine,
      category: 'Production',
    },
    {
      id: 7,
      title: 'Servo Feeder',
      image: servoFeeder,
      category: 'Facilities',
    },
    {
      id: 8,
      title: 'Shearing Machine',
      image: sheering,
      category: 'Facilities',
    },
    {
      id: 9,
      title: 'Decoiler Machine',
      image: decoilerMachine,
      category: 'Facilities',
    },
  ];

  return (
    <div className="gallery-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Gallery</h1>
          <p>Explore our state-of-the-art facilities and manufacturing operations</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={image.image} alt={image.title} />
                  <div className="gallery-overlay">
                    <h4>{image.title}</h4>
                    <p>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;