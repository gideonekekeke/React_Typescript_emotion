import React from 'react'

interface Iprops {
    Uname : string;
    Uemail : string;
}

const CompD:React.FC<Iprops> = ({Uname, Uemail}) => {
  return (
		<div>
			<div>CompD</div>
            <div>{Uname}</div>
            <div>{Uemail}</div>
		</div>
	);
}

export default CompD