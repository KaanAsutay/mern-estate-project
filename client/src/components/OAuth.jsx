import React from 'react'

const OAuth = () => {
    const handleGoogleClick = async () => {
        try {
            
        } catch (error) {
            console.log('coul')
        }
    }

  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700  text-white p-3 rounded-lg uppercase hover:opacity-95'> Contiune with google </button>
  )
}

export default OAuth