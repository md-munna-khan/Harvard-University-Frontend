
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const OnlineLearning = () => {
  const { isDark } = useContext(AuthContext);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-in-out-cubic', // Smooth easing
      offset: 50, // Trigger animation 50px before the element
      once: false, // Animations repeat on scroll
      mirror: true, // Animations trigger when scrolling up
    });
  }, []);

  return (
    <section
      className={`container mx-auto py-16 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Section Title */}
      <h2
        className={`text-3xl font-bold text-center mb-8 ${
          isDark ? 'text-white' : 'text-black'
        }`}
        data-aos="fade-up"
      >
        Explore Online Learning & E-Courses
      </h2>

      {/* Online Courses Overview */}
      <div className="mb-12" data-aos="fade-up">
        <p
          className={`text-lg text-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Enhance your skills and knowledge through online courses offered by top universities. Whether you're looking for certification programs, personal enrichment, or professional development, you'll find courses that fit your goals.
        </p>
      </div>

      {/* Featured Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Course Card 1 */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          <h3
            className={`text-xl font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Data Science & AI
          </h3>
          <p
            className={`text-base ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            Master the art of data analysis and artificial intelligence with industry experts.
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Duration: 6 Months
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Free Trial Available
          </p>
          <a
            href="/course-detail"
            className="mt-4 block text-center py-2 px-4 rounded-md specialGradient text-white font-bold hover:bg-blue-600"
          >
            Explore Course
          </a>
        </div>

        {/* Course Card 2 */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          <h3
            className={`text-xl font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Web Development Bootcamp
          </h3>
          <p
            className={`text-base ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            Become a proficient web developer through this immersive full-stack course.
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Duration: 3 Months
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Start for $99
          </p>
          <a
            href="/course-detail"
            className="mt-4 block text-center py-2 px-4 rounded-md specialGradient text-white font-bold hover:bg-blue-600"
          >
            Explore Course
          </a>
        </div>

        {/* Course Card 3 */}
        <div
          className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          <h3
            className={`text-xl font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Digital Marketing Mastery
          </h3>
          <p
            className={`text-base ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            Gain expertise in digital marketing strategies that can elevate any business.
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Duration: 4 Months
          </p>
          <p
            className={`font-semibold mt-2 ${
              isDark ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            Free Enrollment
          </p>
          <a
            href="/course-detail"
            className="mt-4 block text-center py-2 px-4 rounded-md specialGradient text-white font-bold hover:bg-blue-600"
          >
            Explore Course
          </a>
        </div>
      </div>

      {/* Upcoming Webinars */}
      <div className="mt-16" data-aos="fade-up">
        <h3
          className={`text-2xl font-semibold text-center ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Upcoming Webinars & Virtual Events
        </h3>
        <div className="mt-6 space-y-8">
          {/* Webinar 1 */}
          <div
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <div>
              <h4
                className={`text-xl ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Building Your Career in Tech
              </h4>
              <p
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Join industry experts to learn how to jumpstart your career in the tech world.
              </p>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                January 20, 2025
              </p>
              <a
                href="/webinar-detail"
                className="text-blue-500 hover:text-blue-600"
              >
                Join Webinar
              </a>
            </div>
          </div>

          {/* Webinar 2 */}
          <div
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <div>
              <h4
                className={`text-xl ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Introduction to Blockchain Technology
              </h4>
              <p
                className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Explore the fundamentals of blockchain technology and its real-world applications.
              </p>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  isDark ? 'text-gray-300' : 'text-gray-800'
                }`}
              >
                February 10, 2025
              </p>
              <a
                href="/webinar-detail"
                className="text-blue-500 hover:text-blue-600"
              >
                Join Webinar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineLearning;
