
export default function ServicesSection() {
  return (
    <section id="services" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-primary pb-2">
        Services & Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Assessors Directory Card */}
        <div
          onClick={(e) => {
            e.preventDefault();
            // Implement your tab opening logic here
            console.log("Opening Assessors Directory");
          }}
          className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition card-hover"
        >
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg mb-4">
          <i className=" fas fa-users text-secondary text-3xl" />
         
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Caraga Assessors Directory
          </h3>
          <p className="text-gray-600 mb-4">
            Interactive directory of assessors in the Caraga Region with search
            and filter capabilities.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-primary">
              Explore Directory
            </span>
          <i className=" fas fa-arrow-right text-primary " />
       
          </div>
        </div>

        {/* SMV Profiling Card */}
        <div
          onClick={(e) => {
            e.preventDefault();
            // Implement your tab opening logic here
            console.log("Opening SMV Profiling");
          }}
          className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition card-hover"
        >
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg mb-4">
          <i className=" fas fa-chart-line text-secondary text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            SMV Profiling
          </h3>
          <p className="text-gray-600 mb-4">
            Comprehensive tracking of Schedule of Market Values profiling across
            LGUs.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-primary">
              View Profiling
            </span>
          <i className=" fas fa-arrow-right text-primary" />
          </div>
        </div>

        {/* QRRPA Submission Card */}
        <div
          onClick={(e) => {
            e.preventDefault();
            // Implement your tab opening logic here
            console.log("Opening QRRPA Submission");
          }}
          className="bg-white p-6 rounded-xl shadow-md cursor-pointer transition card-hover"
        >
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg mb-4">
          <i className=" fas fa-file-alt text-secondary text-3xl" />
            
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            QRRPA Submission
          </h3>
          <p className="text-gray-600 mb-4">
            Tracking system for Quality Review of Real Property Assessment
            submissions.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-primary">
              Check Status
            </span>
            <i className=" fas fa-arrow-right text-white text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
