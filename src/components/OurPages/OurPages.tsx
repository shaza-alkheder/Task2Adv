import './OurPages.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import { OurPagesData } from './OurPagesData'
import OurPageCard from './OurPageCard'

const ourPages = () => {
    return (
        <>
            <section className='ourPages'>
                <SectionHeader
                    className="OurPagesHeader"
                    subTitle="Explore More"
                    title="Navigate through our Pages"
                    description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
                />
                <div className='pages'>
                    {OurPagesData.map((page) => (
                        <OurPageCard
                            key={page.id}
                            page={page}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ourPages
