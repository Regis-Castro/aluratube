import config from '../../config.json'
import styled from 'styled-components'

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>

    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    align-items: center;
    display: flex;
    gap: 16px;
    margin-top: 50px;
    padding: 16px 32px;
    width: 100%;
  }
`

export default Header