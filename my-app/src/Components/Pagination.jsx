export const Pagination = ({ total, selected, onPageChange }) => {

  

  return <div style={{display:"flex"}} className="pageContainer">
      {new Array(total).fill(1).map((el,i)=>{
        return <div key={i} onClick={()=>onPageChange} target={selected} >{i}</div>
      })}
  </div>;
};
