import { TextInputField, Text, Pane, Heading, Button, Link } from 'evergreen-ui';
import styled from 'styled-components';

export const LoginScreen = () => {
  return (
    <>
      <Pane
        className='background'
        justifyContent={'center'}
        alignItems={'center'}
        padding={'2rem'}
        backgroundColor={'#fff'}
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
              Log in
            </Heading>
            <TextInputField required label='Email' placeholder='JohnDoe@domain.com' />
            <TextInputField required type='password' label='Password' placeholder='****' />
            <Button appearance='primary' justifyContent='center'>
              Log in
            </Button>
            <Text textAlign='center' marginTop='2rem'>
              Forgot your password? <Link href='#'> Reset your password</Link>
            </Text>
            <Text textAlign='center'>
              Don't have an account? <Link href='#'>Sign up</Link>
            </Text>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
};
