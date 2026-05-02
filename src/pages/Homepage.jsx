import { useTranslation } from "react-i18next";

function Homepage() {
    const { t, i18n } = useTranslation();
    
    return(
        <div>
            <h1>{t("Main.title")}</h1>
            <p>{t("Main.desc")}</p>
        </div>
    )
}

export default Homepage;