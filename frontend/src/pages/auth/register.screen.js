import { TextInputField, Text, Pane, Heading, Button, Link } from 'evergreen-ui';
import styled from 'styled-components';

// export const AuthContainer = styled(Pane)`
//   .background {
//     background: #fff !important;
//   }
// `;

export const RegisterScreen = () => {
  return (
    <>
      <Pane
        className='background'
        justifyContent={'center'}
        alignItems={'center'}
        padding={'2rem'}
        backgroundColor={'#fff'}
        width={'35rem'}
      >
        <Pane className='background' width={[1, 1 / 2, 1 / 3]}>
          <Pane
            background='white'
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            flexDirection='column'
            padding={20}
          >
            <Heading size={700} textAlign='center' paddingBottom='2rem' fontWeight={600}>
              Register
            </Heading>
            <TextInputField required label='Username' placeholder='John Doe' />
            <TextInputField required label='Email' placeholder='JohnDoe@domain.com' />
            <TextInputField required type='password' label='Password' placeholder='****' />
            <Button appearance='primary' justifyContent='center'>
              Sign Up
            </Button>

            <Text textAlign='center'>
              Already have an account? <Link href='#'>Sign In</Link>
            </Text>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};
