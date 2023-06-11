import { Button} from "react-bootstrap";
import "./adminPanel.scss";
import { useState } from "react";
import { AdminsListView } from "./AdminsList/AdminsListView";
import { ReportsView } from "./Reports/ReportsView";

export const AdminPanel = () => {

    const [isAdminsSelected, selectAdmins] = useState(true);

    const views = () => {
        if (isAdminsSelected) {
            return (<AdminsListView/>)
        }
        return (<ReportsView/>)
    }
    return (
        <div className="container container-main">
            <div className="col-12 p-2 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none mt-2 justify-content-between ">
                <Button variant="secondary" className="w-100 me-1">Мои объявления</Button>
                <Button variant="secondary" className="w-100 ms-1">Избранные объявления</Button>
            </div>
            <div className="row">
                {views()}
                <div className="col-lg-2 d-none d-lg-block d-md-none d-sm-none hidden-md mb-3 gap-2">

                    <Button className="w-100 m-2" variant="secondary" onClick={() => selectAdmins(false)}>Объявления</Button>
                    <Button className="w-100 m-2" variant="secondary" onClick={() => selectAdmins(true)}>Администраторы</Button>
                </div>
            </div >
        </div >
    );
};
