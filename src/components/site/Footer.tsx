import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail } from "lucide-react";
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
                Integrated Health Systems &amp; Rehabilitation Initiative
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-cream/70">
                Rehabilitation at the core of primary health care
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/80">
            We design and implement evidence-based, integrated rehabilitation programs
            that strengthen health systems and expand equitable access to assistive
            technologies.
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
            <li className="flex items-center gap-2"><Mail size={14} /> hello@ihsri.org</li>
            <li className="flex items-center gap-2"><Facebook size={14} /> Facebook</li>
            <li className="flex items-center gap-2"><Linkedin size={14} /> LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Integrated Health Systems &amp; Rehabilitation Initiative. All rights reserved.</p>
          <p>Built with care for communities everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
