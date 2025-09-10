import React from 'react';
import {
  BsPeople,
  BsAward,
  BsHeart,
  BsArrowRight,
  BsCheckCircle
} from 'react-icons/bs';
import OurTeamData from '../Data/OurTeamData';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 py-28">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text mb-6">About Our Company</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to providing the best products and services to our customers with a focus on quality, sustainability, and innovation.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 inline-block border-green-400/80 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To deliver exceptional value to our customers through high-quality products, outstanding service, and continuous innovation. We strive to make a positive impact on our community and the environment.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <BsCheckCircle className="text-green-500 mr-3" />
              <span>Quality products at affordable prices</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-green-500 mr-3" />
              <span>Exceptional customer service</span>
            </li>
            <li className="flex items-center">
              <BsCheckCircle className="text-green-500 mr-3" />
              <span>Sustainable business practices</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 inline-block border-green-400/80 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted and loved brand in our industry, known for our commitment to excellence, innovation, and social responsibility. We aim to create a better shopping experience for everyone.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Our Values</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BsHeart className="text-red-500 mr-2" />
                <span>Customer First Approach</span>
              </li>
              <li className="flex items-center">
                <BsAward className="text-yellow-500 mr-2" />
                <span>Commitment to Quality</span>
              </li>
              <li className="flex items-center">
                <BsPeople className="text-blue-500 mr-2" />
                <span>Teamwork and Collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-200/20 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800  mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text mb-2">10K+</div>
            <p className="bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text mb-2">500+</div>
            <p className="bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text">Products</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text mb-2">50+</div>
            <p className="bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text mb-2">5</div>
            <p className="bg-gradient-to-l to-green-300 from-green-800 text-transparent bg-clip-text">Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OurTeamData.map(item => (
            <div 
            key={item.name}
            className="text-center">
              <div>
                <img 
                className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 object-cover"
                src={item.img} 
                alt={item.name} />
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <p className="text-blue-600 mb-3">{item.role}</p>
              <p className="text-gray-600">{item.des}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-l to-green-400 from-green-900 text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team and help us shape the future of shopping.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer">
            View Open Positions
            <BsArrowRight className="ml-2" />
          </button>
          <button 
          onClick={() => navigate(`/contact`)}
          className="ring-2 px-4 py-3 rounded-lg cursor-pointer">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}