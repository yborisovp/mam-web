export const ReportsView = () => {
    return (
        <div className="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-12 ps-0 row mx-auto">

                    <div className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 mx-auto">
                        <div className="container d-flex flex-column gap-2 p-2 pt-2">
                            <div className="card p-4 mb-2 border">
                                <div className="row">
                                    <div className="">
                                        <p className="h4 col-12 mt-md-2 mt-2 mt-sm-2 mt-lg-0 mt-xl-0">Жалоба от пользователя Ярослав</p>
                                        <div className="pt-1 crop-text-1 desc text-f ">
                                            Агрессия в описании объявления
                                        </div>
                                    </div>
                                    <hr className="mt-3 mb-3" />
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                        <a href="Individual-post.html">
                                            <img
                                                className="rounded img-h2 w-100 h-100"
                                                src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/car-photography/car-photography_fb-img_1200x800.jpg"
                                            />
                                        </a>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                        <div className="row mt-md-3 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
                                            <p className="h4 col-6 ">Audi Q3</p>
                                            <p className="h3 col-6 text-all-end">4500000 ₽</p>
                                        </div>
                                        <p className="h6 pt-3 text-color-demigray">БУ</p>
                                        <div className="pt-1 crop-text-1 desc text-f">
                                            Да как вы мне все дороги!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}
