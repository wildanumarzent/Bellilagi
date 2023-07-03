interface PhotoReview {
  data?: ContentReview[];
}
const ContentReview: React.FC<PhotoReview> = (data) => {
  return (
    <>
      <span className="text-l font-bold p-3 lg:p-0 hidden lg:flex">FOTO & VIDIO PEMBELI</span>
      <div className="flex mb-8">
        <div className="lg:flex justify-start mt-3 gap-3 hidden">
          {data.data?.map((content) => (
            <img src={content.photo} className="w-[70px] bg-slate-400 rounded-md" alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentReview;
