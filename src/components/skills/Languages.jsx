import React from 'react';

const Languages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Portuguese</h3>
                        <span className="skills__level">Native</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">English</h3>
                        <span className="skills__level">Proficient(C2)</span>
                    </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Spanish</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Japanese</h3>
                        <span className="skills__level">In Progress</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Languages