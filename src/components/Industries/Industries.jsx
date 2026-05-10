import React from 'react';
import {
  Pharmaceuticals,
  Textile,
  FoodProcessing,
  Electronics,
  HeavyEngineering,
  automotives,
} from '../../assets/images';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: 'Automotive',
      image: automotives,
      description: 'Manufacturing solutions for vehicle production and assembly.',
    },
    {
      id: 2,
      name: 'Pharmaceuticals',
      image: Pharmaceuticals,
      description:
        'Specialized equipment for pharmaceutical manufacturing and packaging.',
    },
    {
      id: 3,
      name: 'Textile',
      image: Textile,
      description:
        'Advanced textile machinery for fabric production and processing.',
    },
    {
      id: 4,
      name: 'Food Processing',
      image: FoodProcessing,
      description:
        'Hygienic and efficient food processing and packaging equipment.',
    },
    {
      id: 5,
      name: 'Electronics',
      image: Electronics,
      description:
        'Precision machinery for electronic component manufacturing.',
    },
    {
      id: 6,
      name: 'Heavy Engineering',
      image: HeavyEngineering,
      description:
        'Robust solutions for heavy industrial and engineering applications.',
    },
  ];

  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">Serving Diverse Manufacturing Sectors</p>

        <div className="industries-grid">
          {industries.map((industry) => (
            <div key={industry.id} className="industry-card">
              <div className="industry-image">
                <img src={industry.image} alt={industry.name} />
              </div>

              <div className="industry-info">
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;