import Accordion from '../components/Accordion';

function AccordionPage (){
const items = [
    {
        id:'hs23',
       label : "Name" ,
       content:"Anthony Gonsal"
    },

    {
        id:'hs33',
        label : 'Occupation' ,
       content:'Loner'
    },

    {
        id:'hs43',
        label : 'Solution' ,
       content:'cigarette'
    }
]


return <Accordion items={items}/>


}


export default AccordionPage;