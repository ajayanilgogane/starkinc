import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {
  ncf001,
  hydraulicPowerpack,
  hp,
  doubleActionBalingPress,
  tripleActionBalingPress,
  servoFeeder,
  shearingMachine,
  sheering,
  straighteningMachine,
  decoilerMachine,
  rollmachine,
  fastpunching,
  prepunching

} from '../assets/images';
import './Pages.css';

const ProductsPage = () => {
  const products = [
       {
      id: 1,
      name: 'Roll Machine',
      image: rollmachine,
      price: '$30,000 - $100,000',
      specs: [
        'High precision',
        'Durable construction',
        'Efficient operation',
      ],
      description:
        'Specialized roll machines for metal forming and shaping applications.',
    },
    {
      id: 2,
      name: 'SPM Machines',
      image: ncf001,
      price: '$40,000 - $150,000',
      specs: [
        'Multi-head configuration',
        'Precision positioning',
        'High-speed operation',
      ],
      description:
        'Special Purpose Machines for high-precision manufacturing with multi-head punching capabilities.',
    },
    {
      id: 3,
      name: 'Hydraulic Powerpack',
      image: hydraulicPowerpack,
      price: '$15,000 - $80,000',
      specs: [
        'High pressure output',
        'Temperature control',
        'Efficient operation',
      ],
      description:
        'Heavy-duty hydraulic power units designed for industrial machinery and equipment applications.',
    },
    {
      id: 4,
      name: 'Hydraulic Pressing Machine',
      image: hp,
      price: '$25,000 - $120,000',
      specs: [
        'Tonnage: 10T - 500T',
        'Automated controls',
        'Safety features',
      ],
      description:
        'Professional hydraulic presses for metal forming, stamping, and heavy-duty industrial operations.',
    },
    {
      id: 5,
      name: 'Baling Machine',
      image: doubleActionBalingPress,
      price: '$30,000 - $100,000',
      specs: [
        'High compression ratio',
        'Durable construction',
        'Easy operation',
      ],
      description:
        'Efficient baling systems for material compaction and waste management applications.',
    },
    {
      id: 6,
      name: 'Metal Baler Machine',
      image: tripleActionBalingPress,
      price: '$35,000 - $110,000',
      specs: [
        'Industrial grade',
        'Heavy-duty hydraulics',
        'Consistent compression',
      ],
      description:
        'Industrial metal baling equipment for scrap metal compression and recycling operations.',
    },
    {
      id: 7,
      name: 'Servo Feeder',
      image: servoFeeder,
      price: '$20,000 - $75,000',
      specs: [
        'Precision control',
        'Variable speed',
        'Integrated system',
      ],
      description:
        'Precision servo-driven feeding systems for automated production lines and manufacturing.',
    },
    {
      id: 8,
      name: 'Hydraulic Punching Machines',
      image: shearingMachine,
      price: '$45,000 - $180,000',
      specs: [
        '50-60 ppm capacity',
        'Precision punching',
        'CNC compatible',
      ],
      description:
        'High-speed hydraulic punching equipment for sheet metal and component manufacturing.',
    },
    {
      id: 9,
      name: 'Shearing Machine',
      image: sheering,
      price: '$40,000 - $160,000',
      specs: [
        'High precision',
        'Heavy-duty blades',
        'Quick changeover',
      ],
      description:
        'Professional metal shearing systems for precision cutting and trimming operations.',
    },
    {
      id: 10,
      name: 'Straightener',
      image: straighteningMachine,
      price: '$25,000 - $90,000',
      specs: [
        'Precision accuracy',
        'Multiple configurations',
        'High throughput',
      ],
      description:
        'Precision straightening equipment for metal bars, wires, and flat materials.',
    },
    {
      id: 11,
      name: 'Decoiler',
      image: decoilerMachine,
      price: '$18,000 - $70,000',
      specs: [
        'Variable speed control',
        'Heavy-duty construction',
        'Easy loading',
      ],
      description:
        'Industrial decoiling systems for automated material feeding and processing applications.',
    },

    {
      id: 12,
      name: 'Fast Punching Machine',
      image: fastpunching,
      price: '$40,000 - $150,000',
      specs: [
        'High-speed operation',
        'Precision punching',
        'Automated controls',
      ],
      description:
        'High-speed punching equipment for rapid production of sheet metal components.',
    },
    {
      id: 13,
      name: 'Pre-Punching Machine',
      image: prepunching,
      price: '$35,000 - $120,000',
      specs: [
        'Pre-punching capabilities',
        'Precision alignment',
        'Efficient operation',
      ],
      description:
        'Specialized pre-punching machines for preparing sheet metal for subsequent manufacturing processes.',
    },
  ];

  return (
    <div className="products-page">
      <Navbar />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Product Catalog</h1>
          <p>Explore our comprehensive range of industrial manufacturing solutions</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <div className="products-catalog">
            {products.map((product) => (
              <div key={product.id} className="product-detail-card">
                <div className="product-detail-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-detail-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description">{product.description}</p>

                  <div className="product-specs">
                    <h4>Key Features:</h4>
                    <ul>
                      {product.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="detail-btn">Request Quote</button>
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

export default ProductsPage;