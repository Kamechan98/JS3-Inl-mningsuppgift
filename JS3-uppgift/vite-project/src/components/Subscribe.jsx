import React from 'react'

const Subscribe = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className='Subscribe'>
        <div className="subscribe-wrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your email here"/>
                <button>Subscribe for newsletter</button>
            </form>
        </div>
    </div>
  )
}

export default Subscribe