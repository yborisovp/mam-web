import { useLocation } from "react-router-dom";

export const OAuth = () => {
    const { state } = useLocation();
    console.log(state);
}
