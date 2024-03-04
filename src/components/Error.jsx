function Error({children}) {
    return (
        <div className="bg-red-800 text-white uppercase mb-5 p-3 text-center rounded-md font-bold">
            <p>{children}</p>
        </div>
    )
}

export default Error;