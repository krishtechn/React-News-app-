import React from 'react';

const Alerts = (props) => {
    const capitalize = (word)=>{
        let newtext = word.toLowerCase();
        return newtext.charAt(0).toUpperCase();
    }
  return (
   props.alert && <>
      <div style={{height:50,}} class="alert alert-warning alert-dismissible fade show h-5" role="alert">
        <strong>{props.alert.msg}</strong> {props.alert.type}
      
      </div>
    </>
  );
};

export default Alerts;
