import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <section id="blog" className="blog py-3">
      <div className="wrapper">
        <div className="header">
          <span></span>
        </div>
        <div className="blog-info">
          <h2>Read Our <span className="text-secondary">Latest Insights</span></h2>
          <a href="https://intelliverseai.com/blog/">view all</a> {/* Link to the view all page */}
        </div>
        <div className="blog-card">
          {/* First Blog Card */}
          <div className="card">
            <div className="card-header">
              <img src="/images/blog1.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-yellow">Business Intelligence</span>
              <h4>AI Regulation in Healthcare: <br /> Safeguarding Patient <br /> Data</h4>
              <div className="footer">
                <small>Jul 7, 2023 / 5 comments</small>
                <a href="https://intelliverseai.com/ai-regulation-in-healthcare-safeguarding-patient-data/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>

          {/* Second Blog Card */}
          <div className="card">
            <div className="card-header">
              <img src="/images/blog2.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">AI Consulting</span>
              <h4>How to Implement AI- <br /> Powered Decision <br />Making Simply</h4>
              <div className="footer">
                <small>Jul 26, 2023 / 20 comments</small>
                <a href="https://intelliverseai.com/how-to-implement-ai-powered-analytics-in-your-business/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>

          {/* Third Blog Card */}
          <div className="card">
            <div className="card-header">
              <img src="/images/blog3.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Business Intelligence</span>
              <h4>Strategies for <br /> Implementing Safe AI in <br /> Your Business</h4>
              <div className="footer">
                <small>August 30, 2023 / 10 comments</small>
                <a href="https://intelliverseai.com/how-ai-is-revolutionizing-customer-service/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>

          {/* Fourth Blog Card */}
          <div className="card">
            <div className="card-header">
              <img src="/images/blog1.jpg" alt="Blog post" /> {/* Repeated image */}
            </div>
            <div className="card-body">
              <span className="tag tag-blue">Data Analytics</span>
              <h4>Data Driven Revenue <br /> Growth: Insights for <br /> the Retail Industry</h4>
              <div className="footer">
                <small>September 1, 2023 / 12 comments</small>
                <a href="https://intelliverseai.com/effective-data-engineering-in-startups/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

