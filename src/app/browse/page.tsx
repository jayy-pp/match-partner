import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Browse Hindu Matrimony Profiles - MatchPartner",
  description: "Browse verified Hindu matrimony profiles on MatchPartner. Find your perfect life partner from our extensive database of educated, professionally established individuals.",
};

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Browse Verified Hindu Matrimony Profiles
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Explore our extensive database of verified Hindu profiles. Find your perfect life partner from educated, professionally established individuals across various communities.
            </p>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-secondary mb-6">Find Your Match</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Select Community</option>
              <option>Brahmin</option>
              <option>Rajput</option>
              <option>Kshatriya</option>
              <option>Vaishya</option>
              <option>Shudra</option>
            </select>
            <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Age Range</option>
              <option>21-25</option>
              <option>26-30</option>
              <option>31-35</option>
              <option>36-40</option>
              <option>41+</option>
            </select>
            <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Education</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
              <option>Professional</option>
              <option>Doctorate</option>
            </select>
            <select className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Location</option>
              <option>Delhi NCR</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Kolkata</option>
            </select>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-secondary mb-8">Featured Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">A{i}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Profile {i}</h3>
                    <p className="text-sm text-text-muted">Age: {25 + i} • {['Delhi', 'Mumbai', 'Bangalore'][i - 1]}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-text">
                  <p><strong>Education:</strong> {['MBA', 'M.Tech', 'MBBS', 'CA', 'PhD', 'B.Tech'][i - 1]}</p>
                  <p><strong>Profession:</strong> {['Software Engineer', 'Doctor', 'Teacher', 'Banker', 'Lawyer', 'Architect'][i - 1]}</p>
                  <p><strong>Community:</strong> {['Brahmin', 'Rajput', 'Vaishya', 'Kshatriya', 'Brahmin', 'Rajput'][i - 1]}</p>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  View Full Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of Hindu families who have found their life partners through MatchPartner's trusted platform.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Join Waitlist
          </button>
        </div>
      </section>
    </div>
  );
}
