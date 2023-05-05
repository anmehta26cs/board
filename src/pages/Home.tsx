import React from 'react'

const Home = ({isAuth} : {isAuth : boolean}) => {

    if (!isAuth) {
        return (
            <div>Not logged in</div>
        )
    }

  return (
    <div className='flex items-start'>
        {/* <CardContainer heading='tasks todo' subheading='unfinished'/>
        <CardContainer heading='tasks in progress' subheading='doing'/>
        <CardContainer heading='tasks done' subheading='finished'/> */}
    </div>
  )
}

export default Home