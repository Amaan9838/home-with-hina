import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://10web-site.ai/265/wp-content/uploads/sites/277/2025/01/tenweb_media_yCK5Yewn.webp"
        alt="Luxury Home"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <main className="relative z-10 px-4 pt-20 md:pt-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl text-white font-semibold mb-4">
            Discover Your <span className="border-b-4 border-white">Dream Home</span>
            <br />Today
          </h1>
          
          <p className="max-w-3xl mx-auto text-white text-lg md:text-xl mb-12 leading-relaxed">
            Experience the epitome of luxury living with our exclusive range of 1BHK, 2BHK, 
            and 3BHK flats. Home with Hina offers unparalleled elegance and comfort, 
            designed to meet your every need. Explore our premium properties and find your 
            perfect sanctuary.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="text-white shadow-[2px_2px_0px_0px_rgb(255,255,255)] px-6 py-3 rounded-3xl border-white bg-[#8d6d36] hover:opacity-80  border">
              View Listings
            </button>
            <button className="px-8 py-3 border border-white shadow-[2px_2px_0px_0px_rgb(255,255,255)] text-white rounded-full hover:bg-[#8d6d36] hover:opacity-80 transition w-full md:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
