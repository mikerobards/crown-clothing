import { useNavigate } from 'react-router';

import { DirectoryItemContainer, Body, BackgroundImage } from './directory-item.styles.jsx'

const DirectoryItem = ({ category }) => {
    const { title, route, imageUrl } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage $url={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now!</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;
