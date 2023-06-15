
const ServiceCard = () => {
    return (
        <div className="p-5 flex flex-start gap-3">
            <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png" className="w-[20px]" alt="" />
                    <span>Kategori</span>
                </div>
            </div>
            <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2023/4/27/4b81a081-0f97-4b9d-9ee1-8be5c938b14d.png" className="w-[20px]" alt="" />
                    <span>Handphone & tablet</span>
                </div>
            </div>
            <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png" className="w-[20px]" alt="" />
                    <span>Top-Up & Tagihan</span>
                </div>
            </div>
            {/* <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png" className="w-[20px]" alt="" />
                    <span>Perawatan Hewan</span>
                </div>
            </div> */}
            <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png" className="w-[20px]" alt="" />
                    <span>Travel & Entertainment</span>
                </div>
            </div>
            {/* <div className="border p-3 w-full rounded-full">
                <div className="flex space-x-3">
                    <img src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2023/4/27/8b1b8635-8822-4007-90c3-403aa53cd207.png" className="w-[20px]" alt="" />
                    <span>Keuangan</span>
                </div>
            </div> */}
            
        </div>
    );
}

export default ServiceCard;