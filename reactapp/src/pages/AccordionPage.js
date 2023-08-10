import React from "react";
import Button from "./components/Button";
import Accordion from "../components/Accordion";

function AccordionPage() { 
  const items = [
    {
      id: '1',
      label:'Can I use React on a project?',
      content:'You can use React on any project you want.'
    },
    {
      id: '2',
      label:'Can I use JavaScript on a project?',
      content:'You can use JavaScript on any project you want.'
    },
    {
      id: '3',
      label:'Can I use Java on a project?',
      content:'You can use Java on any project you want.'
    }
  ]

  return <Accordion items={items}/>
}
export default AccordionPage;
