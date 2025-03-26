export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-['Inter var',sans-serif]">
      <div className="w-full max-w-2xl bg-white  rounded-md p-4 space-y-4">
        {/* Suggested Reply Box */}
        <div className="bg-[#0062FF15] p-4 rounded-md relative">
          <div className="text-sm text-gray-800">
            <span className="text-[#1E1F24] font-medium text-[14px]">
              Vanilla AI
            </span>
            <span className="text-[#8B8D98] text-[12px] ml-1">Suggested</span>
            <p className="mt-2 text-[#1E1F24] font-normal text-[14px]">
              Oh no! Sad to hear that, but of course we can give a refund. Can
              you please provide your order number if you have one? Or email
              that you’ve used to make this purchase.
            </p>
          </div>
          <div className="mt-2 text-[#000107E1] text-[14px] underline cursor-pointer hover:underline">
            Reply with this message
          </div>
          <button className="absolute top-2 right-2 text-sm text-gray-500 flex items-center hover:underline">
            <img
              src="/images/loading.svg"
              alt="Loading"
              className="w-4 h-4 mr-2"
            />
            <span className="text-[#000107E1] text-[12px]">Regenerate</span>
          </button>
        </div>

        {/* Message Input Box */}
        {/* Message Input Box */}
        <div className="border rounded-md flex items-center px-4 py-2 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Typing"
            className="flex-1 outline-none border-none bg-transparent text-gray-700"
          />
          <div className="flex items-center space-x-4 ml-2">
            {/* Attach/File icon */}
            <button>
              <img src="/images/file.svg" alt="Attach" className="w-5 h-5" />
            </button>

            {/* Emoji icon */}
            <button>
              <img src="/images/emoji.svg" alt="Emoji" className="w-5 h-5" />
            </button>

            {/* Sparkle/Quick Reply icoN */}
            <button>
              <img
                src="/images/sparkle.svg"
                alt="Quick Reply"
                className="w-5 h-5"
              />
            </button>

            {/* Send button */}
            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center">
              <img src="/images/Vector.svg" alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
