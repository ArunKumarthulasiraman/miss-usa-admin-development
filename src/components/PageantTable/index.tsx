import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import Avatar from '@material-ui/core/Avatar';
//import Imgs from "../PageantTable/imagcard";
//import Grid from '@material-ui/core/Grid';
const Table = styled.table`
border-collapse: collapse;
text-align: left;
width:100%;
`;
const TableRow = styled.tr`  
`;
const TableHead = styled.th`
background: papayawhip;
text-align: left;
color:E1B2AC;
padding: 12px;
width:14%;
`;
const TableData = styled.td`
padding: 12px;
font-size: 14px;
text-align: left;
width:14%;
`;
/*const Div=styled.div`
   display:flex;
   width:100%;
   margin-top:10px;
   heigth:25%;
   padding-left:10px;
`;*/
interface Props{
  ModuleType:string,
  PageantName:string,
  Date:string,
  Venue:string,
  TicketPrice:string,
  img1:string,
  cusname:string,
}
const Tables =(Props : Props) => {
 const{ModuleType,PageantName,Date,Venue,TicketPrice,img1,cusname}=Props;
 const Color={
     color:'F5290C'
 }
return(
    <>
    <Table>
    <TableRow>
        <TableHead>ModuleType</TableHead>
        <TableHead>PageantName</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Venue</TableHead>
        <TableHead>customerName</TableHead>
        <TableHead>TicketPrice</TableHead>
        <TableHead>Action</TableHead>
     </TableRow>
     <TableRow>
        <TableData>{ModuleType}</TableData>
        <TableData>{PageantName}</TableData>
        <TableData>{Date}</TableData>          
        <TableData>{Venue}</TableData>
        <TableData><div style={{display:'inline-flex'}}><Avatar src={img1} style={{width:'30px',height:'30px'}}/>&ensp;{cusname}</div></TableData>
        <TableData>{TicketPrice}</TableData>
        <TableData >               
            <BsPencil/>&ensp;
            <AiOutlineDelete style={Color}/>
        </TableData>
     </TableRow>
    </Table> 
    </>
);
};
export default Tables;
