import React from "react";

const RoleButton = function({role, changeRole}){

    const handleChangeRole = (e)=>{
        if(e.target.id==='admin'){
            changeRole(0);
        }
        if(e.target.id==='user'){
            changeRole(1);
        }
    }

    return(<div>
        <div style={{marginLeft: '5px'}}>
            {<p style={{fontWeight: 'bold'}}>Your role: {role==0?'Admin' : 'Member'}</p>}
            <button id='admin' onClick={handleChangeRole} style={{marginRight:'5px'}}>Admin</button>
            <button id='user' onClick={handleChangeRole}>Member</button>
        </div>
    </div>)
}
export {RoleButton};