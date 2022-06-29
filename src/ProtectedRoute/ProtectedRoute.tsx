import {Navigate} from 'react-router-dom';

interface Props {
    children: JSX.Element;
    condition: boolean;
    fallback: string;
}

const ProtectedRoute = (props: Props) => {
    const {children, condition, fallback} = props;

    return condition ? children : <Navigate to={fallback} replace />;
}

export default ProtectedRoute;
