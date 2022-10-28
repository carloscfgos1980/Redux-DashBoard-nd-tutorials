import Alert from 'react-bootstrap/Alert';

const AlertExample = () => {
    return (
        <>
            <Alert variant='success'>
                This is a 'success' alert—check it out!
            </Alert>
            <Alert variant='warning'>
                This is a 'warning' alert with{' '}
                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                you like.
            </Alert>
        </>
    );
}

export default AlertExample;