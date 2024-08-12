const Error = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <p className="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center">
      {children}
    </p>
  )
}

export default Error