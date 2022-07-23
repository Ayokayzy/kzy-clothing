import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
