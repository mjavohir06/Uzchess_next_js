

const ConnectInput = () => {
    return (
        <div className="w-full sm:w-158 grid gap-6 ">
            <div className="grid grid-cols-1 w-full gap-5 sm:grid-cols-2">
                <div className="">
                    <p className="text-[15px]">Siz bilan bog‘lanish</p>
                    <input type="text" placeholder="Ism familiyangizni kiriting" className="rounded-lg bg-[#13181C] border border-[#36393B] w-full h-11 pl-4 mt-1" />
                </div>
                <div className="">
                    <p className="text-[15px]">Telefon raqamingiz</p>
                    <div className="telinput">
                        <div><p>+998</p></div>
                        <div>
                            <input type="text" placeholder="_ _  _ _ _  _ _  _ _" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <p>Shikoyat</p>
                <textarea className="bg-[#13181C] border border-[#454F54] w-full min-h-32 pt-3.5 pl-4 text-[14px] mt-1" placeholder="Math yozing..."></textarea>
            </div>
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-1">
                    <input type="checkbox" className=" w-6 h-6" />
                    <p className="text-[16px] max-w-55">Foydalanish <span className="text-blue-600">shartlari</span> va <span className="text-blue-600">qoidalarini</span> qabul qilaman</p>
                </div>
                <div className="w-45 h-11 rounded-lg bg-[#1C92E0] text-center flex items-center justify-center active:scale-98">
                    <p className="text-[16px]">Yuborish</p>
                </div>
            </div>
        </div>
    )
}

export default ConnectInput
