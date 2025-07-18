import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

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
      center={[23.8103, 90.4125]}
      zoom={13}
      className="h-full w-full rounded-b-lg xl:rounded-b-none xl:rounded-r-lg rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[23.8103, 90.4125]}>
        <Popup>Hello from Dhaka!</Popup>
      </Marker>
    </MapContainer>
  );
}

// Contact Page
function Contact() {
  return (
    <section className="px-5 mt-10 max-w-6xl mx-auto text-base xl:text-lg text-white">
      <h2 className="text-4xl md:text-5xl font-semibold text-center">
        Get in Touch
      </h2>
      <p className="mt-4 text-center max-w-xl mx-auto">
        Whether you have a question, want to start a project, or just want to
        connect — feel free to reach out.
      </p>

      <div className="mt-10 flex flex-col xl:flex-row rounded-xl shadow-lg overflow-hidden border border-white/20">
        {/* Form Section */}
        <form className="w-full xl:w-1/2 bg-black/30 backdrop-blur-lg p-8 flex flex-col gap-6 text-sm">
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
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
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
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
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
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
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
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white resize-none"
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
        <div className="w-full xl:w-1/2 h-[450px] xl:h-auto p-5 rounded-xl">
          <MapView />
        </div>
      </div>
    </section>
  );
}

export default Contact;
