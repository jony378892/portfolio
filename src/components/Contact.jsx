import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Mail, MapPin, Phone } from "lucide-react";

// Fix Leaflet's icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Map Component
function MapView() {
  return (
    <MapContainer
      center={[24.012668149207197, 90.32292031756714]}
      zoom={13}
      className="h-[280px] w-full rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[24.012668149207197, 90.32292031756714]}>
        <Popup>Hello from Dhaka!</Popup>
      </Marker>
    </MapContainer>
  );
}

// PersonalDetails Component

function PersonalDetails() {
  return (
    <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 flex flex-col gap-5 border border-white/10 shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-white">Contact Details</h3>
      <div className="flex items-center gap-3">
        <span className="bg-white/10 p-2 rounded-full">
          <MapPin size={20} className="text-gray-200" />
        </span>
        <div>
          <p className="text-sm text-white/70">Location</p>
          <p className="text-sm text-white">Gazipur Sadar, Gazipur</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-white/10 p-2 rounded-full">
          <Phone size={20} className="text-gray-200" />
        </span>
        <div>
          <p className="text-sm text-white/70">Phone</p>
          <p className="text-sm text-white">01521575254</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-white/10 p-2 rounded-full">
          <Mail size={20} className="text-gray-200" />
        </span>
        <div>
          <p className="text-sm text-white/70">Email</p>
          <p className="text-sm text-white">jony378892@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <section className="w-full max-w-4xl xl:max-w-5xl mx-auto px-5 lg:px-0 pb-10 mt-10 text-base xl:text-lg text-white">
      <h2 className="text-4xl font-semibold text-center">Get in Touch</h2>
      <p className="mt-4 text-center max-w-xl mx-auto">
        Whether you have a question, want to start a project, or just want to
        connect — feel free to reach out.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-5 rounded-xl shadow-lg overflow-hidden border border-white/20 px-5 py-10">
        {/* Form Section */}
        <form className="w-full md:w-1/2  border-white/20 bg-black/30  flex flex-col gap-6 text-sm">
          <h3 className="text-xl font-medium mb-2">
            Let's build something great.
          </h3>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="company" className="mb-1 font-medium">
              Company (optional)
            </label>
            <input
              type="text"
              id="company"
              placeholder="Your Company"
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 py-3 px-6 bg-white text-black font-semibold rounded-md hover:bg-white/80 transition"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 ">
          <MapView />
          <PersonalDetails />
        </div>
      </div>
    </section>
  );
}

export default Contact;
