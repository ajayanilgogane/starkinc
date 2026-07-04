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
  prepunching,
  ctl,
  rollforming,
  fastgangpunching

} from '../assets/images';
import './Pages.css';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Roll Forming Machine',
      image: rollmachine,
      price: '₹22,00,000 - ₹80,00,000',
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
      name: 'ctl machine',
      image: ctl,
      price: '₹18,00,000 - ₹65,00,000',
      specs: [
        'High-speed cutting',
        'Precision length control',
        'Durable design',
      ],
      description:
        'Cut-to-length machines for precise sheet metal cutting.',
    },
    {
      id: 3,
      name: 'SPM Machines',
      image: ncf001,
      price: '₹30,00,000 - ₹1,10,00,000',
      specs: [
        'Customizable configurations',
        'High efficiency',
        'Robust design',
      ],
      description:
        'Special purpose machines for specific industrial applications.',
    },
    {
      id: 4,
      name: 'Hydraulic Powerpack',
      image: hydraulicPowerpack,
      price: '₹10,00,000 - ₹55,00,000',
      specs: [
        'High pressure output',
        'Temperature control',
        'Efficient operation',
      ],
      description:
        'Heavy-duty hydraulic power units designed for industrial machinery and equipment applications.',
    },
    {
      id: 5,
      name: 'Hydraulic Pressing Machine',
      image: hp,
      price: '₹18,00,000 - ₹88,00,000',
      specs: [
        'Tonnage: 10T - 500T',
        'Automated controls',
        'Safety features',
      ],
      description:
        'Professional hydraulic presses for metal forming, stamping, and heavy-duty industrial operations.',
    },
    {
      id: 6,
      name: 'Baling Machine',
      image: doubleActionBalingPress,
      price: '₹22,00,000 - ₹75,00,000',
      specs: [
        'High compression ratio',
        'Durable construction',
        'Easy operation',
      ],
      description:
        'Efficient baling systems for material compaction and waste management applications.',
    },
    {
      id: 7,
      name: 'Metal Baler Machine',
      image: tripleActionBalingPress,
      price: '₹25,00,000 - ₹82,00,000',
      specs: [
        'Industrial grade',
        'Heavy-duty hydraulics',
        'Consistent compression',
      ],
      description:
        'Industrial metal baling equipment for scrap metal compression and recycling operations.',
    },
    {
      id: 8,
      name: 'Servo Feeder',
      image: servoFeeder,
      price: '₹15,00,000 - ₹60,00,000',
      specs: [
        'Precision control',
        'Variable speed',
        'Integrated system',
      ],
      description:
        'Precision servo-driven feeding systems for automated production lines and manufacturing.',
    },
    {
      id: 9,
      name: 'Hydraulic Punching Machines',
      image: shearingMachine,
      price: '₹33,00,000 - ₹1,45,00,000',
      specs: [
        '50-60 ppm capacity',
        'Precision punching',
        'CNC compatible',
      ],
      description:
        'High-speed hydraulic punching equipment for sheet metal and component manufacturing.',
    },
    {
      id: 10,
      name: 'Shearing Machine',
      image: sheering,
      price: '₹30,00,000 - ₹1,25,00,000',
      specs: [
        'High precision',
        'Heavy-duty blades',
        'Quick changeover',
      ],
      description:
        'Professional metal shearing systems for precision cutting and trimming operations.',
    },
    {
      id: 11,
      name: 'Straightener',
      image: straighteningMachine,
      price: '₹18,00,000 - ₹70,00,000',
      specs: [
        'Precision accuracy',
        'Multiple configurations',
        'High throughput',
      ],
      description:
        'Precision straightening equipment for metal bars, wires, and flat materials.',
    },
    {
      id: 12,
      name: 'Decoiler',
      image: decoilerMachine,
      price: '₹13,00,000 - ₹50,00,000',
      specs: [
        'Variable speed control',
        'Heavy-duty construction',
        'Easy loading',
      ],
      description:
        'Industrial decoiling systems for automated material feeding and processing applications.',
    },
    {
      id: 13,
      name: 'Fast Punching Machine',
      image: fastpunching,
      price: '₹30,00,000 - ₹1,15,00,000',
      specs: [
        'High-speed operation',
        'Precision punching',
        'Automated controls',
      ],
      description:
        'High-speed punching equipment for rapid production of sheet metal components.',
    },
    {
      id: 14,
      name: 'Pre-Punching Machine',
      image: prepunching,
      price: '₹25,00,000 - ₹95,00,000',
      specs: [
        'Pre-punching capabilities',
        'Precision alignment',
        'Efficient operation',
      ],
      description:
        'Specialized pre-punching machines for preparing sheet metal for subsequent manufacturing processes.',
    },
  ];

  const handleRequestQuote = (productName) => {
    navigate('/quote', { state: { productInterest: productName } });
  };

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
            {products && products.length > 0 ? (
              products.map((product) => (
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
                        {product.specs && product.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="detail-btn"
                      onClick={() => handleRequestQuote(product.name)}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available at the moment.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;