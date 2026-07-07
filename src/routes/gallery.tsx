import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import g01 from "@/assets/gallery/gallery-01.jpeg";
import g02 from "@/assets/gallery/gallery-02.jpeg";
import g03 from "@/assets/gallery/gallery-03.jpeg";
import g04 from "@/assets/gallery/gallery-04.jpeg";
import g05 from "@/assets/gallery/gallery-05.jpeg";
import g06 from "@/assets/gallery/gallery-06.jpeg";
import g07 from "@/assets/gallery/gallery-07.jpeg";
import g08 from "@/assets/gallery/gallery-08.jpeg";
import g09 from "@/assets/gallery/gallery-09.jpeg";
import g10 from "@/assets/gallery/gallery-10.jpeg";
import g11 from "@/assets/gallery/gallery-11.jpeg";
import g12 from "@/assets/gallery/gallery-12.jpeg";
import g13 from "@/assets/gallery/gallery-13.jpeg";
import g14 from "@/assets/gallery/gallery-14.jpeg";
import g15 from "@/assets/gallery/gallery-15.jpeg";
import g16 from "@/assets/gallery/gallery-16.jpeg";
import g17 from "@/assets/gallery/gallery-17.jpeg";
import g18 from "@/assets/gallery/gallery-18.jpeg";
import g19 from "@/assets/gallery/gallery-19.jpeg";
import g20 from "@/assets/gallery/gallery-20.jpeg";
import g21 from "@/assets/gallery/gallery-21.jpeg";
import g22 from "@/assets/gallery/gallery-22.jpeg";
import g23 from "@/assets/gallery/gallery-23.jpeg";
import g24 from "@/assets/gallery/gallery-24.jpeg";
import g25 from "@/assets/gallery/gallery-25.jpeg";
import g26 from "@/assets/gallery/gallery-26.jpeg";
import g27 from "@/assets/gallery/gallery-27.jpeg";
import g28 from "@/assets/gallery/gallery-28.jpeg";
import g29 from "@/assets/gallery/gallery-29.jpeg";
import g30 from "@/assets/gallery/gallery-30.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery - IHESRI" },
      {
        name: "description",
        content: "Photos from IHESRI's events, outreach and community programs.",
      },
      { property: "og:title", content: "IHESRI Event Gallery" },
      {
        property: "og:description",
        content: "Moments from our rehabilitation outreach, training and community events.",
      },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  g01, g02, g03, g04, g05, g06, g07, g08, g09, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
  g21, g22, g23, g24, g25, g26, g27, g28, g29, g30,
].map((src, i) => ({ src, alt: `IHESRI event photo ${i + 1}` }));

function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Event Gallery</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Moments from our work in the field.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A look at IHESRI's outreach, training sessions and community events —
            rehabilitation in action.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {photos.map((photo, index) => (
              <Reveal key={photo.src} delay={(index % 10) * 60}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group aspect-square w-full overflow-hidden rounded-xl bg-muted"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex animate-in items-center justify-center bg-black/90 p-4 fade-in-0 duration-200"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
          >
            <ChevronLeft size={22} />
          </button>

          <img
            key={activeIndex}
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className="max-h-[85vh] max-w-[90vw] animate-in rounded-lg object-contain fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </SiteShell>
  );
}
