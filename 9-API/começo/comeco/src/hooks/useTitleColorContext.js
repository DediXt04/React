import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if (!context) {
        throw new Error('useTitleColorContext deve ser usado dentro de um TitleColorContextProvider');
    }

    return context;
};