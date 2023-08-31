const Error = ({ children }) => {
  return (
    <div className="w-full text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
      {children}
    </div>
  );
};

export default Error;
