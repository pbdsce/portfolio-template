import React, {useEffect} from 'react'

const Redirect = () => {
    useEffect(() => {
      window.location.replace('https://pointblank.club')
    }, [])
    
  return (
    <div>Redirect</div>
  )
}

export default Redirect