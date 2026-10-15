import type { BenefitItem } from "../../interfaces";
import './OurBenefitsCard.css'

interface BenefitCardProps {
    benefit: BenefitItem;
}
const OurBenefitsCard = ({ benefit }: BenefitCardProps) => {
    return (
        <>
            <div className='wapper' >
                <div className='card'>
                    <div className='divIcon'>
                        <img src={benefit.icon} alt={benefit.iconAlt} />
                    </div>
                    <h2>{benefit.title}</h2>
                    <p>{benefit.description} </p>
                </div>
            </div>
        </>
    )
}

export default OurBenefitsCard
