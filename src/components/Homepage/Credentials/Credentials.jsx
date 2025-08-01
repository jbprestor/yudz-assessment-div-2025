import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CredentialsSection() {
  return (
    <section id="credentials" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-primary pb-2">
        Professional Credentials
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Educational Background */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-primary p-3 rounded-full mr-4">
              <i  className=" fas fa-graduation-cap text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Educational Background</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
            <i  className=" fa-solid fa-check text-primary mt-1 mr-2" />
              <span>Bachelor of Science in Computer Science</span>
            </li>
            <li className="flex items-start">
            <i  className=" fa-solid fa-check text-primary mt-1 mr-2" />
              <span>Bachelor of Science in Real Estate Management</span>
            </li>
          </ul>
        </div>

        {/* Professional Licenses */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="fas fa-award bg-primary p-3 rounded-full mr-4 text-white text-xl">
            </div>
            <h3 className="text-xl font-bold text-gray-800">Professional Licenses</h3>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <i  className="fa-solid fa-check text-primary mt-1 mr-2" />
              <span>Civil Service Exam (Professional) Passer</span>
            </li>
            <li className="flex items-start">
              <i  className=" fa-solid fa-check text-primary mt-1 mr-2" />
              <span>Real Estate Appraiser Licensure Exam Passer</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}