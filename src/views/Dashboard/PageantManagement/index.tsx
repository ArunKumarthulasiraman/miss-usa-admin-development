import React from "react";
import Tables from "../../../components/PageantTable/index";
import AccountBg from "../../../assets/images/AccountBg.png";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
interface Props {}


const PageantManagement: React.FC = (props: Props) => {
  return (
    <>
    <h1>PageantManagement</h1><br/>
    <div>
      
      <Grid container spacing={2}>
      <Grid item xs={11}>    
           <h1>MU Preliminary Pageant</h1>
      </Grid>
      <Grid item xs={1}>
        <Button color="primary">All</Button>
      </Grid>
    </Grid>
      
      <Tables
      ModuleType= "Miss MU"
      PageantName="Miss Beauty"
      Date="08/01/2021"
      Venue="1901 Thornridge Cir.Shiloh,Hawaii 81063"
      TicketPrice="$200"
     img1={AccountBg}
      
      cusname="Jane Cooper "
      /> 
    </div>
    <div>
    
    <Grid container spacing={2}>
    <Grid item xs={11}>    
         <h1>MU Preliminary Pageant</h1>
    </Grid>
    <Grid item xs={1}>
      <Button color="primary">All</Button>
    </Grid>
  </Grid>
    
    <Tables
    ModuleType= "Miss MU"
    PageantName="Miss Beauty"
    Date="08/01/2021"
    Venue="1901 Thornridge Cir.Shiloh,Hawaii 81063"
    TicketPrice="$300"
    img1={AccountBg}
    
    cusname="Cody Fisher"
    /> 
  </div>
  </>
  );
};
export default PageantManagement;
