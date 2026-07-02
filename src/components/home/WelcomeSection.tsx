import { memo } from "react";
import { Link } from "react-router-dom";


export const WelcomeSection = memo(()=>{
return (
    <div className="">
        <div className="">
            <h2>
                Welcome to
            <span>
                Welcome to
                </span>
                Sri Sri Ravishankar Vidya Mandir
                </h2>
            <p>Sri Sri Ravishankar Vidya Mandir, a revered temple of knowledge where every child's potential is nurtured. At our institution, we embrace the profound principle of 'Vidya DadatiPoornatvam' (Education Brings Completeness), guiding our dedication to holistic development.</p>
            <Link to="/about" className="inline-block mt-6  bg-blue-800 hover:bg-blue-600  rounded-full text-white px-4 transition-colors py-1">Read More</Link>
        </div>
        <div>
            <img 
            src="/images/homepage/img.jpg"
            />
        </div>
    </div>
)
})

WelcomeSection.displayName = 'WelcomeSection'