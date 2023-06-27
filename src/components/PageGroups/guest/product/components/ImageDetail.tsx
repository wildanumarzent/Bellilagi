interface productProps {
  product?: IProductDetail;
}
const ImageDetail: React.FC<productProps> = ({ product }) => {
  return (
    <>
      <img src={product?.image} className="min-w-full rounded-lg" alt="" />
      <div className="lg:flex justify-start mt-3 gap-3 hidden">
        <img
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
          className="w-16 bg-slate-400 rounded-md"
          alt=""
        />
        <img
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
          className="w-16 bg-slate-400 rounded-md"
          alt=""
        />
        <img
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
          className="w-16 bg-slate-400 rounded-md"
          alt=""
        />
        <img
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
          className="w-16 bg-slate-400 rounded-md"
          alt=""
        />
      </div>
    </>
  );
};

export default ImageDetail;
