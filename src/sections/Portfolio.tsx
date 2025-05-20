import { useState, useRef } from 'react';
import { X, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openVideo = (videoPath: string) => {
    console.log('Opening video:', videoPath);
    
    // Pause any currently playing video and reset its source
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    }
    
    // Set the new video source
    setSelectedVideo(videoPath);
    
    // The actual playing will be handled by the onLoadedMetadata handler
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedVideo(null);
  };

  // Close video when clicking outside the video
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'office', name: 'Office Spaces' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Flat Interior in Guwahati',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      video: '/amar notun ghor.mp4'
    },
    {
      id: 2,
      title: 'Mobile Store Interior in Pathshala',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg',
      video: '/pathshala.mp4'
    },
    {
      id: 3,
      title: 'Full House Interior in Goalpara',
      category: 'residential',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      video: '/RESIDENTIAL.mp4'
    },
    {
      id: 4,
      title: 'Super Mart Interior in Bongaigaon',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      video: '/bongaigaon.mp4'
    },
    {
      id: 5,
      title: 'Flat Interior in Six Mile Guwahati',
      category: 'office',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      video: '/dbre.mp4'
    },
    {
      id: 6,
      title: 'Luxury GYM Interior in Guwahati',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      video: '/GYM.mp4'
    },
    {
      id: 7,
      title: 'Principal Cabin Interior in Goalpara',
      category: 'hospitality',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
      video: '/KINGKOR.mp4'
    },
    {
      id: 8,
      title: 'Modular Kitchen in Dibrugarh',
      category: 'office',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      video: '/Modular Kitchen.mp4'
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative">
      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <button 
            onClick={closeVideo}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative w-full max-w-4xl bg-black">
              <video
                ref={videoRef}
                key={selectedVideo}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full max-h-[80vh] rounded-lg"
                onError={(e) => {
                  console.error('Video error:', e);
                  const video = e.target as HTMLVideoElement;
                  console.error('Video error details:', {
                    error: video.error,
                    networkState: video.networkState,
                    readyState: video.readyState,
                    src: video.currentSrc
                  });
                  alert(`Error loading video: ${video.error?.message || 'Unknown error'}`);
                }}
                onLoadStart={() => console.log('Video loading started')}
                onLoadedData={() => console.log('Video data loaded')}
                onCanPlay={() => console.log('Video can play')}
                onCanPlayThrough={() => {
                  console.log('Video can play through');
                  // This is a better place to call play()
                  if (videoRef.current) {
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(error => {
                        console.log('Autoplay failed, user interaction required:', error);
                        // Don't show error to user as it might be just autoplay restrictions
                      });
                    }
                  }
                }}
                onPlay={() => console.log('Video started playing')}
                onPause={() => console.log('Video paused')}
                onEnded={() => console.log('Video ended')}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
                <X className="w-6 h-6" onClick={closeVideo} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <div
            className="h-1 w-20 bg-amber-400 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our gallery of completed projects, showcasing our commitment to innovative design and exceptional craftsmanship.
          </p>
        </div>

        <div 
          className="flex flex-wrap justify-center mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 mx-2 mb-4 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-amber-300 capitalize mt-2">{project.category}</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideo(project.video);
                        }}
                        className="mt-4 px-4 py-2 bg-amber-400 text-gray-900 rounded-full text-sm transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Play size={16} />
                        <span>View Project</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;