import React from 'react';
import { Link } from 'react-router-dom';
import {
  ncf001,
  hydraulicPowerpack,
  hp,
  shearingMachine,
  servoFeeder,
  doubleActionBalingPress,
  tripleActionBalingPress,
  sheering,
  straighteningMachine,
  decoilerMachine,
  rollmachine,
  fastpunching,
  prepunching,
  ctl,
  rollforming,
  fastgangpunching
} from '../../assets/images';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Roll Forming Machine',
      image: rollmachine,
      description: 'Advanced roll forming equipment for continuous metal shaping and fabrication.',
    },
    {
      id: 2,
      name: 'Hydraulic Powerpack',
      image: hydraulicPowerpack,
      description: 'Heavy-duty hydraulic power units for industrial machinery and equipment.',
    },
    {
      id: 3,
      name: 'Hydraulic Pressing Machine',
      image: hp,
      description: 'Professional hydraulic presses for metal forming, stamping, and heavy-duty applications.',
    },
    {
      id: 4,
      name: 'Bailing Machine',
      image: doubleActionBalingPress,
      description: 'Efficient bailing systems for material compaction and waste management.',
    },
    {
      id: 5,
      name: 'Metal Bailer Machine',
      image: tripleActionBalingPress,
      description: 'Industrial metal baling equipment for scrap metal compression and recycling.',
    },
    {
      id: 6,
      name: 'Servo Feeder',
      image: servoFeeder,
      description: 'Precision servo-driven feeding systems for automated production lines.',
    },
    {
      id: 7,
      name: 'Hydraulic Punching Machines',
      image: shearingMachine,
      description: 'High-speed hydraulic punching equipment for sheet metal and component manufacturing.',
    },
    {
      id: 8,
      name: 'Shearing Machine',
      image: sheering,
      description: 'Professional metal shearing systems for cutting and trimming operations.',
    },
    {
      id: 9,
      name: 'Straightener',
      image: straighteningMachine,
      description: 'Precision straightening equipment for metal bars, wires, and flat materials.',
    },
    {
      id: 10,
      name: 'Decoiler',
      image: decoilerMachine,
      description: 'Industrial decoiling systems for automated material feeding and processing.',
    },
   {
      id: 11,
      name: 'SPM Machines',
      image: ncf001,
      description: 'Special Purpose Machines for high-precision manufacturing and specialized operations.',
    },
    {
      id: 12,
      name: 'Fast Punching Machine',
      image: fastpunching,
      description: 'High-speed punching systems for rapid hole making in sheet metal applications.',
    },
    {
      id: 13,
      name: 'Pre-Punching Machine',
      image: prepunching,
      description: 'Precision pre-punching equipment for initial hole formation in metal components.',
    },
    {
      id: 14,
      name: 'CTL Line',
      image: ctl,
      description: 'Complete CTL (Continuous Tension Line) systems for automated metal processing.',    
    },
    {
      id: 15,
      name: 'Fast Gang Punching Machine',
      image: fastgangpunching,
      description: 'High-speed gang punching systems for efficient hole making in sheet metal applications.',
    }
  ];

  return (
    <section className="products" id="products">
      <div className="products-container">
        <div className="section-heading">
          <div className="section-heading-copy">
            <span className="section-eyebrow">01 / Machinery</span>
            <h2 className="section-title">Machines made for the work you do.</h2>
            <p className="section-intro">
              Explore dependable equipment for metal processing, forming, and
              production automation.
            </p>
          </div>
          <Link to="/products" className="section-action">
            Explore all products <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="products-grid">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <Link to="/products" className="product-btn">
                    View Products
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-bottom-action">
          <Link to="/products" className="section-action">
            View the complete product range <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
