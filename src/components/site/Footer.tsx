import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import brand from "@/assets/ihsri-brand.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-forest text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={brand.url}
              alt=""
              className="h-12 w-12 rounded-full object-cover ring-1 ring-cream/20"
              width={48}
              height={48}
            />
            <div>
              <div className="font-display text-base font-semibold">
                Integrated Health Systems and Rehabilitation Initiative
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-cream/70">
                Restoring function. Strengthening systems.
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/80">
            IHESRI advances rehabilitation, disability inclusion and community health by
            strengthening health systems, expanding access to assistive technologies, and
            inspiring the next generation of rehabilitation professionals.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/70">
            Connect
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={14} /> integratedhsri@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +2349138715016</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Calabar, Cross River State</li>
            <li className="flex items-center gap-2"><Facebook size={14} /> Integrated Health Systems And Rehabilitation Initiative</li>
            <li className="flex items-center gap-2"><Linkedin size={14} /> IHESRI</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Integrated Health Systems and Rehabilitation Initiative. All rights reserved.</p>
          <p>Built with care for communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
