import {useState} from 'react';
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';


function Accordion({items}) 
{
const [expandedIndex,setExpandedIndex] = useState(-1);


const handleCLick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
        setExpandedIndex(-1);
    }
    else{
        setExpandedIndex(nextIndex);
    }
}

    const renderedItems = items.map((item,index) =>{
    const isExpanded = index === expandedIndex;
    
    const icon = <span className='text-3xl'>
        {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}  
        {/* if the first value (isExpanded) is true it will show <GoChevronDown/>else <GoChevronLeft/>*/}
    </span>

        return (<div key={item.id}>
            <div className='flex justify-between p-3 bg-gray-50 border-b item-center cursor-pointer' onClick={() => handleCLick(index)}>
            {item.label}
            {icon}
                </div>
            {isExpanded && <div className='border-b p-5'>{item.content}</div>
        }
        </div>);
    });


    return <div className='border-x border-t tounded'>
      {renderedItems}
    </div>
}

export default Accordion;


// || gives back the 1st value that is truthy

// && gives first falsey value or last truthy value