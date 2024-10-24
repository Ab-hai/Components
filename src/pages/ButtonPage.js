import Button from '../components/Button';
import {GoBell,GoCloudDownload,GoAlert,GoDashboard} from "react-icons/go";

function ButtonPage (){

    const handleClick = () =>{

    };

return<div>
    <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
            <GoBell />
            Hola
            </Button>
    </div>
    <div>
        <Button secondary outline><GoCloudDownload/>Kemm cho</Button>
    </div>
    <div>
        <Button success><GoAlert/>
        3+5</Button>
    </div>
    <div>
        <Button danger><GoDashboard/>BHJWDHJ</Button>
    </div>
    <div>
        <Button warning rounded>TBSM$l</Button>
    </div>
</div>


}


export default ButtonPage;