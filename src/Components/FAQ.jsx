import { useEffect, useState } from "react"
import FAQ_Pre_Accordion from "./FAQ_Components/FAQ_Pre_Accordion"
import AccordionItem from "./FAQ_Components/AccordionItem"
import FAQ_Tablet_Container from "./FAQ_Components/FAQ_Tablet_Container"
import FAQ_Mobile_container from "./FAQ_Components/FAQ_Mobile_container"

function FAQ() {

  /* FAQ is a terrible variable name so I called it concerns */
  const [concerns, setConcerns] = useState([])

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await response.json()
        setConcerns(data)
      } catch(error) {
        console.error('Failed to fetch FAQ;', error)
      }
    }
    fetchConcerns()
  }, [])

  return (
    <section id="FAQ">
      <FAQ_Pre_Accordion />

      <div className="FAQ-right-container">
        {concerns.map((item) => <AccordionItem key={item.id} concern={item}/>)}
      </div>

      <FAQ_Tablet_Container />
      <FAQ_Mobile_container />
    </section>
  )
}
export default FAQ