const Home = () => {
  const trendingMovies = [
    {
      title: "The Last Journey",
      year: "2026",
      genre: "Action",
      rating: "8.9",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    },
    {
      title: "Dark Horizon",
      year: "2026",
      genre: "Thriller",
      rating: "8.6",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    },
    {
      title: "Beyond Space",
      year: "2025",
      genre: "Sci-Fi",
      rating: "9.1",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    },
    {
      title: "The Unknown",
      year: "2026",
      genre: "Mystery",
      rating: "8.4",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    },
    {
      title: "Lost World",
      year: "2025",
      genre: "Adventure",
      rating: "8.8",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    },
    {
      title: "Nightfall",
      year: "2026",
      genre: "Drama",
      rating: "8.7",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    },
  ];

  const continueWatching = [
    {
      title: "The Last Journey",
      progress: "72%",
      time: "48m left",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    },
    {
      title: "Dark Horizon",
      progress: "43%",
      time: "1h 12m left",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    },
    {
      title: "Beyond Space",
      progress: "81%",
      time: "24m left",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    },
    {
      title: "Nightfall",
      progress: "35%",
      time: "1h 04m left",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50">

        <div className="bg-gradient-to-b from-black via-black/80 to-transparent">

          <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-5">

            <div className="flex items-center justify-between">

              {/* Logo */}

              <div className="flex items-center gap-2">

                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center font-black text-lg">
                  S
                </div>

                <h1 className="text-xl md:text-2xl font-black tracking-tight">
                  STREAM<span className="text-red-600">X</span>
                </h1>

              </div>


              {/* Navigation */}

              <div className="hidden md:flex items-center gap-8 text-sm">

                <a
                  href="#"
                  className="text-white font-semibold"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Movies
                </a>

                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Series
                </a>

                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition"
                >
                  My List
                </a>

              </div>


              {/* Right */}

              <div className="flex items-center gap-4">

                <button className="hidden sm:block text-xl hover:scale-110 transition">
                  ⌕
                </button>

                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-800 border border-zinc-700 flex items-center justify-center">
                  👤
                </div>

              </div>

            </div>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="relative min-h-[720px] md:min-h-[800px] overflow-hidden">

        {/* Background */}

        <img
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />


        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />


        {/* Hero Content */}

        <div className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-10 pt-48 md:pt-56">

          <div className="max-w-2xl">

            {/* Badge */}

            <div className="flex items-center gap-3 mb-5">

              <span className="bg-red-600 px-3 py-1 rounded-md text-xs font-bold">
                #1 TRENDING
              </span>

              <span className="text-zinc-300 text-sm">
                2026 • 2h 18m • 16+
              </span>

            </div>


            {/* Title */}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              THE LAST
              <br />
              <span className="text-red-600">
                JOURNEY
              </span>
            </h1>


            {/* Description */}

            <p className="mt-7 text-zinc-300 text-sm md:text-base leading-7 max-w-xl">
              When a mysterious signal reaches Earth, a group of
              explorers begins a dangerous journey beyond the limits
              of known space.
            </p>


            {/* Meta */}

            <div className="flex items-center gap-5 mt-5 text-sm">

              <span className="text-yellow-400">
                ★ 8.9
              </span>

              <span className="text-zinc-400">
                IMDb
              </span>

              <span className="text-zinc-400">
                Sci-Fi
              </span>

              <span className="text-zinc-400">
                4K
              </span>

            </div>


            {/* Buttons */}

            <div className="flex flex-wrap gap-3 mt-8">

              <button className="bg-white text-black px-7 py-3 rounded-lg font-bold hover:bg-zinc-200 hover:scale-105 transition">
                ▶ Play Now
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-7 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                ＋ My List
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}

      <main className="relative -mt-20 z-20">


        {/* ================= CONTINUE WATCHING ================= */}

        <section className="max-w-[1500px] mx-auto px-5 md:px-10 mb-14">

          <div className="flex items-center justify-between mb-5">

            <div>
              <p className="text-xs text-red-500 font-bold tracking-widest">
                KEEP WATCHING
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                Continue Watching
              </h2>
            </div>

            <button className="text-sm text-zinc-400 hover:text-white">
              See All →
            </button>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {continueWatching.map((movie, index) => (

              <div
                key={index}
                className="group bg-zinc-900/70 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition"
              >

                <div className="relative aspect-video overflow-hidden">

                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

                  <button className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    ▶
                  </button>

                </div>


                <div className="p-4">

                  <div className="flex justify-between">

                    <h3 className="font-semibold">
                      {movie.title}
                    </h3>

                    <span className="text-xs text-zinc-500">
                      {movie.time}
                    </span>

                  </div>


                  <div className="mt-3 h-1 bg-zinc-700 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-red-600"
                      style={{
                        width: movie.progress,
                      }}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= TRENDING ================= */}

        <section className="max-w-[1500px] mx-auto px-5 md:px-10 mb-16">

          <div className="flex items-end justify-between mb-6">

            <div>

              <p className="text-xs text-red-500 font-bold tracking-widest">
                DISCOVER
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-1">
                Trending Now
              </h2>

            </div>

            <button className="text-sm text-zinc-400 hover:text-white">
              View All →
            </button>

          </div>


          {/* Cards */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

            {trendingMovies.map((movie, index) => (

              <div
                key={index}
                className="group cursor-pointer"
              >

                {/* Poster */}

                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900">

                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />


                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />


                  {/* Number */}

                  <div className="absolute top-3 left-3">

                    <span className="bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs font-bold">
                      #{index + 1}
                    </span>

                  </div>


                  {/* Rating */}

                  <div className="absolute top-3 right-3">

                    <span className="bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs text-yellow-400">
                      ★ {movie.rating}
                    </span>

                  </div>


                  {/* Hover Play */}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                      ▶
                    </div>

                  </div>


                  {/* Bottom Info */}

                  <div className="absolute bottom-0 left-0 right-0 p-4">

                    <h3 className="font-bold text-sm">
                      {movie.title}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-1">
                      {movie.year} • {movie.genre}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= GENRES ================= */}

        <section className="max-w-[1500px] mx-auto px-5 md:px-10 pb-20">

          <div className="mb-6">

            <p className="text-xs text-red-500 font-bold tracking-widest">
              BROWSE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-1">
              Explore Genres
            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              ["Action", "💥"],
              ["Sci-Fi", "🚀"],
              ["Thriller", "🔪"],
              ["Adventure", "🌎"],
            ].map(([genre, icon], index) => (

              <div
                key={index}
                className="relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-600 hover:-translate-y-1 transition cursor-pointer flex items-center justify-between px-6"
              >

                <h3 className="text-xl font-bold">
                  {genre}
                </h3>

                <span className="text-4xl">
                  {icon}
                </span>

              </div>

            ))}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-900 bg-black">

        <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>

              <h2 className="text-2xl font-black">
                STREAM<span className="text-red-600">X</span>
              </h2>

              <p className="text-zinc-500 text-sm mt-2">
                Your world of entertainment.
              </p>

            </div>


            <div className="flex gap-8 text-sm text-zinc-500">

              <a href="#" className="hover:text-white">
                About
              </a>

              <a href="#" className="hover:text-white">
                Privacy
              </a>

              <a href="#" className="hover:text-white">
                Terms
              </a>

              <a href="#" className="hover:text-white">
                Help
              </a>

            </div>

          </div>


          <div className="border-t border-zinc-900 mt-8 pt-6 text-xs text-zinc-600">
            © 2026 StreamX. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;

