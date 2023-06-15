import { useNavigate } from "react-router-dom";
import { SellItemModel } from "../../Models/SellItem/SellItem";
import { ApplicationRoutes } from "../../RoutesConstants";
import MDEditor from "@uiw/react-md-editor";

interface IndividualPostProps {
    items: SellItemModel[]
}
export const IndividualPostView = ({items}: IndividualPostProps) => {
    const navigate = useNavigate();
    return (
        <>
        {items?.map((el) => {
          return (
            <div
              key={el.id}
              className="col-12 col-sm-12 col-md-6 col-ld-12 col-xl-12 p-0 cursor-pointer"
              onClick={() =>
                navigate(ApplicationRoutes.ItemRoute + "?id=" + el.id)
              }
            >
              <div className="container d-flex flex-column gap-2 p-1 pt-2">
                <div className="card p-4 border mb-2">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                    {el.files.length === 0 ? (<>Нет изображения</>): <img
                        alt=""
                        className="rounded img-h2 w-100 h-100"
                        src={el.files[0].filePath}
                        />}
                      
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                      <div className="row mt-md-3 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
                        <p className="h4 col-6 ">{el.title}</p>
                        <p className="h3 col-6 text-all-end">{el.price} ₽</p>
                      </div>
                      <p className="h6 pt-3 text-color-demigray">
                        {el.attributes.find((a) => a.key === "Type")?.value}
                      </p>
                      <div className="pt-1 crop-text-1 desc text-f">
                        <MDEditor.Markdown source={el.description}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </>
    );
}

export default IndividualPostView;
