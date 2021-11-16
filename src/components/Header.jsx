export default function Header({ children, size }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-gray-500 mx-auto p-4">
        <h1 className={`text-center text-white font-semibold ${fontSize}`}>
          {children}
        </h1>
      </div>
    </header>
  );
}

// export default function Header({ children }) {
//   return (
//     <div className="bg-green-600 mx-auto p-4">
//       <h1 className="text-center font-semibold text-xl ">{children}</h1>
//     </div>
//   );
// }
