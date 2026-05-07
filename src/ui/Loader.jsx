function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1.5px] bg-white/30">
      <div className="flex space-x-4">
        <span className="w-6 h-6 bg-orange-500 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-6 h-6 bg-orange-500 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-6 h-6 bg-orange-500 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default Loader;
