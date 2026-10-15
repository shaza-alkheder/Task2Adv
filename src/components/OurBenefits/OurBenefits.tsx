import SectionHeader from '../SectionHeader/SectionHeader'
import './OurBenefits.css'
import OurBenefitsCard from './OurBenefitsCard'
import { OurBenefitsData } from './OurBenefitsData'

const OurBenefits = () => {
    return (
        <>
            <section className='benefits'>
                <SectionHeader
                    className="benefitsHeader"
                    subTitle="Children Deserve Bright Future"
                    title="Our Benefits"
                    description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
                />
                <div className='cards'>
                    {OurBenefitsData.map((benefit) => (
                        <OurBenefitsCard
                            key={benefit.id}
                            benefit={benefit}
                        />
                    ))}
                </div>

            </section>
        </>
    )
}

export default OurBenefits
