import React from 'react'
import { ButtonLink } from '../src/components/base'

interface ErrorProps {
  statusCode: number
}

const Error = (props: ErrorProps) => {
  const { statusCode } = props
  return (
    <div className='w-full'>
      <div className='container mx-auto py-12'>
        <div className='w-full text-center'>
          <h1 className='text-6xl font-extrabold text-grey__dark'>
            {statusCode == 404
              ? "The page can't be found"
              : statusCode + ' Error!'}
          </h1>
        </div>
        <div className='w-full py-12'>
          {statusCode == 404 ? (
            <h1 className='text-2xl font-bold text-grey__dark'>
              {statusCode} - Error - the page you are looking for might not
              exist or could be an expired link.
            </h1>
          ) : (
            <h1 className='text-2xl font-bold text-grey__dark'>
              {statusCode} - Error - something went wrong!.
            </h1>
          )}
        </div>
        <div className='o-layout__item u-margin-top u-margin-bottom'>
          <ButtonLink color='primary' href='/' data-text={'-go to homepage'}>
            <span>-go to homepage</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
Error.getInitialProps = (params: any) => {
  const { res, err } = params
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return {
    statusCode
  }
}
export default Error
