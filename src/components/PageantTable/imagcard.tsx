import React from "react"
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardContent } from "@material-ui/core";
interface Props{
    srcs:string,
    texts:string,
}
const Imgs=(Props : Props) => {
    const{srcs,texts}=Props;
return(
    <Card >
    <div >
        <CardContent >
          <div style={{position: 'relative'}} >
            <CardMedia
                component="img"
                
                image={srcs}
            />
            <div style={{position: 'absolute', color: 'white', top: 8, left: '25%', transform: 'translateX(-50%)'}} >{texts}</div>
          </div>
        </CardContent>
    </div>                
</Card>        

);
};
export default Imgs;