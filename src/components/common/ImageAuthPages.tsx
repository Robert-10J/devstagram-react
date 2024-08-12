const ImageAuthPages = (
  { urlImg, textAlt }: { urlImg: string, textAlt: string }
) => {
  return (
    <div className="md:w-6/12 p-5">
      <img src={urlImg} alt={textAlt} />
    </div>
  )
}

export default ImageAuthPages