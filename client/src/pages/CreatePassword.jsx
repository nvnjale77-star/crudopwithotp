const CreatePassword = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Create Password
          </h1>

          <p className="text-zinc-500 text-sm">
            Create a strong password for your account
          </p>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white transition"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none focus:border-white transition"
          />
        </div>

        {/* Button */}
        <button
          type="button"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition"
        >
          Create Password
        </button>

      </div>

    </div>
  );
};

export default CreatePassword;
