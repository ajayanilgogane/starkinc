import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Pages.css';

const CareersPage = () => {
  const jobs = [
    {
      id: 1,
      title: 'CNC Operator',
      department: 'Manufacturing',
      location: 'Nalasopara Fata (Vasai)',
      salary: '$50,000 - $65,000',
      type: 'Full-time',
      description:
        'Operate and maintain CNC machinery, ensuring precise manufacturing of components according to specifications.',
    },
    {
      id: 2,
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Nalasopara Fata (Vasai)',
      salary: '$70,000 - $90,000',
      type: 'Full-time',
      description:
        'Design and develop innovative manufacturing solutions and equipment improvements.',
    },
    {
      id: 3,
      title: 'Quality Assurance Specialist',
      department: 'QA',
      location: 'Nalasopara Fata (Vasai)',
      salary: '$55,000 - $70,000',
      type: 'Full-time',
      description:
        'Ensure all products meet quality standards through rigorous testing and inspection procedures.',
    },
    {
      id: 4,
      title: 'Sales Executive',
      department: 'Sales',
      location: 'Nalasopara Fata (Vasai)',
      salary: '$60,000 - $100,000+',
      type: 'Full-time',
      description:
        'Develop business relationships and drive sales of industrial equipment solutions.',
    },
    {
      id: 5,
      title: 'Technician',
      department: 'Maintenance',
      location: 'Nalasopara Fata (Vasai)',
      salary: '$40,000 - $55,000',
      type: 'Full-time',
      description:
        'Perform maintenance and repair tasks on industrial equipment and machinery.',
    },
    {
      id: 6,
      title: 'Intern - Manufacturing',
      department: 'Manufacturing',
      location: 'Nalasopara Fata (Vasai)',
      salary: 'Stipend',
      type: 'Internship',
      description: 'Learn manufacturing processes and gain hands-on experience in industrial production.',
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="careers-page">
      <Navbar />
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Join Our Team</h1>
          <p>Be part of the future of manufacturing technology</p>
        </div>
      </section>

      <section className="page-content">
        <div className="content-container">
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`job-card ${selectedJob?.id === job.id ? 'active' : ''}`}
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-info">
                  <p>
                    <strong>Department:</strong> {job.department}
                  </p>
                  <p>
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p>
                    <strong>Salary:</strong> {job.salary}
                  </p>
                </div>
                <p className="job-description">{job.description}</p>

                {selectedJob?.id === job.id && (
                  <div className="job-actions">
                    <button className="apply-btn">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
