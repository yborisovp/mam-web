import { useEffect, useState } from "react";
import { DealService } from "../../../Services/DealService";
import { DealUIModel } from "../../../Models/Deal";
import { Button } from "react-bootstrap";
import IndividualPostView from "../../IndivivdualPost/IndividualPostView";

export const DealsView = () => {
    const [deals, setDeals] = useState<DealUIModel[]>();
    
  useEffect(() => {
    getDeals();
  }, []);

  const getDeals = async () => {
    const d = await DealService.GetAllDealsByCurrentUser();
    setDeals(d);
    console.log(d);
  }

  const dealsView = () => {
    return(<div>
    {deals === undefined ? (<>Нету активных сделок</>) : (<></>)}</div>)
  }

  return (<>{dealsView()}</>)
  
};

export default DealsView;
