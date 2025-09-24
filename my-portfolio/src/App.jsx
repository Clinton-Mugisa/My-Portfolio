// src/App.jsx
// src/App.jsx
// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Clinton Mugisa</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(/images/hero-bg.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m Clinton Mugisa
          </h2>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            Data Analyst → Aspiring Data Engineer | SQL, Python, Power BI.
          </p>
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Work
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/profile.jpg"
            alt="Clinton Mugisa"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <h3 className="text-3xl font-bold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a data analyst with experience in fintech, risk analysis, business intelligence and data engineering. I use SQL, Python, Power BI and more to transform raw data into useful insight and support strategic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Data Pipeline Project", img: "/images/project1.jpg", desc: "ETL pipeline from raw data to cleaned outputs." },
              { title: "SQL Dashboard", img: "/images/project2.jpg", desc: "Business insights via SQL and views." },
              { title: "Risk Modelling", img: "/images/project3.jpg", desc: "Modeling risk metrics in payments." },
              { title: "Python Scripts", img: "/images/project4.jpg", desc: "Automation, parsing, data cleaning in Python." },
              { title: "PowerBI Dashboard 1", img: "/images/project5.jpg", desc: "Visualizing chargeback trends." },
              { title: "PowerBI Dashboard 2", img: "/images/project6.jpg", desc: "Merchant performance dashboard." },
            ].map((proj, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <a href="#" className="text-blue-600 hover:underline">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          <p className="mb-6">Send me a message or connect via social links below.</p>
          <form className="max-w-md mx-auto space-y-4">
            <input name="name" placeholder="Name" className="w-full p-3 rounded border" />
            <input name="email" placeholder="Email" className="w-full p-3 rounded border" />
            <textarea name="message" placeholder="Message" rows={4} className="w-full p-3 rounded border"></textarea>
            <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#"><span className="text-2xl">🐙</span> GitHub</a>
            <a href="#"><span className="text-2xl">🔗</span> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Clinton Mugisa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
