import { Link, createSearchParams, useNavigate } from "react-router-dom";
import "./header.scss";
import { Button, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { UserModel } from "../../Models/User/IUser";
import { SearchModel } from "../../Models/Search/SearchModel";
import { ApplicationRoutes } from "../../RoutesConstants";
import { CookieService } from "../../Services/CookieDecoderService";
import { CookiesConstants } from "../CookiesConstants";

function Header() {
    const [searchTitle, setSearchTitle] = useState("");
    const [shouldRedirect, setRedirect] = useState(false);
    const [searchParams, setSearchParamsTitle] = useState("");
    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();

    useEffect(() => {
        if (CookieService.CheckCookie(CookiesConstants.UserCookie)) {
            const newUser = CookieService.DecodeCookie<UserModel>(CookiesConstants.UserCookie);
            setUser(newUser);
        }
        else {
            setUser(undefined)
        }

        const storage = localStorage.getItem("search");
    if (storage !== null) {
        let model: SearchModel = JSON.parse(storage);
        if (model.title !== null) {
            setSearchTitle(model.title);
        }
        
    }
    }, []);

    const handleKeyDown = async (event: any) => {
        if (event.key === 'Enter') {
            const model: SearchModel = {
                title: searchTitle,
                priceFrom: null,
                priceUntil: null,
                getCount:  null,
                skipCount: null
            }
            localStorage.setItem("search", JSON.stringify(model))
            setRedirect(true);
        }
    }

    useEffect(() => {
        if (shouldRedirect)
        {
            navigate({pathname: ApplicationRoutes.SearchRoute});
        }
    }, [navigate, searchParams, shouldRedirect])


    const nav = () => {
        if (user !== undefined) {
            return (
                <>
                    <div className="d-flex gap-2">
                        <span className="d-flex align-items-center" onClick={() => navigate(ApplicationRoutes.MePage)}>{user?.fullName}</span>
                        <Button variant="outline-secondary" onClick={() => navigate(ApplicationRoutes.CreateRoute)}>Создать объявление</Button>
                    </div>
                </>
            )
        }

        return (
            <div className="d-flex gap-2">
                <Button variant="primary" onClick={() => navigate(ApplicationRoutes.LoginPage)}>
                    Вход
                </Button>
                <Button variant="secondary" onClick={() => navigate(ApplicationRoutes.RegisterPage)}>
                    Регистрация
                </Button>
            </div>
        );
    };

    return (
        <div className="header-blue">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search ps-2 pe-2 m-1">
   
                    <div onClick={() => navigate(ApplicationRoutes.HomePage)} className="navbar-brand">
                        Мой Мир Авто
                    </div>

                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navcol-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navcol-1"
                    >
                        <form className="form-inline mr-auto w-100 ms-5 me-5" target="_self">
                            <div className="form-group">
                                <input
                                    className="form-control search-field"
                                    onChange={(e) => setSearchTitle(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    value={searchTitle}
                                    type="search"
                                    name="search"
                                    id="search-field"
                                />
                            </div>
                        </form>
                    </div>

                    {nav()}
             
            </nav>
        </div>
    );
}

export default Header;
