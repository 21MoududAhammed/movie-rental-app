import star from '../assets/star.svg'
export default function Rating({value}){
    let rating =[];
 for(let i = 1; i <= value; i++){
    rating.push(<img src={star} width="14" height="14" alt="" />)  
 }
 return rating;
}