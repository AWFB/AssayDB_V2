import { Link } from 'react-router-dom'
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaAddressCard,
  FaVial,
  FaPlus,
} from 'react-icons/fa'

const Navbar = () => {

  return (
    <header className='header'>
      <div className='logo'>
        <Link id='link_styles' to='/'>
          <FaVial style={{ marginRight: '5px' }} />
          <li>AssayDB</li>
        </Link>
      </div>
      <ul>
        {true ? (
          <>
            <li>
              <Link id='link_styles' to='create-assay'>
                Create Assay
                <FaPlus style={{ marginLeft: '5px' }} />
              </Link>
            </li>
            <li>
              <Link id='link_styles' to='dashboard'>
                Profile
                <FaAddressCard style={{ marginLeft: '5px' }} />
              </Link>
            </li>
            <li>
              <button className='btn'>
                Logout
                <FaSignOutAlt style={{ marginLeft: '5px' }} />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link id='link_styles' to='/login'>
                Login <FaSignInAlt style={{ marginLeft: '5px' }} />
              </Link>
            </li>
            <li>
              <Link id='link_styles' to='register'>
                Register <FaUser style={{ marginLeft: '5px' }} />
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Navbar
