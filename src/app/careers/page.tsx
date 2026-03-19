import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - MatchPartner",
  description: "Join MatchPartner team and help revolutionize Hindu matrimony. Explore career opportunities in tech, marketing, operations, and customer success. Work with purpose.",
};

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-7 years"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-6 years"
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Relationship Manager",
      department: "Operations",
      location: "Multiple Cities",
      type: "Full-time",
      experience: "1-3 years"
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family, including mental health support.",
      icon: "🏥"
    },
    {
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours and work-from-home options.",
      icon: "🏠"
    },
    {
      title: "Professional Growth",
      description: "Annual learning budget, conference sponsorships, and internal mentorship programs.",
      icon: "📚"
    },
    {
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and company-wide wellness days.",
      icon: "⚖️"
    },
    {
      title: "Equity Options",
      description: "Stock options for all employees - we're all owners of our success.",
      icon: "📈"
    },
    {
      title: "Culture & Community",
      description: "Regular team events, cultural celebrations, and employee resource groups.",
      icon: "🎉"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Join Our Mission
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Help us revolutionize Hindu matrimony by combining tradition with technology. 
              Work with a passionate team dedicated to creating meaningful connections and lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Why Work at MatchPartner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Purpose-Driven Work</h3>
              <p className="text-text-muted">
                Make a real impact on millions of lives by helping families find their perfect matches.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Innovation & Growth</h3>
              <p className="text-text-muted">
                Work with cutting-edge AI technology and be part of a fast-growing, mission-driven startup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Amazing Culture</h3>
              <p className="text-text-muted">
                Join a diverse, inclusive team that values collaboration, learning, and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-border">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Life at MatchPartner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Our Values</h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Trust & Transparency:</strong> We believe in open communication and building trust with our team and users.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Innovation:</strong> We constantly challenge the status quo and embrace new ideas and technologies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Empathy:</strong> We understand the emotional significance of matrimony and approach our work with compassion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Excellence:</strong> We strive for excellence in everything we do, from code to customer service.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-4">Growth & Development</h3>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Learning Budget:</strong> Annual budget for courses, conferences, and professional development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Mentorship Program:</strong> Pair with senior leaders for career guidance and growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Internal Mobility:</strong> Opportunities to move between teams and roles as we grow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Regular Feedback:</strong> Quarterly reviews and continuous feedback for professional growth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white/90 mb-8">
            Help us build the future of Hindu matrimony. Explore our open positions or send us your resume for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View All Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Send Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
