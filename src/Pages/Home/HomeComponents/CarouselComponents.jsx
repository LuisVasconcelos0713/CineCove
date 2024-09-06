import './CarouselComponents.css';
import '../../../Layout/MovieGrid/MovieGrid.css'
import {RiArrowDropRightLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const CarouselComponents = ({buttonLeft,buttonRight,classContainer,category,link}) => {
    return (
        <div className={"CarouselComponents"}>
            <div className={classContainer}>
                <div className={"container-category"}>
                    <h1>
                        <Link to={link}>{category}</Link>
                    </h1>
                </div>
                <div className="container-buttons">
                    <button className={"buttonLeft"} onClick={buttonLeft}><RiArrowDropRightLine
                        className={"buttonLeftArrow"}/></button>
                    <button className={"buttonRight"} onClick={buttonRight}><RiArrowDropRightLine
                        className={"buttonRightArrow"}/></button>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponents;