import * as Icons from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gray-50 py-4 px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">Morgan McClure</h1>
          <p className="text-2xl mb-3 text-white">Data Science & Analytics</p>
          <p className="text-xl opacity-90 mb-6 text-white">
            Building data-driven solutions with R and Python, specializing in real-time visualization using Observable Framework and R Shiny. Experienced in machine learning, statistical analysis, and data visualization.
          </p>
          <div className="flex gap-4 items-center">
            <a href="#contact" className="bg-white text-blue-800 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Projects
            </a>
            <a 
              href="public/documents/MMcClure_Resume.pdf" 
              download
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors ml-4"
            >
              <Icons.Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <Icons.FileText className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Programming</h3>
              <p className="text-gray-600 text-center">R Shiny • Python • JavaScript • Web Development</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <Icons.BarChart3 className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Data Analysis & Visualization</h3>
              <p className="text-gray-600 text-center">Observable Framework • D3.js • SQL • R Shiny</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <Icons.MapPin className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">GIS & Spatial Analysis</h3>
              <p className="text-gray-600 text-center">ArcGIS • QGIS • Spatial Statistics</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <Icons.Brain className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">AI & Machine Learning</h3>
              <p className="text-gray-600 text-center">Predictive Modeling • Statistical Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow p-6">
            <div className="h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="public/images/report_tool.png" 
                  alt="Soil Sampling Dashboard Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soil Carbon Monitoring Dashboard</h3>
                <p className="text-gray-600 mb-4">Advanced Observable Framework and R dashboard featuring interactive maps, statistical analysis, and dynamic data visualization for soil carbon monitoring.</p>
                <a href="https://carboninsightsdemo.observablehq.cloud/soil-insights-report-demo/" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="public/images/sd_design.png" 
                  alt="Soil Sampling Design Application showing aerial imagery with sampling points" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Soil Sampling Design App</h3>
                <p className="text-gray-600 mb-4">R Shiny application for generating optimized soil sampling designs, incorporating spatial statistics and GIS functionality for agricultural research.</p>
                <a href="https://mmcclure.shinyapps.io/SampleDesignCreation/" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src="public/images/f1_viz.png" 
                  alt="F1 Driver Performance Radar Chart" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">F1 2025 Season Tracker</h3>
                <p className="text-gray-600 mb-4">Interactive dashboard built with Python and Observable Framework, featuring real-time race statistics, driver standings, and dynamic visualizations of the 2025 Formula 1 season.</p>
                <a href="https://f1viz.observablehq.cloud/morgan-mc/" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Publications & Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex gap-4 items-start">
                <Icons.BookText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid soil harvesting using a novel soil auger system for farm‐scale soil carbon estimates</h3>
                  <p className="text-gray-600 mb-2">Soil Science Society of America Journal, 2024</p>
                  <p className="text-gray-700">Evaluated novel drill-auger system against traditional push probe methods for soil carbon sampling, demonstrating equivalent accuracy with a faster collection speed. Research supports more efficient carbon sequestration monitoring in agricultural systems.</p>
                  <a href="https://acsess.onlinelibrary.wiley.com/doi/abs/10.1002/saj2.20603" className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">Read Publication →</a>
                </div>
              </div>
            </div>
            {/* <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <div className="flex gap-4 items-start">
                <Icons.BookText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Title of Research Paper</h3>
                  <p className="text-gray-600 mb-2">Journal of Data Science, 2023</p>
                  <p className="text-gray-700">Brief description of the research and its impact on the field.</p>
                </div>
              </div>
            </div> */}
          </div>
          
          <h3 className="text-2xl font-semibold text-center mb-8">Research Projects</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-4 items-start bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <Icons.Grape className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Soil Carbon in Vineyards</h3>
                <p className="text-gray-600 mb-2">Jackson Family Wines & TSIP Collaboration</p>
                <p className="text-gray-700">Analysis of soil carbon distribution patterns across multiple spatial scales in vineyard ecosystems. Research focused on quantifying carbon differences between tractor rows and vine rows, providing insights into agricultural management impacts on soil carbon sequestration.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
              <Icons.Map className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Grazing Lands Assessment in the Contiguous US</h3>
                <p className="text-gray-600 mb-2">Skidmore College & The Nature Conservancy</p>
                <p className="text-gray-700">Comprehensive statistical analysis and mapping of US grazing lands, categorizing ownership across private, state, and federal jurisdictions at the county level. Research integrated with TNC's resilience data to evaluate land management implications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-xl mx-auto flex flex-col items-center">
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/morgan-mcclure" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Icons.Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/mcclure-morgan/" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Icons.Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:morgan@m-mcclure.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Icons.Mail className="w-8 h-8" />
              </a>
            </div>
            <p className="text-center text-gray-600">
              I'm always open to discussing new projects, opportunities, and collaborations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;