import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ProConnect</h1>
          <nav className="space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Connect, Grow, and Succeed
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join the professional network that helps you showcase your skills, connect
            with industry leaders, and seize opportunities.
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose ProConnect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-network-wired text-4xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Build Your Network</h4>
              <p className="text-gray-600">
                Connect with professionals across various industries and expand
                your reach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-briefcase text-4xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Showcase Your Work</h4>
              <p className="text-gray-600">
                Highlight your projects and accomplishments to attract opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4">
                <i className="fas fa-chart-line text-4xl"></i>
              </div>
              <h4 className="text-xl font-semibold mb-2">Grow Your Career</h4>
              <p className="text-gray-600">
                Access tools, resources, and mentorship to help you advance in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Professional Journey?
          </h4>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2024 ProConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
