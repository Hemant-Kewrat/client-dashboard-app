import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-pink-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">OptiCRM</h1>
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#gallery" className="hover:text-indigo-600">Gallery</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
            <li><Link to="/register" className="hover:text-indigo-600">Register</Link></li>
            <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Business with OptiCRM</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          A powerful, intuitive CRM platform to manage your clients, boost your sales, and scale your business with ease.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/register" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">Get Started</Link>
          <Link to="/login" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition">Login</Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">About OptiCRM</h3>
          <p className="text-lg">
            OptiCRM helps you stay connected with your clients, improve internal collaboration, and make informed decisions through insights and analytics. Trusted by businesses worldwide.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-tr from-pink-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-pink-600 mb-12">Our Services</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">Client Management</h4>
              <p>Centralize and manage all client data with ease and security.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">Business Insights</h4>
              <p>Visualize trends, monitor performance, and grow smartly.</p>
            </div>
            <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">Team Collaboration</h4>
              <p>Assign tasks, share updates, and collaborate effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Gallery</h3>
          <p className="mb-8">Screenshots and features coming soon...</p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="h-40 bg-indigo-100 rounded animate-pulse"></div>
            <div className="h-40 bg-pink-100 rounded animate-pulse"></div>
            <div className="h-40 bg-yellow-100 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-indigo-600 mb-4">Contact Us</h3>
          <p className="text-lg mb-6">Need help or want to work with us? Reach out:</p>
          <p className="text-xl font-semibold text-indigo-700">contact@opticrm.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} OptiCRM. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
