export default function CurrentStatusSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-secondary border-b-2 border-primary pb-2">
        Current Status
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* SMV Progress Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <i className="fas fa-map-marker-alt text-primary mr-2" />
            Municipality of Rosario
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700">SMV Profiling Progress</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">75% completed</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">QRRPA Submission Status</h4>
              <div className="flex items-center mt-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Up to date</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines Card */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <i className="fas fa-calendar-alt text-primary mr-2" />
            Upcoming Deadlines
          </h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-20 px-3 py-1 rounded-lg mr-3">
                <span className="font-bold text-primary">Jun 15</span>
              </div>
              <div>
                <p className="font-medium">QRRPA Quarterly Submission</p>
                <p className="text-sm text-gray-500">BLGF Regional Office</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary bg-opacity-20 px-3 py-1 rounded-lg mr-3">
                <span className="font-bold text-primary">Jul 30</span>
              </div>
              <div>
                <p className="font-medium">SMV Revision Deadline</p>
                <p className="text-sm text-gray-500">
                  For LGUs with delayed implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
