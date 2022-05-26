import { useContext, useEffect } from "react"
import PickerAmount from "../components/create-plan/PickerAmount"
import PlanBanner from "../components/create-plan/PlanBanner"
import PlanFooter from "../components/create-plan/PlanFooter"
import PlanStep from "../components/create-plan/PlanStep"
import PlanTabs from "../components/create-plan/PlanTabs"
import { AppContext } from "../context/AppProvider"


const CreatePlan = () => {

  
  const { setSpecial } = useContext(AppContext)
  
  
  useEffect(() => {
    setSpecial(false)
  }, [])

  return (
    <main className='plan'>

      <PlanStep />
      <PlanBanner />

      <section className='plan__choice'>
        <PickerAmount />
        <PlanTabs />
      </section>

      <PlanFooter />

    </main>
  )
}

export default CreatePlan

