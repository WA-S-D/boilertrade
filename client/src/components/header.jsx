export const Header = (props) => {
  if (!localStorage.getItem('user')) {
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='/login'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Get Started
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='/dash'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Go To DashBoard
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
