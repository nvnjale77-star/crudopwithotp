const OTP = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Verify OTP
          </h1>

          <p className="text-zinc-500 text-sm">
            Enter the OTP sent to your email
          </p>
        </div>

        {/* OTP Input */}
        <div className="mb-6">
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white text-center tracking-[0.5em] placeholder-zinc-600 placeholder:tracking-normal outline-none focus:border-white transition"
          />
        </div>

        {/* Verify Button */}
        <button
          type="button"
          className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Didn't receive the OTP?{" "}
          <button
            type="button"
            className="text-white font-medium hover:underline"
          >
            Resend OTP
          </button>
        </p>

        {/* Back to Login */}
        <p className="text-center text-sm text-zinc-500 mt-3">
          Back to{" "}
          <a
            href="/login"
            className="text-white font-medium hover:underline"
          >
            Login
          </a>
        </p>

      </div>

    </div>
  );
};

export default OTP;
