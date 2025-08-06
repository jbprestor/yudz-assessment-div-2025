
export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">James Bryan</h3>
            <p className="text-sm opacity-80">
              Licensed Real Estate Appraiser & Civil Service Professional serving the Municipality of Rosario, Agusan del Norte.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">Home</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">Assessors Directory</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">SMV Profiling</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition">QRRPA Submission</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm opacity-80">
                <i className="fa-solid fa-envelope mr-2"></i>
                jbryan@rosario.gov.ph
              </li>
              <li className="flex items-center text-sm opacity-80">
                <i className="fas fa-phone-alt mr-2"></i>
                +63 912 345 6789
              </li>
              <li className="flex items-center text-sm opacity-80">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Municipal Hall, Rosario, Agusan del Norte
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="fa-brands fa-facebook-f bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition">
              </a>
              <a href="#" className="fa-brands fa-tiktok bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition">
              </a>
              <a href="#" className=" fab fa-youtube bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition">
              </a>
              <a href="#" className="fab fa-linkedin-in bg-white bg-opacity-10 hover:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center transition">
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-sm text-center opacity-70">
          <p>© 2024 James Bryan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}