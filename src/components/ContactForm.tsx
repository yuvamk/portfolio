import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_wvt6w5x',
        'template_woajn6h',
        e.currentTarget,
        'nzY3T7_HPRZzrdct2'
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      
      {status === 'error' && (
        <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </motion.form>
  );
}