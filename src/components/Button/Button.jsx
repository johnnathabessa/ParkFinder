export default function Button ({onClick= () => {}, children, type = "button"}) {
    return (
        <div>
              <button type="submit" type={type} onClick={onClick} className="block w-full p-2 text-center font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                {children}
              </button>
          </div>
    )
}