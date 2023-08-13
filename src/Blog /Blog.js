import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <section id="blog" className="blog py-3">
      <div className="wrapper">
        <div className="header">
          <span></span>
          <h4>Our Blog</h4>
        </div>
        <div className="blog-info">
          <h2>Read Our <span className="text-secondary">Latest Insights</span></h2>
          <a href="#">view all</a>
        </div>
        <div className="blog-card">
          <div className="card">
            <div className="card-header">
              <img src="/images/blog1.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-yellow">Business Intelligence</span>
              <h4>AI Regulation in Healthcare:' <br /> Safeguarding Patient <br /> Date</h4>
              <div className="footer">
                <small>Jul 7, 2023 / 5 comments</small>
                <a href="#"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/blog2.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-purple">AI Consulting</span>
              <h4>How to Impliment AI- <br /> Powered Decision <br />Making Simple</h4>
              <div className="footer">
                <small>Jul 26 2023 11, 2022 / 20 comments</small>
                <a href="#"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src="/images/blog3.jpg" alt="Blog post" />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Business Intelligence</span>
              <h4>Strategies for  <br /> Implementing Safe AI in <br /> Your Business></h4>
              <div className="footer">
                <small>August 30, 2023 / 10 comments</small>
                <a href="#"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

