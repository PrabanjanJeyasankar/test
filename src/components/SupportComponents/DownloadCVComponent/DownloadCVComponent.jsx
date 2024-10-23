import downloadCVStyles from './DownloadCVComponent.module.css'

function DownloadCVComponent() {
    const handleRedirect = () => {
        const docLink =
            'https://docs.google.com/document/d/1WOoRMqaK4vsuLPcBcIj6_-bLPCeu7Qt6BAcPikRqnmc/edit?usp=sharing' // Replace with your document link
        window.open(docLink, '_blank')
    }

    return (
        <div className={downloadCVStyles.galaxy_button}>
            <button
                className={downloadCVStyles.space_button}
                onClick={handleRedirect} // Attach the redirect function to the button
            >
                <span className={downloadCVStyles.backdrop}></span>
                <span className={downloadCVStyles.galaxy}></span>
                <label className={downloadCVStyles.text}>
                    <span>Resume</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='lucide lucide-arrow-up-right'>
                        <path d='M7 7h10v10' />
                        <path d='M7 17 17 7' />
                    </svg>
                </label>
            </button>
        </div>
    )
}

export default DownloadCVComponent
