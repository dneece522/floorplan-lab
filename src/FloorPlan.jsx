import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = () => {
  const bedNum = [1, 2, 3]
  return (
    < >
      <div><LivingRoom /></div>
      <div><Bedroom num={bedNum[1]}/></div>
      <div><Kitchen /></div>
      <div><Bedroom num={bedNum[0]}/></div>
      <div><Bath size="Full"/></div>
      <div><Bedroom num={bedNum[2]}/></div>
      <div><Bath size="Half"/></div>
    </>
  )
}

export default FloorPlan