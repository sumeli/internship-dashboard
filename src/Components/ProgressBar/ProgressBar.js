import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react'

const ProgressBar = ({ prog }) => {
    
    return (
        <div>

            <CircularProgressbar
                value={prog?.percentage}
                text={`${prog?.percentage}%`}
                strokeWidth={5}
                styles={{
                    path: {
                        // Path color
                        stroke: `${prog?.strokeColor}`,
                    },
                    text: {
                        // Text color
                        fill: `${prog?.textFill}`,
                        // Text size
                        fontSize: '15px',
                    },
                    trail: {
                        // Trail color
                        stroke: '#F4F4F4',
                    }
                }}

            />

        </div>
    )
}

export default ProgressBar
