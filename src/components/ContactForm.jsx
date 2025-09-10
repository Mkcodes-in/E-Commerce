import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiUser } from 'react-icons/bi'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { MdEmail, MdSubject } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import { BsSend } from 'react-icons/bs'

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-600">We'll get back to you as soon as possible</p>
      </div>

      {isSubmitted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-center">
          <FiCheckCircle className="text-emerald-600 text-xl mr-3" />
          <p className="text-emerald-800 font-medium">Message sent successfully! We'll contact you soon.</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className='flex flex-col'>
            <label
              className="text-sm font-medium text-gray-700 mb-2 flex items-center"
              htmlFor="name">
              Your Name <span className='text-red-500 ml-1'>*</span>
            </label>
            <div className='relative'>
              <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
                <BiUser size={18} />
              </span>
              <input
                {...register("name", { 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
                className={`mt-1 p-3 pl-12 rounded-xl border ${errors.name ? 'border-red-300' : 'border-gray-200'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 w-full`}
                type="text"
                id='name'
                placeholder="John Doe" 
              />
            </div>
            {errors.name && (
              <p className='text-red-500 text-sm mt-2 flex items-center'>
                <FiAlertCircle className='w-4 h-4 mr-1' />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className='flex flex-col'>
            <label
              className="text-sm font-medium text-gray-700 mb-2 flex items-center"
              htmlFor="email">
              Your Email <span className='text-red-500 ml-1'>*</span>
            </label>
            <div className='relative'>
              <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
                <MdEmail size={18} />
              </span>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`mt-1 p-3 pl-12 rounded-xl border ${errors.email ? 'border-red-300' : 'border-gray-200'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 w-full`}
                type="email"
                id='email'
                placeholder="john@example.com" 
              />
            </div>
            {errors.email && (
              <p className='text-red-500 text-sm mt-2 flex items-center'>
                <FiAlertCircle className='w-4 h-4 mr-1' />
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            Subject <span className="text-red-500 ml-1">*</span>
          </label>
          <div className='relative'>
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
              <MdSubject size={18} />
            </span>
            <input
              {...register("subject", { 
                required: "Subject is required",
                minLength: {
                  value: 5,
                  message: "Subject must be at least 5 characters"
                }
              })}
              className={`mt-1 p-3 pl-12 rounded-xl border ${errors.subject ? 'border-red-300' : 'border-gray-200'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 w-full`}
              type="text"
              id="subject"
              placeholder="Project Inquiry"
            />
          </div>
          {errors.subject && (
            <p className='text-red-500 text-sm mt-2 flex items-center'>
              <FiAlertCircle className="w-4 h-4 mr-1" />
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            Message <span className="text-red-500 ml-1">*</span>
          </label>
          <div className='relative'>
            <span className='absolute left-4 top-4 text-gray-400'>
              <RiMessage2Line size={18} />
            </span>
            <textarea
              {...register("message", { 
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              className={`mt-1 p-3 pl-12 rounded-xl border ${errors.message ? 'border-red-300' : 'border-gray-200'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none`}
              id="message"
              placeholder="Hello, I'd like to discuss a project..."
              rows="5"
            ></textarea>
          </div>
          {errors.message && (
            <p className='text-red-500 text-sm mt-2 flex items-center'>
              <FiAlertCircle className="w-4 h-4 mr-1" />
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 px-6 rounded-xl hover:from-emerald-700 hover:to-cyan-700 disabled:opacity-70 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/20 hover:shadow-xl"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            <>
              <BsSend size={18} />
              Send Message
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="#" className="text-emerald-600 hover:underline font-medium">Privacy Policy</a> and{' '}
          <a href="#" className="text-emerald-600 hover:underline font-medium">Terms of Service</a>.
        </p>
      </form>
    </div>
  )
}