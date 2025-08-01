export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white mb-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">James Bryan, REA, CSE</h1>
          <p className="text-xl mb-6">
            Licensed Real Estate Appraiser & Civil Service Professional serving the Municipality of Rosario, Agusan del Norte
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#credentials" 
              className="bg-white text-secondary px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
            >
              My Credentials
            </a>
            <a 
              href="#services" 
              className="border-2 border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-secondary transition"
            >
              My Services
            </a>
          </div>
        </div>
      </section>
    );
  }