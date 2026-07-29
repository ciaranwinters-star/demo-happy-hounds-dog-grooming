import ContactForm from "./ContactForm"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#35707F" }} className="text-white relative flex items-end md:items-center overflow-hidden min-h-[78svh] md:min-h-[85vh]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/supplied_1.webp" />
          <img src="/images/supplied_4.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(0deg, rgba(13,17,22,0.92) 0%, rgba(13,17,22,0.72) 32%, rgba(13,17,22,0.18) 68%, rgba(13,17,22,0.05) 100%)" }} />
        <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(90deg, rgba(13,17,22,0.86) 0%, rgba(13,17,22,0.64) 38%, rgba(13,17,22,0.30) 70%, rgba(13,17,22,0.10) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-4 pb-14 pt-28 md:py-24 w-full animate-fade-in-up flex flex-col">
          <div className="order-1 md:order-4">

          </div>
          <h1 className="order-2 md:order-1 text-[2.1rem] md:text-6xl font-bold mb-4 md:mb-6 leading-[1.08] md:leading-[1.05] tracking-tight max-w-2xl [text-wrap:balance]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Happy Hounds Dog Grooming, Ballivor</h1>
          <p className="order-3 md:order-2 text-lg md:text-xl mb-8 md:mb-10 opacity-95 max-w-xl leading-relaxed [text-wrap:balance]" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>Your pup leaves happy, healthy, and beautifully groomed.</p>
          <div className="order-4 md:order-3 hidden md:flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" style={{ background: "#D9789C" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl inline-flex items-center justify-center gap-2">
              Get in touch
            </a>
            <span className="border-2 border-white/70 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 select-all">
              📞 085 837 3432
            </span>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium"><a href="https://www.google.com/maps/search/?api=1&query=Happy%20Hounds%20dog%20grooming%20Main%20St%2C%20Kilballivor%2C%20Ballivor%2C%20Co.%20Meath%2C%20Ireland&query_place_id=ChIJoaRATACLXUgRmPiQHG8Qt_M" target="_blank" rel="noopener noreferrer" className="hover:underline">📍 Ballivor, Co. Meath</a></div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium"><a href="tel:0858373432" className="md:hidden hover:underline">📞 085 837 3432</a><span className="hidden md:inline">📞 085 837 3432</span></div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">🕐 Today: 12:30 – 5:30 PM</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">✓ Local to Ballivor, Co. Meath</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 scroll-mt-24" style={{ background: "#FBF6F8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 [text-wrap:balance]" style={{ color: "#35707F" }}>About Happy Hounds dog grooming</h2>
          <p className="text-lg text-gray-600 leading-relaxed [text-wrap:balance]">Happy Hounds is your local dog groomer on Main Street in Kilballivor, Ballivor, Co. Meath. We're here to make sure your dog gets the care and attention they deserve, whether it's a full groom, a tidy-up, or a special occasion finish. Give us a ring on 085 837 3432 or drop us a message on WhatsApp—we're warm, we're friendly, and we genuinely love working with dogs.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#35707F" }}>What we offer</h2>
          <p className="text-center text-gray-500 mb-12">Built for Ballivor, Co. Meath — clear, simple, dependable.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">🛁</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Full Groom</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Complete wash, dry, and cut tailored to your dog's breed and coat type.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Full%20Groom%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">🐾</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Bath and Tidy</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Wash and dry with a light trim to keep your pup neat between full grooms.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Bath%20and%20Tidy%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">⭐</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Show Preparation</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Professional grooming for dogs heading to the ring or a special event.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Show%20Preparation%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">🐶</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Puppy Grooming</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Gentle first grooms to help your young dog feel confident and comfortable.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Puppy%20Grooming%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">✂️</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Breed-Specific Cuts</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Tailored grooming for Doodles, Poodles, Terriers, and other coat types.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Breed-Specific%20Cuts%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#D9789C" }}>
          <div className="text-3xl mb-4">🦴</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#35707F" }}>Hand-Stripping & Specialty Work</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Expert finishing for breeds needing that extra care and technique.</p>
          <a href="https://wa.me/353858373432?text=Hi%20Happy%20Hounds%20dog%20grooming%2C%20I%27d%20like%20to%20enquire%20about%20your%20Hand-Stripping%20%26%20Specialty%20Work%20service." target="_blank" rel="noopener noreferrer" className="mt-4 md:hidden inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#D9789C" }}>💬 Enquire about this →</a>
          <a href="#contact" className="mt-4 hidden md:inline-block font-semibold text-sm hover:underline" style={{ color: "#D9789C" }}>Enquire about this →</a>
        </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#35707F" }}>A look at our work</h2>
          <p className="text-center text-gray-500 mb-12">Recent photos from Ballivor, Co. Meath.</p>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 [&>figure]:snap-center [&>figure]:shrink-0 [&>figure]:w-[78%] md:[&>figure]:w-auto">
        <figure>
          <img src="/images/supplied_1.webp" alt="Doodles and Poodles, show-ready" loading="lazy" className="rounded-2xl object-cover object-center w-full aspect-[4/3] shadow-md hover:shadow-xl transition-shadow" />
          <figcaption className="mt-2 text-sm text-gray-500">Doodles and Poodles, show-ready</figcaption>
        </figure>
        <figure>
          <img src="/images/supplied_3.webp" alt="Puppies love their first groom here" loading="lazy" className="rounded-2xl object-cover object-center w-full aspect-[4/3] shadow-md hover:shadow-xl transition-shadow" />
          <figcaption className="mt-2 text-sm text-gray-500">Puppies love their first groom here</figcaption>
        </figure>
        <figure>
          <img src="/images/supplied_6.webp" alt="Every breed, every coat, every dog" loading="lazy" className="rounded-2xl object-cover object-center w-full aspect-[4/3] shadow-md hover:shadow-xl transition-shadow" />
          <figcaption className="mt-2 text-sm text-gray-500">Every breed, every coat, every dog</figcaption>
        </figure>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#35707F" }}>Before &amp; after</h2>
          <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">Example gallery — your own before &amp; afters go here.</p>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 [&>figure]:snap-center [&>figure]:shrink-0 [&>figure]:w-[85%] md:[&>figure]:w-auto">
          <figure className="relative rounded-2xl overflow-hidden shadow-md">
            <img src="/images/ba_1.webp" alt="Example of a dog before and after grooming" loading="lazy" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest text-white" style={{ background: "linear-gradient(0deg, rgba(13,17,22,0.75) 0%, rgba(13,17,22,0) 100%)" }}>
              <span>Before</span><span>After</span>
            </figcaption>
          </figure>
          <figure className="relative rounded-2xl overflow-hidden shadow-md">
            <img src="/images/ba_2.webp" alt="Example of a dog before and after grooming" loading="lazy" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest text-white" style={{ background: "linear-gradient(0deg, rgba(13,17,22,0.75) 0%, rgba(13,17,22,0) 100%)" }}>
              <span>Before</span><span>After</span>
            </figcaption>
          </figure>
          <figure className="relative rounded-2xl overflow-hidden shadow-md">
            <img src="/images/ba_3.webp" alt="Example of a dog before and after grooming" loading="lazy" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-3 text-xs font-bold uppercase tracking-widest text-white" style={{ background: "linear-gradient(0deg, rgba(13,17,22,0.75) 0%, rgba(13,17,22,0) 100%)" }}>
              <span>Before</span><span>After</span>
            </figcaption>
          </figure>
          </div>
        </div>
      </section>
      {/* Real Google reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#35707F" }}>What our customers say</h2>
          <p className="text-center text-gray-500 mb-12">Sample reviews — for demo preview only, not real customer reviews.</p>
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 [&>div]:snap-center [&>div]:shrink-0 [&>div]:w-[85%] md:[&>div]:w-auto">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Brought my Goldendoodle in nervous, she came out wagging her tail. Brilliant.&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#D9789C" }}>— Sarah, Ballivor</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Best groom my Wheaten's ever had. The staff are so warm with the dogs.&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#D9789C" }}>— Padraig, Kilballivor</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;My pup's been twice now. Happy Hounds know exactly what they're doing.&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#D9789C" }}>— Claire, Meath</p>
        </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 scroll-mt-24" style={{ background: "#FBF6F8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#35707F" }}>Questions we get asked</h2>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>What are your opening hours?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#D9789C" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">We're open Monday to Saturday, 12:30 to 5:30 PM. We're closed on Sundays. Ring us on 085 837 3432 to book your pup's appointment.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Where are you located?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#D9789C" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">We're on Main Street in Kilballivor, Ballivor, Co. Meath. Easy to find and easy to park.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Can I book over WhatsApp?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#D9789C" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">Absolutely. Drop us a message on WhatsApp on 085 837 3432 and we'll sort you out. We're happy to chat that way.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>How long does a groom take?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#D9789C" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">It depends on your dog's size, coat type, and what work they need. Best to ring or message us and we can give you a time that works for your pup.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Is my dog safe with you?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#D9789C" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">Your dog is in good hands. We take our time, we're gentle, and we genuinely care about making sure every pup feels happy and looked after while they're with us.</p>
          </details>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 px-4 scroll-mt-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#35707F" }}>Get in touch</h2>
          <p className="text-center text-gray-500 mb-12">Book in or ask a question — we come straight back to you.</p>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ContactForm />
            <div className="space-y-5">
              <a href="https://www.google.com/maps/search/?api=1&query=Happy%20Hounds%20dog%20grooming%20Main%20St%2C%20Kilballivor%2C%20Ballivor%2C%20Co.%20Meath%2C%20Ireland&query_place_id=ChIJoaRATACLXUgRmPiQHG8Qt_M" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group"><span className="text-xl">📍</span><span><span className="block font-semibold" style={{ color: "#35707F" }}>Find us</span><span className="text-gray-600 text-sm group-hover:underline">Main St, Kilballivor, Ballivor, Co. Meath, Ireland</span></span></a>
              <a href="tel:0858373432" className="flex md:pointer-events-none items-start gap-3 group"><span className="text-xl">📞</span><span><span className="block font-semibold" style={{ color: "#35707F" }}>Call us</span><span className="text-gray-600 text-sm group-hover:underline">085 837 3432</span></span></a>
              <div><p className="font-semibold mb-2" style={{ color: "#35707F" }}>Opening hours</p><div className="rounded-xl border border-gray-100 p-4 text-sm"><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Monday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Tuesday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Wednesday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Thursday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Friday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Saturday</span><span className="font-medium text-gray-800">12:30 – 5:30 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Sunday</span><span className="font-medium text-gray-800">Closed</span></div></div></div>
              <a href="https://www.facebook.com/61582327680786" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-bold text-white hover:opacity-90 transition" style={{ background: "#1877F2" }}>Follow us on Facebook →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Where to find us */}
      <section className="py-20 px-4" style={{ background: "#FBF6F8" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#35707F" }}>Where to find us</h2>
          <p className="text-center text-gray-500 mb-10">Main St, Kilballivor, Ballivor, Co. Meath, Ireland</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe src="https://maps.google.com/maps?q=Happy%20Hounds%20dog%20grooming%20Main%20St%2C%20Kilballivor%2C%20Ballivor%2C%20Co.%20Meath%2C%20Ireland&z=16&output=embed" width="100%" height="420" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/search/?api=1&query=Happy%20Hounds%20dog%20grooming%20Main%20St%2C%20Kilballivor%2C%20Ballivor%2C%20Co.%20Meath%2C%20Ireland&query_place_id=ChIJoaRATACLXUgRmPiQHG8Qt_M" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#35707F" }}>
              Get directions on Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#D9789C" }} className="py-20 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ring 085 837 3432 to book your pup's appointment</h2>
          <p className="text-lg mb-10 opacity-95 md:hidden">Tap WhatsApp and we'll get straight back to you.</p>
          <p className="text-lg mb-10 opacity-95 hidden md:block">Send us a message and we'll come straight back to you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/353858373432?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" className="md:hidden bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl inline-flex items-center justify-center gap-2" style={{ color: "#D9789C" }}>
              💬 WhatsApp Us
            </a>
            <a href="#contact" className="hidden md:inline-flex bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl items-center justify-center gap-2" style={{ color: "#D9789C" }}>
              Send us a message
            </a>
            <a href="tel:0858373432" className="md:hidden border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">📞 085 837 3432</a>
            <span className="hidden md:inline-flex border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg items-center justify-center select-all">📞 085 837 3432</span>
          </div>
        </div>
      </section>
    </>
  )
}
