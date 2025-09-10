import {
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsClock,
  BsWhatsapp,
  BsMessenger,
  BsTwitter,
  BsInstagram
} from 'react-icons/bs';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-26">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-green-800 to-green-400 text-transparent bg-clip-text mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We'd love to hear from you. Reach out to us through any of the channels below.
        </p>
      </section>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BsTelephone className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <BsEnvelope className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-600">support@yourcompany.com</p>
                <p className="text-gray-600">info@yourcompany.com</p>
                <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <BsGeoAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-600">123 Commerce Street</p>
                <p className="text-gray-600">Suite 456</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <BsClock className="text-yellow-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-12">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <BsMessenger size={20} />
              </a>
              <a href="#" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors">
                <BsWhatsapp size={20} />
              </a>
              <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                <BsTwitter size={20} />
              </a>
              <a href="#" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <BsInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}