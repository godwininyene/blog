import React from 'react';

const SectionTitle = ({title, desc, children})=>{
    return(
        <div className="section-title flex flex-wrap flex-col lg:flex-row justify-between items-start lg:items-center mb-10 pb-5 border-b border-b-slate-200 relative before:absolute before:left-0 before:bottom-[-1px] before:w-[70px] before:h-[1px] before:bg-primary">
        <div className="caption">
             <h2 className="text-left text-2xl font-bold">{title}</h2>
             <h4 className="text-left text-slate-500 text-xs font-semibold mt-2">{desc}</h4>
        </div>

        {children}
     </div>
    )
};
export default SectionTitle