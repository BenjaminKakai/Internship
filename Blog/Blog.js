import React, { useEffect, useRef } from 'react';
import './Blog.css';

function Blog() {
    const blogRef = useRef(null);

    const handleScroll = () => {
        const blogSection = blogRef.current;
        const cards = Array.from(blogSection.querySelectorAll('.card, .large-card'));
        const scrollPosition = window.scrollY + window.innerHeight;

        let currentCardIndex = 0;

        const animate = () => {
            // Hide all cards
            cards.forEach(card => {
                card.classList.remove('show');
                card.classList.add('hide');
            });

            // Show the current card
            if (cards[currentCardIndex].offsetTop < scrollPosition) {
                cards[currentCardIndex].classList.remove('hide');
                cards[currentCardIndex].classList.add('show');

                // Move to the next card
                currentCardIndex = (currentCardIndex + 1) % cards.length;

                setTimeout(animate, 8000);
            }
        };

        animate();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="blog" className="blog py-3" ref={blogRef}>
            <div className="wrapper">
                <div className="header">
                    <span></span>
                </div>
                <div className="blog-info">
                    <h2>Read Our <span className="text-secondary">Latest Insights</span></h2>
                    <p className="white-paragraph">
                        Learn more about how Instabase is revolutionizing operational<br /> productivity.
                    </p>
                    <div className="resources">
                        <a className="resource" href="#">Resources</a>
                        <a className="resource" href="#">Articles</a>
                    </div>
                    <a href="https://intelliverseai.com/blog/" className="white-link view-all-button">view all</a>
                </div>
                <div className="blog-card">
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
                    <div className="card">
                        <div className="card-header">
                            <img src="/images/blog2.jpg" alt="Blog post" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-purple">AI Consulting</span>
                            <h4>How to Implement AI- <br /> Powered Decision <br />Making Simply</h4>
                            <div className="footer">
                                <small>January 26, 2023 / 20 comments</small>
                                <a href="https://intelliverseai.com/how-to-implement-ai-powered-analytics-in-your-business/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div> {/* Closing tag for "blog-card" */}
            </div>
        </section>
    );
}

export default Blog;
